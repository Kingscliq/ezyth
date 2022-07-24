import React, { createContext, ReactNode, useContext, useState } from 'react';
import { contractABI, contractAddress } from '../../utils/constants';

import { ethers } from 'ethers';
import { toast } from 'react-toastify';

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

  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionProvider = ({ children }: any) => {
  const [currentAccount, setCurrentAccount] = useState<string>('');
  const isWalletConnected = async (): Promise<any> => {
    if (!ethereum) return toast('Please connect to a Metamask');
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    }
  };

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

  React.useEffect(() => {
    isWalletConnected();
    console.log(currentAccount);
  }, [currentAccount]);

  return (
    <TransactionsContext.Provider value={{ connectToWallet, currentAccount }}>
      {children}
    </TransactionsContext.Provider>
  );
};
