import React, { createContext, ReactNode, useContext, useState } from 'react';
import { contractABI, contractAddress } from '../../utils/constants';

import { ethers } from 'ethers';
import { toast } from 'react-toastify';
import { TransactionData } from '../types/Transaction';

export const TransactionsContext = createContext<any>(null);

const { ethereum }: any = window;

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
  const [transactionCountValue, setTransactionCountValue] = useState<number>(
    Number(count)
  );

  // Check if Wallet is Connected
  const isWalletConnected = async (): Promise<any> => {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

    if (accounts.length > 0) {
      setCurrentAccount(accounts[0]);
    } else return;
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

        const { amount, address, message, keyword } = data;
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

  React.useEffect(() => {
    isWalletConnected();
    console.log(currentAccount);
  }, [currentAccount]);

  return (
    <TransactionsContext.Provider
      value={{
        connectToWallet,
        currentAccount,
        makeTransaction,
        loading,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
