const _ = require('lodash')
const ethers = require("ethers");
const IPFS = require('ipfs-http-client')

const contractsABIDirectory = `./contracts/abi`


const initializeProvider = async (self, wallet) => {
    let w3
    try {
        if (web3) {
            w3 = web3
        }
    } catch (error) {
        
    }
    if (w3) {
        self.provider = new ethers.providers.Web3Provider(web3.currentProvider);
    } else {
        let infuraURL = 'https://rinkeby.infura.io/v3/9dd73bc075d441f684db7bc34f4e5950'
        self.provider = new ethers.providers.JsonRpcProvider(infuraURL);
    }
    self.network = await self.provider.getNetwork()
    console.log(self.network)
    self.ipfs = new IPFS('ipfs.infura.io', '5001', { protocol: 'https' })
    self.contracts = {}
    self.contractAddresses = {
        "QuestDevCoin": "0x6161baaB9F99Fb441365592D92a757435F9a88Cb",
        "TokenDropbox": "0xB9aC8b5C29f43aFe8F32b3aC76339a0bF6811000"
    }
    if (wallet) {
        self.signer = wallet.connect(self.provider)
    } else {
        console.log('meta signer')
        self.signer = await self.provider.getSigner(); //works with metamask
    }
}

const initializeContracts = (self, contractNames) => {
        _.forEach(contractNames, (name) => {
        const abi = require(`${contractsABIDirectory}/${name}.abi.js`).abi
        const address = self.contractAddresses[name]
        self.contracts[name] = new ethers.Contract(address, abi, self.provider)
    })
}

const initializeContractAtAddress = (self, name, address) => {
    const abi = require(`${contractsABIDirectory}/${name}.abi.js`).abi
    self.contracts[name] = new ethers.Contract(address, abi, self.provider)
}

const createContractAtAddress = (self, name, address) => {
    const abi = require(`${contractsABIDirectory}/${name}.abi.js`).abi
    return new ethers.Contract(address, abi, self.signer)
}

const callContract = async (contract, func, params, signer) => {
    let contractWithSigner = contract.connect(signer)
    let response = await contractWithSigner.functions[func](...params)
    return response
}

const contractFromABI = (self, abi, address) => {
    if (typeof abi === 'string') {
        abi = require(`${contractsABIDirectory}/${abi}.abi.js`)
    }
    return new ethers.Contract(address, abi, self.signer)
}

module.exports = {
    initializeProvider,
    initializeContracts,
    initializeContractAtAddress,
    createContractAtAddress,
    callContract,
    contractFromABI
}