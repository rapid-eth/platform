
require('module-alias/register')

const assert = require("assert");
const utils = require("@utils");
const ethers = require("ethers");

let global = {};
global.contracts = {}
const account0 = utils.ethersAccount(0);

describe("Certificate Tests", async function () {

  it("should deploy new MeshTokenContract", async function () {
    const token = utils.readContractFile("QuestDevCoin");
    const params = ["Dev Coin Unit Test", 18, "DEV-U", 1000000*(10^18)];
    global.contracts.DevCoin = await utils.deployContract(
      token.abi,
      token.bytecode,
        account0,
        params
    );

  });

  it("should allow cert redeem", async function () {
    
  });
});