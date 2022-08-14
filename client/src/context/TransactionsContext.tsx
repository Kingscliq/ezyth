import React, { createContext, ReactNode, useContext, useState } from 'react';
import { contractABI, contractAddress } from '../../utils/constants';

import { ethers } from 'ethers';
import { toast } from 'react-toastify';
import { TransactionData } from '../types/Transaction';

export const TransactionsContext = createContext<any>(null);

const { ethereum }: any = window;

// Get Ethereum Contract
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  return transactionContract;
};

export const TransactionProvider = ({ children }: any) => {
  const count = localStorage.getItem('transactionCount');
  const [currentAccount, setCurrentAccount] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<string[] | undefined>([]);
  const [transactionCountValue, setTransactionCountValue] = useState<number>(
    Number(count)
  );

  // Check if Wallet is Connected
  const isWalletConnected = async (): Promise<any> => {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    fetchAllTransactions();
    if (accounts.length > 0) {
      setCurrentAccount(accounts[0]);
    } else return;
  };

  // Check if transactions Exist
  const fetchAllTransactions = async () => {
    if (!ethereum) return toast('Please connect to a Metamask');
    try {
      const transactionContract = getEthereumContract();
      // Get All Transactions
      const transactions = await transactionContract.fetchAllTransactions();
      console.log(transactions);
      const formattedTransactions = transactions.map((t: any) => {
        return {
          addressTo: t.reciever,
          addressFrom: t.sender,
          amount: parseInt(t.amount._hex) / 10 ** 18,
          message: t.message,
          timestamp: new Date(t.timestamp.toNumber() * 1000).toLocaleString(),
          keyword: t.keyword,
        };
      });

      setTransactions(formattedTransactions);
    } catch (error) {
      console.log(error);
    }
  };

  // Connect to Wallet
  const connectToWallet = async (): Promise<any> => {
    try {
      if (!ethereum) return toast('Please connect to a Metamask');
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      toast.error('No account found');
    }
  };

  // Send Transaction
  const makeTransaction = async (data: TransactionData): Promise<any> => {
    setLoading(true);
    if (!ethereum) {
      return toast('Please connect to a Metamask');
    } else {
      try {
        const transactionContract = getEthereumContract();
        const { amount, address, keyword, message } = data;
        const parsedAmount = ethers.utils.parseEther(amount);
        // console.log(transactionContract);

        await ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: currentAccount,
              to: address,
              gas: '0x5208', // 21000 GWEI
              value: parsedAmount._hex, // Converted Amount to Hex before sending
            },
          ],
        });

        // Add Transaction to Blockchain
        const transactionHash = await transactionContract.makeTransfer(
          address,
          parsedAmount,
          keyword,
          message
        );

        // Await transaction to be mined
        await transactionHash.wait();
        setLoading(false);
        toast.success('Transaction Successfully sent to:', address as any);

        // GetTransaction Count
        const transactionCount =
          await transactionContract.fetchTransactionCount();
        setTransactionCountValue(transactionCount);
      } catch (error) {
        toast.error('Transaction Failed');
        setLoading(false);
      }
    }
  };

  // Check if transactions Exist
  const checkTransactions = async () => {
    try {
      const transactionContract = getEthereumContract();
      // GetTransaction Count
      const transactionCount =
        await transactionContract.fetchTransactionCount();

      localStorage.setItem('TransactionCount', transactionCount);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    isWalletConnected();
    checkTransactions();
    console.log(currentAccount);
  }, [currentAccount]);

  return (
    <TransactionsContext.Provider
      value={{
        connectToWallet,
        currentAccount,
        makeTransaction,
        loading,
        transactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
