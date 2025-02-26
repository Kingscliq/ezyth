import React, { useContext } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';
import { TransactionsContext } from '../context/TransactionsContext';
import { shorten, truncate } from '../../utils/formatters';

const NavBarItem: React.FC<{ title?: string; classProps?: string }> = ({
  title,
  classProps,
}) => <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;

const Navbar: React.FC<{}> = () => {
  const [toggleMenu, setToggleMenu] = React.useState<boolean>(false);

  const { connectToWallet, currentAccount } = useContext(TransactionsContext);

  return (
    <nav
      className="w-full flex justify-between p-4 items-center"
      data-aos="fade-up"
    >
      <div className="w-full  flex justify-between lg:px-20 p-4 items-center">
        <div className="">
          {/* <img src={logo} alt="logo" className="w-32 cursor-pointer" /> */}
          <h3 className="font-bold text-white font-accent text-2xl">EthK</h3>
        </div>
        <div className="self-end">
          <ul className="text-white md:flex hidden list-none flex-row justify-between items-center">
            {['Market', 'Exchange', 'Tutorials', 'Wallets'].map(
              (item, index) => (
                <NavBarItem key={item + index} title={item} />
              )
            )}
            <li
              onClick={() => connectToWallet()}
              className="bg-primary  py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] truncate transition-all duration-500 ease-linear"
            >
              {currentAccount !== ''
                ? shorten(currentAccount)
                : 'Connect To Wallet'}
            </li>
          </ul>
        </div>
      </div>

      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-50 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md bg-black text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {['Market', 'Exchange', 'Tutorials', 'Wallets'].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classProps="my-2 text-sm"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
