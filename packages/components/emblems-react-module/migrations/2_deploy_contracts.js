const Emblems = artifacts.require('Emblems')

module.exports = function(deployer) {
  deployer.deploy(Emblems)
}
