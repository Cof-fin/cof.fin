// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./interfaces/ICoffinAddressRegistry.sol";

// import "@openzeppelin/contracts/access/Ownable.sol";

contract CoffinAddressRegistry is ICoffinAddressRegistry {
    bytes32 private constant UNISWAPV3ROUTER = "UNISWAPV3R";
    bytes32 private constant AAVEV3POOL = "AAVEV3POOL";
    bytes32 private constant WETH = "WETH";
    bytes32 private constant GHO = "GHO";
    bytes32 private constant USDC = "USDC"; // aave faucet USDC
    bytes32 private constant NFPositionManager = "NFPositionManager"; // aave faucet USDC

    mapping(bytes32 => address) public addresses;

    function getAddress(bytes32 _identifier) public view returns (address) {
        return addresses[_identifier];
    }

    function setUniswap(address contractAddress) external {
        _setAddress(UNISWAPV3ROUTER, contractAddress);
    }

    function setWETH(address contractAddress) external {
        _setAddress(WETH, contractAddress);
    }

    function setAave(address contractAddress) external {
        _setAddress(AAVEV3POOL, contractAddress);
    }

    function setGHO(address contractAddress) external {
        _setAddress(GHO, contractAddress);
    }

    function setUSDC(address contractAddress) external {
        _setAddress(USDC, contractAddress);
    }

    function setNFPositionManager(address contractAddress) external {
        _setAddress(NFPositionManager, contractAddress);
    }

    function getUniswap() external view returns (address) {
        return getAddress(UNISWAPV3ROUTER);
    }

    function getAave() external view returns (address) {
        return getAddress(AAVEV3POOL);
    }

    function getWETH() external view returns (address) {
        return getAddress(WETH);
    }

    function getGHO() external view returns (address) {
        return getAddress(GHO);
    }

    function getUSDC() external view returns (address) {
        return getAddress(USDC);
    }

    function getNFPositionManager() external view returns (address) {
        return getAddress(NFPositionManager);
    }

    function _setAddress(
        bytes32 _identifier,
        address contractAddress
    ) internal {
        addresses[_identifier] = contractAddress;
    }
}
