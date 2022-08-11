import React, { useState, useContext } from 'react';
import { TransactionsContext } from '../context/TransactionsContext';
import { dummy } from '../../utils/dummy';
import { shorten } from '../../utils/formatters';
import { useFetch } from '../hooks/useFetch';
interface TransactionItemProp {
  message: string;
  addressFrom: string;
  addressTo: string;
  timestamp: string;
  amount: string;
  keyword: string;
}
const TransactionItem: React.FC<TransactionItemProp> = ({
  keyword,
  message,
  addressFrom,
  addressTo,
  amount,
  timestamp,
}): JSX.Element => {
  const { url: gifUrl, loading } = useFetch(keyword);

  console.log(gifUrl);
  return (
    <section className="w-full px-4 py-3 rounded-md bg-[#3333338e] h-auto text-slate-100 text-sm">
      <div>
        <div>
          <h3>
            <span className="text-purple-400 font-bold mr-4">From:</span>
            {shorten(addressFrom)}
          </h3>
          <h3>
            <span className="text-purple-400 font-bold mr-4">To: </span>
            {shorten(addressTo)}
          </h3>
          <h3>
            <span className="text-purple-400 font-bold mr-4">Amount: </span>
            {amount} ETH
          </h3>
        </div>
        <div className="mt-4">
          <strong>Message:</strong> {message || 'this is a sample transaction'}
        </div>

        <div>
          <img src={gifUrl} alt="images" />
        </div>

        <div className="bg-black text-[#46e0ff]">
          <small>{timestamp}</small>
        </div>
      </div>
    </section>
  );
};
const Transactions = () => {
  const { currentAccount, connectToWallet, transactions } =
    useContext(TransactionsContext);

  console.log(transactions);
  return (
    <section className="w-full py-16 md:px-60 px-4">
      <div className="my-4">
        {currentAccount ? (
          <>
            <h2 className="text-3xl text-white font-bold">
              Latest Transactions
            </h2>
            <p className="text-sm text-gray-100">
              Here is a List of your Latest Transactions
            </p>
          </>
        ) : (
          <div className="flex items-center justify-center lg:justify-start">
            <button
              onClick={() => connectToWallet}
              className=" py-3 rounded-full bg-[#f8ba3c] text-slate-50  px-7 my-4 font-bold hover:bg-[#4c6cde] transition-all duration-500 ease-in-out"
              // className=" py-3 rounded-full bg-[#2952e3] #E3D044 px-7 my-4 font-bold hover:bg-[#4c6cde] transition-all duration-500 ease-in-out"
            >
              {'Connect To Wallet'}
            </button>
          </div>
        )}
      </div>

      <section className="grid lg:grid-cols-3 grid-col-1 gap-4">
        {transactions.length > 0
          ? transactions?.map((data: TransactionItemProp) => {
              const {
                amount,
                addressFrom,
                addressTo,
                message,
                timestamp,
                keyword,
              } = data;
              return (
                <TransactionItem
                  amount={amount}
                  addressFrom={addressFrom}
                  addressTo={addressTo}
                  timestamp={timestamp}
                  keyword={keyword}
                  message={message}
                />
              );
            })
          : null}
      </section>
    </section>
  );
};

export default Transactions;
