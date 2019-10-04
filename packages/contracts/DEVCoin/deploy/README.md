# Contract Deployment Steps

1. Run ~~`truffle compile`~~ `npm run compile` to build the latest contract JSON files to the `/build/contracts` directory

2. Run `npm run deploy` which will do the following:
    - deploy new copies of all contracts and put the JSON results in `build/deployed/`
    - creates initial claim certificate type and prints out the cert ID