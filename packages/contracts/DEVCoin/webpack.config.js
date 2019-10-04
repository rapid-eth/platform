const path = require('path');

module.exports = {
  entry: './lib/certificates.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'certs.js',
    library: 'Certs'
  },
  module: {

  }
};
