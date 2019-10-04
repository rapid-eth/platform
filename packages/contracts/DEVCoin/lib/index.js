//const tools = require('./tools')
const _ = require('lodash')
const ethers = require("ethers");
const IPFS = require('ipfs-http-client')

const certificates = require('./certificates')

const contractNames = [
    'QuestDevCoin',
    'TokenDropbox'
]

const contractsABIDirectory = `${__dirname}/contracts`


const instanceModules = [certificates]


class MyLib {

    static async init (wallet) {
        let me = new MyLib(wallet)
        await me.initializeProvider(wallet)
        await me.initializeContracts()
        return me
    }
    
    constructor (wallet) {
        console.log("Starting")
        this.contracts = {}
        console.log("DONE")
    }

    async initializeProvider (wallet) {
        let infuraURL = 'https://rinkeby.infura.io/v3/9dd73bc075d441f684db7bc34f4e5950'
        this.provider = new ethers.providers.JsonRpcProvider(infuraURL);
        this.network = await this.provider.getNetwork()
        this.ipfs = new IPFS('ipfs.infura.io', '5001', { protocol: 'https' })
        
        if (wallet) {
            this.signer = wallet.connect(this.provider)
        } else {
            this.signer = await provider.getSigner(); //works with metamask
        }
    }

    async initializeContracts () {
        _.forEach(contractNames, (name) => {
            const abi = require(`${contractsABIDirectory}/${name}.json`).abi
            const address = this.lookupAddress(name)
            this.contracts[name] = new ethers.Contract(address, abi, this.provider)
        })
    }

    lookupAddress (contractName) {
        let f = `${contractsABIDirectory}/${this.provider.network.name}.json`
        console.log(contractName)
        return require(f)[contractName]
    }
    
}

// _.assign(MyLib.prototype, ...instanceModules)

module.exports = MyLib