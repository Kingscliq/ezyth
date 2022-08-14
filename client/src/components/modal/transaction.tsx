import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import Modal from '.';
import { TransactionsContext } from '../../context/TransactionsContext';
import * as yup from 'yup';
import Input from '../elements/input';
import Button from '../elements/button';

import { IoCloseOutline } from 'react-icons/io5';

interface TransactionProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<string>> | any; //any type was infered for number values
}
const Transfer: React.FC<TransactionProps> = ({ modalOpen, setModalOpen }) => {
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
        makeTransaction(values).then(() => {
          setModalOpen(false);
        });
      },
    });
  return (
    <Modal>
      <div
        className="bg-black p-4 border border-gray-50 border-opacity-20"
        data-aos="zoom-in"
      >
        <div className="flex justify-between">
          <div></div>
          <div
            onClick={() => setModalOpen(false)}
            className="p-4 hover:text-white cursor-pointer hover:bg-opacity-20 hover:bg-gray-200 hover:border-red-200 border border-white h-2 w-2 flex items-center justify-center rounded-full"
          >
            <div>
              <IoCloseOutline color="white" size={20} />
            </div>
          </div>
        </div>

        <div className="px-4 mt-2 mb-3">
          <h2 className="text-2xl font-bold text-white">Transfer Eth 😇 </h2>
          <p className="text-sm my-2 text-slate-400 w-[60%]">
            You an now send Eth to any part of the world! Super amazing right,
            Made Possible with the Blockchain technology
          </p>
        </div>
        <div className="p-4 bg-very-dark rounded-lg ">
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
              <div className="text-red-500 mb-4 text-xs">{errors.address}</div>
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
              <div className="text-red-500 mb-4 text-xs">{errors.keyword}</div>
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
              <div className="text-red-500 mb-4 text-xs">{errors.message}</div>
            )}
            <div className="py-6">
              <hr />
            </div>
            <div>
              <Button
                className="w-full text-center border bg-primary border-[#3d47fc8c] py-4 px-6 rounded-full font-bold hover:bg-[#3d47fc] transition-all duration-500 ease-in-out"
                label="Send"
                type="submit"
                loading={loading}
              />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default Transfer;
