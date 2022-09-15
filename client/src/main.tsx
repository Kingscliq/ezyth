import React, { useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { TransactionProvider } from './context/TransactionsContext';

import './index.css';
import ParticlesBackground from './components/ParticlesBackground';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TransactionProvider>
    <React.StrictMode>
      <App />
      <ParticlesBackground />
      <ToastContainer autoClose={10000} />
    </React.StrictMode>
  </TransactionProvider>
);
