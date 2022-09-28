require("@nomiclabs/hardhat-waffle")
require("hardhat-deploy")
require("hardhat-gas-reporter")
require("dotenv").config()

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

module.exports = {
	solidity: "0.8.17",
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {
			chainId: 1337,
			blockConfirmations: 1,
		},
	},
	namedAccounts: {
		deployer: {
			default: 0,
		},
		soldier1: {
			default: 1,
		},
		soldier2: {
			default: 2,
		},
	},
	gasReporter: {
		enabled: true,
		currency: "USD",
		coinmarketcap: COINMARKETCAP_API_KEY,
	},
	mocha: {
		timeout: 600000,
	},
}
