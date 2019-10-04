#/bin/sh

CONTRACTS_BUILD_DIR=build/contracts
OUTPUT_DIR=untruffle/compiled

rm -r $OUTPUT_DIR
mkdir -p $OUTPUT_DIR
solc -o $OUTPUT_DIR --bin --abi --optimize contracts/*.sol

mkdir -p $CONTRACTS_BUILD_DIR
mkdir -p $DEPLOY_BUILD_DIR
