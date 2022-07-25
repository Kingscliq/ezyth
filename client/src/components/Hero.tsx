import React, { useContext } from 'react';
import { FaEthereum } from 'react-icons/fa';
import { BiInfoCircle } from 'react-icons/bi';
import Input from './elements/input';
import Button from './elements/button';
import { TransactionsContext } from '../context/TransactionsContext';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';

const Hero: React.FC<{}> = () => {
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
    'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-100 text-sm font-light text-white hover:bg-[#2952e3] transition-all duration-200 ease-in-out cursor-pointer';
  return (
    <section className="text-gray-200 w-full py-16 md:px-60">
      <div className="grid lg:grid-cols-2 gap-20 grid-cols-1">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <div className="items-start">
            <h1 className="text-3xl lg:text-5xl font-bold leading-10 mb-4 text-center lg:text-left">
              EthKings
            </h1>
            <h3 className="text-base lg:text-3xl font-medium text-center lg:text-left">
              Send Crypto Across the World
            </h3>
          </div>
          <p className="my-4 lg:w-96 w-full text-center lg:text-left p-y lg:p-auto">
            Cryptocurrency, sometimes called crypto-currency or crypto, is any
            form of currency that exists digitally or virtually and uses
            cryptography to secure
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            {!currentAccount && (
              <button
                onClick={connectToWallet}
                className=" py-3 rounded-full bg-[#2952e3] px-7 my-4 font-bold hover:bg-[#4c6cde] transition-all duration-500 ease-in-out"
              >
                {'Connect To Wallet'}
              </button>
            )}
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

        <section className="p-4 lg:p-0">
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
                  {currentAccount ? currentAccount : 'Ethereum'}
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-10 mb-3">
            <h2 className="text-2xl font-bold text-white">Send Eth 😇 </h2>
            <p className="text-sm my-2">
              You an now send Eth to any part of the world! Super amazing right,
              Made Possible with the Blockchain technology
            </p>
          </div>
          <div className="p-4 bg-[#060212b4] rounded-lg ">
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <Input
                placeholder="Address To..."
                success={false}
                label=""
                name="address"
                error={!!errors.address && touched.address}
                value={values.address}
                onChange={handleChange}
              />
              {errors.address && touched.address && (
                <div className="text-red-500 mb-4 text-xs">
                  {errors.address}
                </div>
              )}
              <Input
                placeholder="Amount (Eth)"
                success={false}
                label=""
                name="amount"
                error={!!errors.amount && touched.amount}
                value={values.amount}
                onChange={handleChange}
              />
              {errors.amount && touched.amount && (
                <div className="text-red-500 mb-4 text-xs">{errors.amount}</div>
              )}
              <Input
                placeholder="Keyword (Gif)"
                success={false}
                label=""
                name="keyword"
                error={!!errors.keyword && touched.keyword}
                value={values.keyword}
                onChange={handleChange}
              />
              {errors.keyword && touched.keyword && (
                <div className="text-red-500 mb-4 text-xs">
                  {errors.keyword}
                </div>
              )}
              <Input
                placeholder="Enter Message"
                success={false}
                label=""
                name="message"
                error={!!errors.message && touched.message}
                value={values.message}
                onChange={handleChange}
              />
              {errors.message && touched.message && (
                <div className="text-red-500 mb-4 text-xs">
                  {errors.message}
                </div>
              )}
              <div className="py-6">
                <hr />
              </div>
              <div>
                <Button
                  className="w-full text-center border bg-[#2832df] border-[#3d47fc8c] py-4 px-6 rounded-full font-bold hover:bg-[#3d47fc] transition-all duration-500 ease-in-out"
                  label="Send"
                  type="submit"
                  loading={loading}
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
