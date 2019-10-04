const ethers = require("ethers");
const common = require('./common')
const ERC20 = require('./erc20')

const contractName = 'QuestDevCoin'

class DevCoin extends ERC20 {

    static async init (wallet) {
        let me = new DevCoin()
        await me.initializeProvider(wallet)
        me.initializeContracts()
        return me
    }
    
    constructor () {
        super()
    }

    async initializeProvider (wallet) {
        await common.initializeProvider(this, wallet)
    }

    initializeContracts () {
        // TODO get Address from network
        let address = '0x6161baaB9F99Fb441365592D92a757435F9a88Cb'
        this.contract = common.createContractAtAddress(this, contractName, address)
    }

    async createCertificate (amount, delegates, meta) {
        let params = [amount, delegates, meta]
        let tx = await common.callContract(this.contract, 'createCertificateType', params, this.signer)
        await tx.wait()
        let certificateId = await this.contract.getCertificateID(...params)
        return certificateId
    }

    async signCertificate (certificateId, recipient) {
        let messageHash = ethers.utils.solidityKeccak256(['bytes', 'address', 'address'], [certificateId, this.contract.address, recipient]);
        let messageHashBytes = ethers.utils.arrayify(messageHash);
        return await this.signer.signMessage(messageHashBytes);
    }

    async getCertificateMetadata (certificateId) {
        const meta = await this.contract.getCertificateData(certificateId)
        return meta
    }

    async getCertificateID (amount, delegates, meta) {
        let params = [amount, delegates, meta]
        let certificateId = await this.contract.getCertificateID(...params)
        return certificateId
    }

    async hasClaimedCertificate (address, certificateId) {
        const params = [certificateId, address]
        return await this.contract.isCertificateClaimed(...params)
    }

    async redeemCertificate (signature, certificateId) {
        let params = [signature, certificateId]
        let tx = await common.callContract(this.contract, 'redeemCertificate', params, this.signer)
        await tx.wait()
    }

    // async getBalance(address) {
    //     return await this.contract.balanceOf(address)
    // }

    async contractReadFunc(func, params) {
        return await this.contract[func](...params)
    }

    async contractWriteFunc(func, params) {
        const tx = await common.callContract(this.contract, func, params, this.signer)
        await tx.wait()
        return tx
    }

}


module.exports = DevCoin