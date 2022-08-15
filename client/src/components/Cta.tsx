import React, { useContext } from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { FaEthereum } from 'react-icons/fa';
import { shorten } from '../../utils/formatters';
import { TransactionsContext } from '../context/TransactionsContext';

interface CtaProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<string>> | any; //any type was infered for number values
}
const Cta: React.FC<CtaProps> = ({ modalOpen, setModalOpen }) => {
  const { connectToWallet, currentAccount, makeTransaction, loading } =
    useContext(TransactionsContext);
  return (
    <section className="text-gray-200 w-full py-16 px-4 md:px-24 bg-gradient-315 from-dark to-gray-600">
      <div className="grid lg:grid-cols-2 gap-20 grid-cols-1">
        <div className="justify-center items-center">
          <div>
            <h3
              className="text-3xl lg:text-[2.25rem] font-medium text-center lg:text-left lg:w-[60%]  leading-[1.5]"
              data-aos="fade-up"
            >
              Get Ready to Explore the Crypto World
            </h3>
          </div>
          <p
            className="my-4 lg:w-96 w-full text-center lg:text-left p-y lg:p-auto text-gray-400 text-[0.875rem] leading-[2.0]"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="2500"
          >
            Cryptocurrency, sometimes called crypto-currency or crypto, is any
            form of currency that exists digitally or virtually and uses
            cryptography to secure
          </p>
          <div
            className="flex items-center justify-center lg:justify-start"
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="2500"
          >
            <button
              onClick={() => setModalOpen(true)}
              className=" py-3 rounded-full bg-primary px-7 my-4 hover:bg-[#4c6cde] transition-all duration-500 ease-in-out flex items-center"
            >
              Let's Get Started
              <span className="ml-4">
                <BsArrowRight />
              </span>
            </button>
          </div>
        </div>

        <section
          className="p-4 lg:p-0"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="2500"
        >
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
                <h2 className="text-3xl font-bold truncate">
                  {currentAccount ? shorten(currentAccount) : 'Ethereum'}
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Cta;
