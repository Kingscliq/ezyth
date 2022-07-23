// https://eth-rinkeby.alchemyapi.io/v2/TFn0ByK_k_64YWaZQwEt-HerZqm6BF-A

// Api Key
// TFn0ByK_k_64YWaZQwEt-HerZqm6BF-A

// WEB SOCKET
// wss://eth-rinkeby.alchemyapi.io/v2/TFn0ByK_k_64YWaZQwEt-HerZqm6BF-A

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/TFn0ByK_k_64YWaZQwEt-HerZqm6BF-A',
      accounts: [
        '01bca38756e98d047378a36686a55113a66b5a62d5e509c31fd8a21a4b4c6546',
      ],
    },
  },
};
