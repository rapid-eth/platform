require('module-alias/register')

const utils = require("@utils");
const deploy = require("./deploy");
const config = require("./config.json");

const certificateSignerAddress = config.certificateSignerAddress

let deployAccount = utils.ethersAccount(0)
let contracts = {}

const main = async () => {
    console.log("Deployment Starting...")

    contracts.DevCoin = await deploy.questDevCoin()
    contracts.TokenDropbox = await deploy.tokenDropbox()
    //contracts.CappedToken = deploy.cappedToken()
    await createInitialClaimCert()

    console.log("Deployment Complete!")
}

const createInitialClaimCert = async () => {
    console.log("Creating initial claim certificate...")
    let reward = 100
    let delegates = [certificateSignerAddress]

    let certIPFSObject = { 
        name: "Test of QuestDevCoin Certificates", 
        amount: reward, 
        delegates, 
        description: "Initial certificate test", 
        tokenAddess: contracts.DevCoin.address
    }
    let jsonHash = await utils.ipfsAddJSON(certIPFSObject)
    console.log("Initial Claim Cert IPFS HASH: "  + jsonHash)
    let certTypeArgs = [reward, delegates, jsonHash];
    await utils.callContract(contracts.DevCoin, deployAccount, 'createCertificateType', certTypeArgs)
    let certID = await contracts.DevCoin.getCertificateID(...certTypeArgs)
    console.log("Initial Claim Certifitcate ID: " + certID)
}

main()