import React, { useContext } from 'react';
import { FaEthereum } from 'react-icons/fa';
import { BiInfoCircle } from 'react-icons/bi';
import Input from './elements/input';
import Button from './elements/button';
import { TransactionsContext } from '../context/TransactionsContext';

const Hero: React.FC<{}> = () => {
  const { connectToWallet, currentAccount } = useContext(TransactionsContext);

  const commonStyles =
    'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white hover:bg-[#2952e3] transition-all duration-200 ease-in-out cursor-pointer';
  return (
    <section className="text-gray-200 w-full py-16 md:px-60">
      <div className="grid lg:grid-cols-2 gap-20 grid-cols-1">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <div className="items-start">
            <h1 className="text-3xl lg:text-5xl font-bold leading-10 mb-4 text-center lg:text-left">
              EthKings
            </h1>
            <h3 className="text-base lg:text-3xl text-center lg:text-left">
              Send Crypto Across the World
            </h3>
          </div>
          <p className="my-4 lg:w-96 w-full text-center lg:text-left p-y lg:p-auto">
            Cryptocurrency, sometimes called crypto-currency or crypto, is any
            form of currency that exists digitally or virtually and uses
            cryptography to secure
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            <button
              onClick={connectToWallet}
              className=" py-3 rounded-full bg-[#2952e3] px-7 my-4 font-bold hover:bg-[#4c6cde] transition-all duration-500 ease-in-out"
            >
              {currentAccount !== '' ? 'Get Started' : 'Connect To Wallet'}
            </button>
          </div>

          <div className="mt-6 mb-4">
            <h3 className="font-bold text-4xl text-center lg:text-left">
              Featured
            </h3>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 ">
            <div className={`lg:rounded-tl-3xl rounded-none ${commonStyles}`}>
              Reliability
            </div>
            <div className={` ${commonStyles}`}>Security</div>
            <div className={`lg:rounded-tr-3xl rounded-none  ${commonStyles}`}>
              Ethereum
            </div>
            <div className={`lg:rounded-bl-3xl rounded-none  ${commonStyles}`}>
              Web 3.0
            </div>
            <div className={` ${commonStyles}`}>Low Fees</div>
            <div className={`lg:rounded-br-3xl rounded-none  ${commonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <section>
          <div className="rounded-3xl w-full eth-card p-6 flex flex-col justify-between h-[300px]">
            <div className="flex items-start justify-between">
              <div className="p-6 rounded-full border-4 border-gray-100 text-gray-100 text-3xl">
                <FaEthereum />
              </div>
              <div className="text-2xl">
                <BiInfoCircle />
              </div>
            </div>
            <div>
              <div>
                <h5>Address</h5>
              </div>
              <div>
                <h2 className="text-3xl font-bold">Ethereum</h2>
              </div>
            </div>
          </div>
          <div className="p-4 bg-[#24212e72] rounded-3xl my-10">
            <form action="">
              <Input placeholder="Address To..." success={false} label="" />
              <Input placeholder="Amount (Eth)" success={false} label="" />
              <Input placeholder="Keyword (Gif)" success={false} label="" />
              <Input placeholder="Enter Message" success={false} label="" />
              <div className="py-6">
                <hr />
              </div>
              <div>
                <Button
                  className="w-full text-center border border-[#3d47fc8c] py-4 px-6 rounded-full font-bold hover:bg-[#3d47fc] transition-all duration-500 ease-in-out"
                  label="Send"
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
