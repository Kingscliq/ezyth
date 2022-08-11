import abi from './Transactions.json'

export const contractABI = abi.abi
export const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS
export const API_KEY = import.meta.env.VITE_GIFFY_API_KEY
// || '0x28dc70dE49D4203F6CdaD99A51Da6B2f585AeE87'