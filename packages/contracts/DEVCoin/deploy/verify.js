const utils = require("@utils");
const config = require("./config.json");

const certificateSignerAddress = config.certificateSignerAddress;

let deployAccount = utils.ethersAccount(0)
let contracts = {}
let wasSuccessful = true;

const main = async () => {
    console.log("Deployment Verification Starting...")
    console.log('')
    contracts.DevCoin = utils.getDeployedContract('QuestDevCoin')

    await verifyCertificate()

    console.log('')
    console.log('')
    console.log("****************************************")
    console.log("Was Verification Successful? " + wasSuccessful)
    console.log("****************************************")
}

const verifyCertificate = async () => {

}


main();