const ethers = require("ethers");
const common = require('./common')

const contractName = 'QuestDevCoin'

class DevCoin {

    static async init (wallet) {
        let me = new DevCoin()
        await me.initializeProvider(wallet)
        me.initializeContracts()
        return me
    }
    
    constructor () {

    }

    async initializeProvider (wallet) {
        await common.initializeProvider(this, wallet)
    }

    initializeContracts () {
        common.initializeContracts(this, [contractName])
    }

    async createCertificate (amount, delegates, meta) {
        let params = [amount, delegates, meta]
        let tx = await common.callContract(this.contracts[contractName], 'createCertificateType', params, this.signer)
        await tx.wait()
        let certificateId = await this.contracts[contractName].getCertificateID(...params)
        return certificateId
    }

    async signCertificate (certificateId, recipient) {
        let messageHash = ethers.utils.solidityKeccak256(['bytes', 'address', 'address'], [certificateId, this.contracts[contractName].address, recipient]);
        let messageHashBytes = ethers.utils.arrayify(messageHash);
        return await this.signer.signMessage(messageHashBytes);
    }

    async getCertificateMetadata (certificateId) {
        const meta = await this.contracts[contractName].getCertificateData(certificateId)
        return meta
    }

    async getCertificateID (amount, delegates, meta) {
        let params = [amount, delegates, meta]
        let certificateId = await this.contracts[contractName].getCertificateID(...params)
        return certificateId
    }

    async hasClaimedCertificate (address, certificateId) {
        const params = [certificateId, address]
        return await this.contracts[contractName].isCertificateClaimed(...params)
    }

    async redeemCertificate (signature, certificateId) {
        let params = [signature, certificateId]
        let tx = await common.callContract(this.contracts[contractName], 'redeemCertificate', params, this.signer)
        await tx.wait()
    }

    async getBalance(address) {
        return await this.contracts[contractName].balanceOf(address)
    }

    async contractReadFunc(func, params) {
        return await this.contracts[contractName][func](...params)
    }

    async contractWriteFunc(func, params) {
        const tx = await common.callContract(this.contracts[contractName], func, params, this.signer)
        await tx.wait()
        return tx
    }

}


module.exports = DevCoin