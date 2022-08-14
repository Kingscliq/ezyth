import React, { ReactNode } from 'react';
import { appstore, playstore } from '../assets/images';

const Footer = () => {
  const FootLnks: React.FC<{ text: string }> = ({ text }) => {
    return (
      <li className="text-gray-500 hover:text-white text-sm cursor-pointer my-4 transition-all duration-300 ease-linear">
        {text}
      </li>
    );
  };
  const FootHeader: React.FC<{ text: string }> = ({ text }) => {
    return <h2 className="uppercase text-gray-50 text-sm font-bold">{text}</h2>;
  };

  return (
    <footer>
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:px-24 p-4">
        <div>
          <div className="mb- lg:mb-3">
            <h3 className="font-bold text-white font-accent text-4xl">EthK</h3>
          </div>
          <section className=" pb-4 mt-6 hidden lg:block">
            <div>
              <small className="text-gray-400 text-xs">
                EthKings &copy; 2022 |
              </small>
            </div>
            <div>
              <small className="text-gray-400 text-xs">
                All Rights Reserved
              </small>
            </div>
          </section>
        </div>
        <div>
          <FootHeader text="Company" />
          <ul>
            <FootLnks text="Blog our Company" />
            <FootLnks text="Contact Us" />
            <FootLnks text="Careers" />
          </ul>
        </div>
        <div>
          <FootHeader text="Features" />
          <ul>
            <FootLnks text="Market" />
            <FootLnks text="Exchange" />
            <FootLnks text="Community" />
          </ul>
        </div>
        <div>
          <FootHeader text="Partners" />
          <ul>
            <FootLnks text="Market Capital" />
            <FootLnks text="Blockchain" />
            <FootLnks text="Coinbase" />
          </ul>
        </div>
        <div>
          <div className="w-40 mb-5">
            <img src={appstore} alt="Download on Appstore" />
          </div>
          <div className="w-40">
            <img src={playstore} alt="Download on Playstore" />
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center pb-4 mt-6 lg:hidden">
        <small className="text-white text-xs">
          EthKings &copy; 2022 | All Rights Reserved
        </small>
      </section>
    </footer>
  );
};

export default Footer;
