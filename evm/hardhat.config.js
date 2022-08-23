require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */

const {
	INFURA_URL,
	PRIVATE_KEY,
	RINKEBY_URL,
	POLYGON_API_KEY,
	ETHERSCAN_API_KEY,
	GOERLI_URL,
} = process.env;

module.exports = {
	solidity: {
		version: '0.8.9',
		settings: { optimizer: { enabled: true, runs: 200 } },
	},
	networks: {
		hardhat: {
			chainId: 1337,
		},
		localhost: {
			url: 'http://127.0.0.1:8545',
		},
		goerli: {
			url: GOERLI_URL,
			accounts: [`0x${PRIVATE_KEY}`],
		},
		mumbai: {
			url: INFURA_URL,
			accounts: [`0x${PRIVATE_KEY}`],
			gas: 2100000,
			gasPrice: 8000000000,
		},
		rinkeby: {
			url: RINKEBY_URL,
			accounts: [`0x${PRIVATE_KEY}`],
		},
	},
	etherscan: {
		apiKey: {
			polygonMumbai: POLYGON_API_KEY,
			goerli: ETHERSCAN_API_KEY,
			rinkeby: ETHERSCAN_API_KEY,
		},
	},
};
