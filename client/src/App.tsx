import { useState } from 'react';
import { Footer, Hero, Navbar, Service, Transactions } from './components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Hero />
      </div>
      <Service />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
