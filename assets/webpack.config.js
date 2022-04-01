const path = require('path');

module.exports = {
    mode: 'development',
    entry: './firebase/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'auth_bundle.js'
    }
}