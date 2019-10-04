const fs = require('fs');
const path = require('path')
const ethers = require('ethers')

let dir = path.join(__dirname, 'compiled')
let buildDir = './build/contracts'

const main = () => {
    console.log("Adding signatures...")
    let files = fs.readdirSync(dir);
    let names = files.filter(f => f.match(/.*.abi/)).map(f => f.replace(/.abi/,''))
    
    names.forEach(name => {
        let abi = JSON.parse(fs.readFileSync(path.join(dir, name + '.abi')))
        let bytecode = fs.readFileSync(path.join(dir, name + '.bin')).toString()

        //do calculation of sigs
        let newABI = abi.map(a => getFunctionSignature(a))

        let jsonOutput = {
            name,
            abi: newABI,
            bytecode
        }
        //write to dir
        fs.writeFileSync(path.join(buildDir, name + '.json'), JSON.stringify(jsonOutput,null,2))
    });
    console.log("done")
}

const getFunctionSignature = (abiFunction) => {
    if (abiFunction.type == 'function' || abiFunction.type == 'event') {
        let inputTypes = abiFunction.inputs.map(i => i.type).toString()
        str = abiFunction.name+'('+inputTypes+')'
        let sig = keccakString(str)
        if (abiFunction.type == 'function') {
            sig = trimSignature(sig)
        }
        abiFunction.signature = sig
    }
    return abiFunction
}

const keccakString = (str) => {
    let messageBytes = ethers.utils.toUtf8Bytes(str);
    return ethers.utils.keccak256(messageBytes);
}

const trimSignature = (sig) => {
    if (sig.startsWith('0x')){
        return sig.slice(0, 10);
    }
    else {
        return '0x' + sig.slice(0, 8);
    }
}


main();