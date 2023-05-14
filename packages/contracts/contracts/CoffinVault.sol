// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import {IPool} from "@aave/core-v3/contracts/interfaces/IPool.sol";
import {DataTypes} from "@aave/core-v3/contracts/protocol/libraries/types/DataTypes.sol";

import "./interfaces/ICoffinAddressRegistry.sol";
import "./interfaces/ICoffinVault.sol";
import "./dependencies/Interfaces.sol";
import "hardhat/console.sol";

interface IERC721Receiver {
    function onERC721Received(
        address operator,
        address from,
        uint tokenId,
        bytes calldata data
    ) external returns (bytes4);
}

contract CoffinVault is ICoffinVault, IERC721Receiver {
    // AAVE Pool Proxy address
    ICoffinAddressRegistry public addressRegistry;
    uint24 public constant poolFee = 3000;

    Position[] public positions;
    mapping(uint256 => Deposit) public deposits;

    constructor(address _addressRegistry) {
        addressRegistry = ICoffinAddressRegistry(_addressRegistry);
        // give user ownership of vault
        // transferOwnership(tx.origin);
    }

    // user needs to approve spending token before calling this function
    function createLeveragedPosition(Position memory _position) external {
        // assume only USDC for hack
        require(
            _position.token != address(0),
            "CoffinVault:createLeveragedPosition:: Invalid token address"
        );

        require(
            _position.leverage >= 100,
            "CoffinVault:createLeveragedPosition:: Leverage cannot be less than x1"
        );

        // get reserve data for collateral, in our case weth
        address WETH = addressRegistry.getWETH();
        uint16 ltv = getLTVForAsset(WETH);
        require(
            ltv >= 100,
            "CoffinVault:createLeveragedPosition:: Reserve LTV too low"
        );

        // example math for frontend calculation of multiplier
        // ltv 7500 => 75% from aave
        // => max leverage = x 1.75 => 1750 bp

        // check if leverage provided is possible
        require(
            _position.leverage <= ltv,
            "CoffinVault:createLeveragedPosition:: Leverage above LTV"
        );

        address vault = address(this);
        address USDC = addressRegistry.getUSDC();

        ISwapRouter swapRouter = ISwapRouter(addressRegistry.getUniswap());

        IERC20(USDC).transferFrom(msg.sender, vault, _position.amount);
        IERC20(USDC).approve(address(swapRouter), _position.amount);

        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter
            .ExactInputSingleParams({
                tokenIn: USDC,
                tokenOut: WETH,
                fee: poolFee, // assuming there exists a USDC/WETH 0.3% pool
                recipient: vault,
                deadline: block.timestamp,
                amountIn: _position.amount,
                amountOutMinimum: 0, // todo set in prod
                sqrtPriceLimitX96: 0 // todo set in prod
            });

        uint256 wethAmount = swapRouter.exactInputSingle(params);

        IPool aavePool = IPool(addressRegistry.getAave());
        // supply weth to aave
        aavePool.supply(WETH, wethAmount, address(this), 0);

        (uint256 totalCollateralETH, , , , , ) = aavePool.getUserAccountData(
            vault // todo check this
        );

        // Calculate borrow amount
        uint256 maxBorrowAmountInWei = (totalCollateralETH *
            _position.leverage) / 1000;

        address GHO = addressRegistry.getGHO();

        // fix mafs
        aavePool.borrow(GHO, maxBorrowAmountInWei * 10 ** 9, 2, 0, vault);

        uint256 borrowedGHOAmount = IERC20(GHO).balanceOf(vault);

        _position.active = true;
        positions.push(_position);

        emit CreatedLeveragedPosition(vault, borrowedGHOAmount, _position);
    }

    function createLeveragedPositionETH(
        Position memory _position
    ) external payable {
        // doesnt check position.amount. just uses msg.value instead
        require(
            _position.token == address(0),
            "CoffinVault:createLeveragedPositionETH:: Token address must be 0x0"
        );

        require(
            _position.leverage >= 100,
            "CoffinVault:createLeveragedPositionETH:: Leverage cannot be less than x1"
        );

        // get reserve data for collateral, in our case weth
        address wethAddress = addressRegistry.getWETH();
        uint16 ltv = getLTVForAsset(wethAddress);

        require(
            ltv >= 100,
            "CoffinVault:createLeveragedPositionETH:: Reserve LTV too low"
        );

        // check if leverage provided is possible
        require(
            _position.leverage <= ltv,
            "CoffinVault:createLeveragedPositionETH:: Leverage above LTV"
        );

        address vault = address(this);

        IWETH(wethAddress).deposit{value: msg.value}();

        IPool aavePool = IPool(addressRegistry.getAave());

        IWETH(wethAddress).approve(addressRegistry.getAave(), msg.value);

        // supply weth to aave
        aavePool.supply(wethAddress, msg.value, vault, 0);

        (uint256 totalCollateralETH, , , , , ) = aavePool.getUserAccountData(
            vault // todo check this
        );

        // Calculate borrow amount
        uint256 maxBorrowAmountInWei = (totalCollateralETH *
            _position.leverage) / 1000;

        address GHO = addressRegistry.getGHO();

        // fix mafs
        aavePool.borrow(GHO, (maxBorrowAmountInWei * 10 ** 9), 2, 0, vault);

        uint256 borrowedGHOAmount = IERC20(GHO).balanceOf(vault);

        _position.active = true;
        positions.push(_position);
        emit CreatedLeveragedPosition(vault, borrowedGHOAmount, _position);
    }

    // should be called in succession w createLeveragedPosition(ETH).
    // takes max amount of GHO, splits in half for weth then >
    // deposits 50/50 GHO/WETH into LP pool
    // assumed address(this) already has x amount of GHO
    function provideLiquidity(
        int24 minTick,
        int24 maxTick
    ) external returns (uint128 liquidity, uint256 amount0, uint256 amount1) {
        minTick = type(int24).min;
        maxTick = type(int24).max;

        address GHO = addressRegistry.getGHO();
        address WETH = addressRegistry.getWETH();

        require(
            IERC20(GHO).balanceOf(address(this)) > 0,
            "CoffinVault:provideLiquidity:: Not enough GHO in valut."
        );

        uint256 lpGHOAmount = IERC20(GHO).balanceOf(address(this)) / 2;

        INonfungiblePositionManager nfPosManager = INonfungiblePositionManager(
            addressRegistry.getAddress("NFPositionManager")
        );

        // swap 50% of GHO for WETH
        ISwapRouter swapRouter = ISwapRouter(addressRegistry.getUniswap());
        IERC20(GHO).approve(address(swapRouter), lpGHOAmount);

        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter
            .ExactInputSingleParams({
                tokenIn: GHO,
                tokenOut: WETH,
                fee: poolFee, // assuming there exists a GHO/WETH 0.3% pool
                recipient: address(this),
                deadline: block.timestamp,
                amountIn: 1, // 50% of GHO
                amountOutMinimum: 0, // todo set in prod
                sqrtPriceLimitX96: 0 // todo set in prod
            });

        uint256 wethAmount = swapRouter.exactInputSingle(params);

        IERC20(WETH).approve(address(nfPosManager), wethAmount);
        IERC20(GHO).approve(address(nfPosManager), lpGHOAmount);

        INonfungiblePositionManager.MintParams
            memory mintParams = INonfungiblePositionManager.MintParams({
                token0: GHO,
                token1: WETH,
                fee: poolFee,
                tickLower: minTick,
                tickUpper: maxTick,
                amount0Desired: lpGHOAmount,
                amount1Desired: wethAmount,
                amount0Min: 0, // todo set in prod
                amount1Min: 0, // todo set in prod
                recipient: address(this),
                deadline: block.timestamp
            });

        (, liquidity, amount0, amount1) = nfPosManager.mint(mintParams);

        // nfPosManager.mint(mintParams);

        if (amount0 < lpGHOAmount) {
            IERC20(GHO).approve(address(nfPosManager), 0);
            IERC20(GHO).transfer(msg.sender, lpGHOAmount - amount0);
        }
        if (amount1 < wethAmount) {
            IWETH(WETH).approve(address(nfPosManager), 0);
            IWETH(WETH).transfer(msg.sender, wethAmount - amount1);
        }
    }

    function withdrawPosition() external {}

    function getUserPositions() external view returns (Position[] memory) {
        return positions;
    }

    function getLTVForAsset(address _asset) internal view returns (uint16) {
        IPool aavePool = IPool(addressRegistry.getAave());
        DataTypes.ReserveData memory reserveData = aavePool.getReserveData(
            _asset
        );
        return uint16(reserveData.configuration.data);
    }

    function onERC721Received(
        address operator,
        address from,
        uint tokenId,
        bytes calldata
    ) external returns (bytes4) {
        return IERC721Receiver.onERC721Received.selector;
    }
}
