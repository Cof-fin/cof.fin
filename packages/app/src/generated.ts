// Generated by @wagmi/cli@0.1.15 on 5/14/2023 at 2:20:10 AM
import {
  getContract,
  GetContractArgs,
  readContract,
  ReadContractConfig,
  writeContract,
  WriteContractMode,
  WriteContractArgs,
  WriteContractPreparedArgs,
  WriteContractUnpreparedArgs,
  prepareWriteContract,
  PrepareWriteContractConfig,
  watchContractEvent,
  WatchContractEventConfig,
  WatchContractEventCallback,
} from '@wagmi/core'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GHO
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211)
 */
export const ghoABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'facilitatorAddress', internalType: 'address', type: 'address', indexed: true },
      { name: 'label', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'bucketCapacity', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'FacilitatorAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'facilitatorAddress', internalType: 'address', type: 'address', indexed: true },
      { name: 'oldCapacity', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'newCapacity', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'FacilitatorBucketCapacityUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'facilitatorAddress', internalType: 'address', type: 'address', indexed: true },
      { name: 'oldLevel', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'newLevel', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'FacilitatorBucketLevelUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'facilitatorAddress', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'FacilitatorRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'facilitatorAddress', internalType: 'address', type: 'address' },
      {
        name: 'facilitatorConfig',
        internalType: 'struct IGhoToken.Facilitator',
        type: 'tuple',
        components: [
          { name: 'bucketCapacity', internalType: 'uint128', type: 'uint128' },
          { name: 'bucketLevel', internalType: 'uint128', type: 'uint128' },
          { name: 'label', internalType: 'string', type: 'string' },
        ],
      },
    ],
    name: 'addFacilitator',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'facilitator', internalType: 'address', type: 'address' }],
    name: 'getFacilitator',
    outputs: [
      {
        name: '',
        internalType: 'struct IGhoToken.Facilitator',
        type: 'tuple',
        components: [
          { name: 'bucketCapacity', internalType: 'uint128', type: 'uint128' },
          { name: 'bucketLevel', internalType: 'uint128', type: 'uint128' },
          { name: 'label', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'facilitator', internalType: 'address', type: 'address' }],
    name: 'getFacilitatorBucket',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getFacilitatorsList',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'facilitatorAddress', internalType: 'address', type: 'address' }],
    name: 'removeFacilitator',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'facilitator', internalType: 'address', type: 'address' },
      { name: 'newCapacity', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'setFacilitatorBucketCapacity',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

/**
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211)
 */
export const ghoAddress = {
  5: '0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211',
} as const

/**
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211)
 */
export const ghoConfig = { address: ghoAddress, abi: ghoABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// USDC
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x69305b943C6F55743b2Ece5c0b20507300a39FC3)
 */
export const usdcABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
      { name: 'decimals', internalType: 'uint8', type: 'uint8' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'EIP712_REVISION',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'mint',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

/**
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x69305b943C6F55743b2Ece5c0b20507300a39FC3)
 */
export const usdcAddress = {
  5: '0x69305b943C6F55743b2Ece5c0b20507300a39FC3',
} as const

/**
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x69305b943C6F55743b2Ece5c0b20507300a39FC3)
 */
export const usdcConfig = { address: usdcAddress, abi: usdcABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Core
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link ghoABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211)
 */
export function getGho(
  config: Omit<GetContractArgs, 'abi' | 'address'> & { chainId?: keyof typeof ghoAddress },
) {
  return getContract({ abi: ghoABI, address: ghoAddress[5], ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ghoABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211)
 */
export function readGho<
  TAbi extends readonly unknown[] = typeof ghoABI,
  TFunctionName extends string = string,
>(
  config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi' | 'address'> & {
    chainId?: keyof typeof ghoAddress
  },
) {
  return readContract({
    abi: ghoABI,
    address: ghoAddress[5],
    ...config,
  } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ghoABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211)
 */
export function writeGho<
  TFunctionName extends string,
  TMode extends WriteContractMode,
  TChainId extends number = keyof typeof ghoAddress,
>(
  config:
    | (Omit<WriteContractPreparedArgs<typeof ghoABI, TFunctionName>, 'abi' | 'address'> & {
        mode: TMode
        chainId?: TMode extends 'prepared' ? TChainId : keyof typeof ghoAddress
      })
    | (Omit<WriteContractUnpreparedArgs<typeof ghoABI, TFunctionName>, 'abi' | 'address'> & {
        mode: TMode
        chainId?: TMode extends 'prepared' ? TChainId : keyof typeof ghoAddress
      }),
) {
  return writeContract({ abi: ghoABI, address: ghoAddress[5], ...config } as WriteContractArgs<
    typeof ghoABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link ghoABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211)
 */
export function prepareWriteGho<
  TAbi extends readonly unknown[] = typeof ghoABI,
  TFunctionName extends string = string,
>(
  config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi' | 'address'> & {
    chainId?: keyof typeof ghoAddress
  },
) {
  return prepareWriteContract({
    abi: ghoABI,
    address: ghoAddress[5],
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ghoABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211)
 */
export function watchGhoEvent<
  TAbi extends readonly unknown[] = typeof ghoABI,
  TEventName extends string = string,
>(
  config: Omit<WatchContractEventConfig<TAbi, TEventName>, 'abi' | 'address'> & {
    chainId?: keyof typeof ghoAddress
  },
  callback: WatchContractEventCallback<TAbi, TEventName>,
) {
  return watchContractEvent(
    { abi: ghoABI, address: ghoAddress[5], ...config } as WatchContractEventConfig<
      TAbi,
      TEventName
    >,
    callback,
  )
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link usdcABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x69305b943C6F55743b2Ece5c0b20507300a39FC3)
 */
export function getUsdc(
  config: Omit<GetContractArgs, 'abi' | 'address'> & { chainId?: keyof typeof usdcAddress },
) {
  return getContract({ abi: usdcABI, address: usdcAddress[5], ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link usdcABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x69305b943C6F55743b2Ece5c0b20507300a39FC3)
 */
export function readUsdc<
  TAbi extends readonly unknown[] = typeof usdcABI,
  TFunctionName extends string = string,
>(
  config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi' | 'address'> & {
    chainId?: keyof typeof usdcAddress
  },
) {
  return readContract({
    abi: usdcABI,
    address: usdcAddress[5],
    ...config,
  } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link usdcABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x69305b943C6F55743b2Ece5c0b20507300a39FC3)
 */
export function writeUsdc<
  TFunctionName extends string,
  TMode extends WriteContractMode,
  TChainId extends number = keyof typeof usdcAddress,
>(
  config:
    | (Omit<WriteContractPreparedArgs<typeof usdcABI, TFunctionName>, 'abi' | 'address'> & {
        mode: TMode
        chainId?: TMode extends 'prepared' ? TChainId : keyof typeof usdcAddress
      })
    | (Omit<WriteContractUnpreparedArgs<typeof usdcABI, TFunctionName>, 'abi' | 'address'> & {
        mode: TMode
        chainId?: TMode extends 'prepared' ? TChainId : keyof typeof usdcAddress
      }),
) {
  return writeContract({ abi: usdcABI, address: usdcAddress[5], ...config } as WriteContractArgs<
    typeof usdcABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link usdcABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x69305b943C6F55743b2Ece5c0b20507300a39FC3)
 */
export function prepareWriteUsdc<
  TAbi extends readonly unknown[] = typeof usdcABI,
  TFunctionName extends string = string,
>(
  config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi' | 'address'> & {
    chainId?: keyof typeof usdcAddress
  },
) {
  return prepareWriteContract({
    abi: usdcABI,
    address: usdcAddress[5],
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link usdcABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x69305b943C6F55743b2Ece5c0b20507300a39FC3)
 */
export function watchUsdcEvent<
  TAbi extends readonly unknown[] = typeof usdcABI,
  TEventName extends string = string,
>(
  config: Omit<WatchContractEventConfig<TAbi, TEventName>, 'abi' | 'address'> & {
    chainId?: keyof typeof usdcAddress
  },
  callback: WatchContractEventCallback<TAbi, TEventName>,
) {
  return watchContractEvent(
    { abi: usdcABI, address: usdcAddress[5], ...config } as WatchContractEventConfig<
      TAbi,
      TEventName
    >,
    callback,
  )
}
