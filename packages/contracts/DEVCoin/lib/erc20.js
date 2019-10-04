const _ = require('lodash')
const ethers = require("ethers");
const common = require('./common')

const contractName = 'ERC20'

class ERC20 {

    static async init (address, wallet) {
        let me = new ERC20()
        await me.initializeProvider(wallet)
        me.initializeContracts(address, true)
        return me
    }
    
    constructor () {
        console.log("initialized base erc20")
    }

    async initializeProvider (wallet) {
        await common.initializeProvider(this, wallet)
    }

    initializeContracts (address, extend) {
        this.address = address
        this.contract = common.createContractAtAddress(this, contractName, address)
        if (extend) {
            this.extendedContract = common.contractFromABI(this, 'ERC20Extended', address)
        }
    }

    getAddress () {
        return this.address
    }
    
    getContract () {
        return this.contract
    }

    async getRawBalance(address) {
        return await this.contract.balanceOf(address)
    }

    async getBalance(address) {
        let balance = await this.contract['balanceOf'](address)
        let decimals = await this.callExtendedContract('decimals')
        if (decimals) {
            balance = balance.div(ethers.utils.parseUnits('1', decimals))
        }
        return balance
    }

    async transfer (recipient, amount) {
        const tx = await this.contract.transfer(recipient, amount)
        await tx.wait()
        return tx
    }

    async transferFrom (sender, recipient, amount) {
        const tx = await this.contract.transferFrom(sender, recipient, amount)
        await tx.wait()
        return tx
    }

    async approve (spender, amount) {
        const tx = await this.contract.approve(spender, amount)
        await tx.wait()
        return tx
    }

    async callExtendedContract (functionName, params) {
        let r
        try {
            r = params ? await this.extendedContract[functionName](...params) : await this.extendedContract[functionName]()
        } catch (error) {
            console.log('Error Calling Extended ERC20 contract...be sure that the contract at this address has the function you are intending to call')
        }
        return r
    }


}

module.exports = ERC20