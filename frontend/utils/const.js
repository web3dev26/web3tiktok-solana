import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import tiktok from './tiktok_clone.json'


export const SOLANA_HOST = clusterApiUrl('devnet')

export const TIKTOK_PROGRAM_ID = new PublicKey(
    "GiMxGpXwqL9HtcNNZhbB1iZHtxJEq56YzL4NzqA5Ui5z"
)

export const TIKTOK_IDL = tiktok
