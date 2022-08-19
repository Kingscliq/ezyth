import React, { useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App';
import { TransactionProvider } from './context/TransactionsContext';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Container } from 'react-dom';
import ParticlesBackground from './components/ParticlesBackground';

// interface CropperFix extends React.Component {}

// const Cropped = (Cropper as any) as {
//     new(): CropperFix;
// };

// const props: any = {
//     cropShape: "round",
//     disableAutomaticStylesInjection: true,
//     image,
//     crop,
//     zoom,
//     aspect: 1,
//     onCropChange: setCrop,
//     onZoomChange: setZoom,
//     onCropComplete: onCropComplete,
// }

// ...

// const props = {
//   id: 'tsparticles',
//   url: 'http://foo.bar/particles.json',
//   init: { particlesInit },
//   loaded: { particlesLoaded },
// };

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TransactionProvider>
    <React.StrictMode>
      <App />
      <ParticlesBackground />
      <ToastContainer autoClose={10000} />
    </React.StrictMode>
  </TransactionProvider>
);
