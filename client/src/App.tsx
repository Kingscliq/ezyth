import { useState } from 'react';
import { Footer, Hero, Navbar, Service, Transactions } from './components';

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <div>
          <Navbar />
          <Hero />
        </div>

        <Service />
        <Transactions />
      </div>
    </div>
  );
}

export default App;
