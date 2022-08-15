import React, { useContext } from 'react';
import { FaArrowRight, FaEthereum } from 'react-icons/fa';
import { BiInfoCircle } from 'react-icons/bi';
import Input from './elements/input';
import Button from './elements/button';
import { TransactionsContext } from '../context/TransactionsContext';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { shorten } from '../../utils/formatters';
import { BsArrowRight } from 'react-icons/bs';

const Hero: React.FC<{
  setModalOpen: React.Dispatch<React.SetStateAction<string>> | any;
}> = ({ setModalOpen }) => {
  interface TransactionValues {
    amount: number;
    address: string;
    keyword: string;
    message: string;
  }
  const transactionValues: TransactionValues = {
    amount: '' as unknown as number,
    address: '',
    keyword: '',
    message: '',
  };
  const { connectToWallet, currentAccount, makeTransaction, loading } =
    useContext(TransactionsContext);

  const transactionValidationSchema = yup.object({
    amount: yup.string().required('Amount is required'),
    address: yup.string().required('Address is required'),
    keyword: yup.string().required('Keyword is required'),
    message: yup.string().required('Please provide a message'),
  });

  const { handleChange, errors, values, touched, handleSubmit, handleBlur } =
    useFormik({
      initialValues: transactionValues,
      validationSchema: transactionValidationSchema,
      onSubmit: async values => {
        console.log(values);
        makeTransaction(values);
      },
    });

  const commonStyles =
    'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-50 text-sm font-light text-white hover:bg-primary transition-all duration-200 ease-in-out cursor-pointer';
  return (
    <section className="text-gray-200 w-full py-16 md:px-24 ">
      <div className="grid lg:grid-cols-2 gap-20 grid-cols-1">
        <div className="justify-center items-center">
          <div>
            <div data-aos="fade-up" data-duration="2500">
              <h3 className="text-3xl lg:text-[2.25rem] font-medium text-center lg:text-left lg:w-[60%] leading-[1.5]">
                Send Crypto Across the World
              </h3>
            </div>
            <p
              className="my-4 lg:w-96 w-full text-center lg:text-left p-y lg:p-auto text-gray-400 text-[0.875rem] leading-[2.0]"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Cryptocurrency, sometimes called crypto-currency or crypto, is any
              form of currency that exists digitally or virtually and uses
              cryptography to secure
            </p>
            <div
              className="flex items-center justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-duration="2500"
              data-aos-delay="500"
            >
              <button
                onClick={() => setModalOpen(true)}
                className=" py-3 rounded-full bg-primary px-7 my-4 hover:bg-[#4c6cde] transition-all duration-500 ease-in-out flex items-center"
              >
                Get Started{' '}
                <span className="ml-4">
                  {' '}
                  <BsArrowRight />
                </span>
              </button>
            </div>
          </div>

          <div className="mt-6 mb-4"></div>
          <div
            className="grid lg:grid-cols-3 grid-cols-2 "
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className={`lg:rounded-tl-3xl rounded-none ${commonStyles}`}>
              Reliability
            </div>
            <div className={`${commonStyles}`}>Security</div>
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

        <section className="p-4 lg:p-0" data-aos="flip-up">
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

export default Hero;
