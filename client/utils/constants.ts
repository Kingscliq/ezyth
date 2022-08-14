import abi from './Transactions.json'

export const contractABI = abi.abi
export const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS
export const API_KEY = import.meta.env.VITE_GIFFY_API_KEY