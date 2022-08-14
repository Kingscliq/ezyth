import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App';
import { TransactionProvider } from './context/TransactionsContext';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TransactionProvider>
    <React.StrictMode>
      <App />
      <ToastContainer autoClose={10000} />
    </React.StrictMode>
  </TransactionProvider>
);
