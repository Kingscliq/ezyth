import React, { useState, useContext } from 'react';
import { TransactionsContext } from '../context/TransactionsContext';
import { dummy } from '../../utils/dummy';
import { ethToUsd, getFullDate, shorten } from '../../utils/formatters';
import { useFetch } from '../hooks/useFetch';
import { FaDownload } from 'react-icons/fa';
import Divider from './elements/divider';

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

const TransactionCard: React.FC<TransactionItemProp> = ({
  keyword,
  message,
  addressFrom,
  addressTo,
  amount,
  timestamp,
}): JSX.Element => {
  return (
    <section className="w-full px-4 py-3 h-auto grid grid-col-3 lg:grid-cols-6 text-slate-100 text-sm">
      <section>
        <div className="flex items-center">
          <figure className="text-gray-300 bg-primary p-1 lg:p-2 rounded-full">
            <FaDownload />
          </figure>
          <header className="ml-2 lg:ml-4 mb-2">
            <h4 className="hidden lg:block">Received</h4>
            <div className="text-primary">
              <small className="hidden lg:block">
                {getFullDate(timestamp)}
              </small>
              <small className="lg:hidden block">
                {getFullDate(timestamp)}
              </small>
            </div>
          </header>
        </div>
      </section>
      <section className="hidden lg:block">
        <h4>{shorten(addressFrom)}</h4>
      </section>
      <section>
        <h4 className="hidden lg:block">{shorten(addressTo)}</h4>
      </section>
      <section>
        <h4 className="text-green-200">{amount} ETH</h4>
      </section>
      <section>
        <div className=" text-red-200 text-xs lg:text-base">
          <h4>{ethToUsd(Number(amount))} USD</h4>
        </div>
      </section>
      <section className="hidden lg:block">
        <div className="">
          <h4>{message}</h4>
        </div>
      </section>
    </section>
  );
};

const Transactions = () => {
  const { currentAccount, connectToWallet, transactions } =
    useContext(TransactionsContext);

  return (
    <section className="w-full py-16 md:px-16 px-4">
      <div className="my-4 mb-10">
        {currentAccount ? (
          <>
            <h2
              className="text-3xl lg:text-[2.25rem] font-medium text-center lg:text-left lg:w-[60%] text-white leading-[1.5]"
              data-aos="fade-up"
            >
              Latest Transactions
            </h2>
            <p
              className="my-4 lg:w-96 w-full text-center lg:text-left p-y lg:p-auto text-gray-400 text-[0.875rem] leading-[2.0]"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="2500"
            >
              Here is a List of your Latest Transactions
            </p>
          </>
        ) : (
          <div className="flex items-center justify-center lg:justify-start">
            <button
              onClick={() => connectToWallet}
              className=" py-3 rounded-full bg-primary text-slate-50  px-7 my-4 font-bold hover:bg-[#4c6cde] transition-all duration-500 ease-in-out"
              // className=" py-3 rounded-full bg-[#2952e3] #E3D044 px-7 my-4 font-bold hover:bg-[#4c6cde] transition-all duration-500 ease-in-out"
            >
              {'Connect To Wallet to View Transactions'}
            </button>
          </div>
        )}
      </div>
      <section data-aos="fade-up" data-aos-delay="1000">
        <section className="w-full px-4 py-3 h-auto grid grid-cols-6 text-slate-100 text-sm">
          <section>
            <div className="flex items-center">Status/Date</div>
          </section>
          <section>
            <div className="lg:flex items-center hidden ">Address From</div>
          </section>
          <section>
            <div className="lg:flex items-center hidden">Address To</div>
          </section>
          <section>Amount</section>
          <section className="hidden lg:block">Conversion</section>
          <section className="lg:hidden block justify-self-end self-end place-self-end">
            Conv.
          </section>
          <section className="hidden lg:block">Narration</section>
        </section>
        <Divider />
        {transactions.length > 0
          ? transactions.slice(0, 5)?.map((data: TransactionItemProp) => {
              const {
                amount,
                addressFrom,
                addressTo,
                message,
                timestamp,
                keyword,
              } = data;
              return (
                <TransactionCard
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
