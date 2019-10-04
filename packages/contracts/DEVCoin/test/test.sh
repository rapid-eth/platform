#!/bin/sh

# Run integration tests
#echo 'Running integration tests...'
#./node_modules/mocha/bin/mocha ./test/integration/

# Run unit tests
echo 'Running unit tests'
./node_modules/mocha/bin/mocha ./test/unit/test.js
