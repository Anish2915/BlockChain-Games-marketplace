const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 4444,
      network_id: "*"
    }
  },
  compilers: {
    solc: {
      version: '^0.8.0',
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

// export const mocha = {
//   enableTimeouts: false,
//   before_timeout: 480000
// };

// export const networks = {
//   theta_privatenet: {
//     provider: () => {
//       // private key for test wallet #1: 0x19E7E376E7C213B7E7e7e46cc70A5dD086DAff2A 
//       var privateKeyTest1 = '1111111111111111111111111111111111111111111111111111111111111111';

//       // private key for test wallet #2: 0x1563915e194D8CfBA1943570603F7606A3115508
//       var privateKeyTest2 = '2222222222222222222222222222222222222222222222222222222222222222';

//       return new HDWalletProvider({
//         privateKeys: [privateKeyTest1, privateKeyTest2],
//         providerOrUrl: 'http://localhost:18888/rpc',
//       });
//     },
//     network_id: 366,
//     gasPrice: 4000000000000,
//   },

//   theta_testnet: {
//     provider: () => {

//       // Replace the private key below with the private key of the deployer wallet. 
//       // Make sure the deployer wallet has a sufficient amount of TFuel, e.g. 100 TFuel
//       var deployerPrivateKey = '12345';

//       return new HDWalletProvider({
//         privateKeys: [deployerPrivateKey],
//         providerOrUrl: 'https://eth-rpc-api-testnet.thetatoken.org/rpc',
//       });
//     },
//     network_id: 365,
//     gasPrice: 4000000000000,
//   },

//   theta_mainnet: {
//     provider: () => {

//       // Replace the private key below with the private key of the deployer wallet. 
//       // Make sure the deployer wallet has a sufficient amount of TFuel, e.g. 100 TFuel
//       var deployerPrivateKey = '12345';

//       return new HDWalletProvider({
//         privateKeys: [deployerPrivateKey],
//         providerOrUrl: 'https://eth-rpc-api.thetatoken.org/rpc',
//       });
//     },
//     network_id: 361,
//     gasPrice: 4000000000000,
//   },

//   development: {
//     host: '127.0.0.1',
//     port: '7545',
//     network_id: '*'
//   }
// };

// export const contracts_directory = './contracts';
// export const contracts_build_directory = './truffle_abis';

// export const compilers = {
//   solc: {
//     version: '^0.8.19',
//     optimizer: {
//       enabled: true,
//       runs: 200
//     },
//     evmVersion: `paris`
//   }
// };