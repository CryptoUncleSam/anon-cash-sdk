import { PublicKey } from '@solana/web3.js';
import BN from 'bn.js';

export const FIELD_SIZE = new BN('21888242871839275222246405745257275088548364400416034343698204186575808495617')

export const PROGRAM_ID = new PublicKey('9fhQBbumKEFuXtMBDw8AaQyAjCorLGJQiS3skWZdQyQD');

export const DEPLOYER_ID = new PublicKey('97rSMQUukMDjA7PYErccyx7ZxbHvSDaeXp2ig5BwSrTf')

//BxuZn19npE43qkrQycBSb12vgruyD3vLygxwZss7eXLU
export const FEE_RECIPIENT = new PublicKey('anonnVMz2BBHXXHqHF7YSV4gj4rmRLhNBB3xtWahFky')

export const FETCH_UTXOS_GROUP_SIZE = 10_000

export const TRANSACT_IX_DISCRIMINATOR = Buffer.from([217, 149, 130, 143, 221, 52, 252, 119]);

export const TRANSACT_SPL_IX_DISCRIMINATOR = Buffer.from([154, 66, 244, 204, 78, 225, 163, 151]);

export const MERKLE_TREE_DEPTH = 26;

export const ALT_ADDRESS = new PublicKey('3XKZh42gehGYjVXFq1Y8p6F96rSFuX4wujmN98XE7wEV');

export const RELAYER_API_URL = process.env.NEXT_PUBLIC_RELAYER_API_URL ?? 'https://api3.privacycash.org';

export const SIGN_MESSAGE = `Privacy Money account sign in`

// localStorage cache keys
export const LSK_FETCH_OFFSET = 'fetch_offset'
export const LSK_ENCRYPTED_OUTPUTS = 'encrypted_outputs'

export const USDC_MINT = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v')