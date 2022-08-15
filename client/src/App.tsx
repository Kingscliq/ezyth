import { useContext, useEffect, useState } from 'react';
import { Footer, Hero, Navbar, Service, Transactions } from './components';
import Transfer from './components/modal/transaction';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import WorldUsers from './components/WorldUsers';
import Cta from './components/Cta';
import Divider from './components/elements/divider';
import { TransactionsContext } from './context/TransactionsContext';

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const { currentAccount, connectToWallet, transactions } =
    useContext(TransactionsContext);

  console.log(transactions);
  return (
    <div className="min-h-screen">
      {modalOpen && (
        <Transfer modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}

      <div className="gradient-bg-welcome">
        <div className="bg-gradient-315 from-dark to-very-dark">
          <Navbar />
          <Hero setModalOpen={setModalOpen} />
        </div>
        <Service />
        <WorldUsers />
        <Transactions />
        {/* <MarketChart /> */}
        <Cta modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <Divider />
        <Footer />
      </div>
    </div>
  );
}

export default App;
