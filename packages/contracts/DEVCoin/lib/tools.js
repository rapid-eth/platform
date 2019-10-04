
const ethers = require("ethers");
const fs = require("fs");
const IPFS = require('ipfs-http-client')
let init = {}
const _ = require('lodash');

const contractNames = [
    'QuestDevCoin',
    'TokenDropbox'
]

const contractsABIDirectory = `${__dirname}/contracts`


const initialize = async (wallet) => {
    console.log("inside tools init...")
    console.log("init provider...")
    await initializeProvider(wallet)
    console.log("init contracts...")

    await initializeContracts()
    console.log("done contracts...")

}

const initializeProvider = async (wallet) => {
    let infuraURL = 'https://rinkeby.infura.io/v3/9dd73bc075d441f684db7bc34f4e5950'
    init.provider = new ethers.providers.JsonRpcProvider(infuraURL);
    init.networkID = '4'
    init.networkName = 'rinkeby'
    init.ipfs = new IPFS('ipfs.infura.io', '5001', { protocol: 'https' })
    
    if (wallet) {
        init.signer = wallet.connect(init.provider)
    } else {
        init.signer = provider.getSigner(); //works with metamask
    }
}

const initializeContracts = async () => {
    init.contracts = {}
    await asyncForEach(contractNames, async (name) => {
        const abi = require(`${contractsABIDirectory}/${name}.json`).abi
        const address = await lookupContractAddress(name, init.provider)
        console.log(address)
        init.contracts[name] = new ethers.Contract(address, abi, init.provider)
    });
}

const getContract = (name) => {
    //c = _.get(init.contracts)
    let c = {}
    console.log(c, "Con")
    if (c) {
        return c[name]
    }
}

const callContract = async (contract, func, params) => {
    let contractWithSigner = contract.connect(init.signer)
    let response = await contractWithSigner.functions[func](...params)
    return response
}

const lookupContractAddress = async (name, provider) => {
    let p = await provider.getNetwork()
    let providerName = p.name
    return require(`${contractsABIDirectory}/${providerName}.json`)[name]
}

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

const atest = (t) => {
    console.log('test' + t)
}

// const atest = (name) => {
//     c = _.get(init.contracts)
//     console.log(c, "ConA")
//     if (c) {
//         return c[name]
//     }
// }
module.exports = {
    initialize,
    getContract,
    callContract,
    atest
}