import Emblems from '../../build/contracts/Emblems.json'
const options = {
  contracts: [
    Emblems
  ],
  web3: {
    fallback: {
      type: 'http',
      url: 'http:127:0.0.1:8545'
    }
  }
}

export default options
