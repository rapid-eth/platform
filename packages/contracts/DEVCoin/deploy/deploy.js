const utils = require("@utils");

let deployAccount = utils.ethersAccount(0)

const questDevCoin = async () => {
    console.log('deploying QuestDevCoin contract...')
    // string  memory _tokenName,
    // string memory _tokenSymbol,
    // uint8   _decimalUnits,
    // uint256 _cap
    params = ['DEVCoin', 'DEV', 18, utils.parseUnits('1000000', 18)]
    const contract = await utils.deployContractAndWriteToFile('QuestDevCoin', deployAccount, params)
    console.log("QuestDevCoin contract deployed at address: " + contract.address)
    return contract
}

const tokenDropbox = async () => {
    console.log('deploying Token Dropbox contract...')
    params = []
    const contract = await utils.deployContractAndWriteToFile('TokenDropbox', deployAccount, params)
    console.log("Token Dropbox contract deployed at address: " + contract.address)
    return contract
}

const mintableToken = async () => {
    console.log('deploying Mintable Token contract...')
    params = ['Mintable Test Token', 'MINT', 18]
    const contract = await utils.deployContractAndWriteToFile('MintableToken', deployAccount, params)
    console.log("Mintable Token contract deployed at address: " + contract.address)
    return contract
}

const cappedToken = async () => {
    console.log('deploying Capped Mintable Token contract...')
    params = ['Mintable Test Token', 'MINT', 18, utils.parseUnits('1000000', 18)]
    const contract = await utils.deployContractAndWriteToFile('CappedMintableToken', deployAccount, params)
    console.log("Capped Mintable Token contract deployed at address: " + contract.address)
    return contract
}

module.exports = {
    questDevCoin,
    tokenDropbox,
    mintableToken,
    cappedToken
}