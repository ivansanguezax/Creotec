const path = require('path');

module.exports = {
    mode: 'development',
    entry: './firebase/auth.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'auth_bundle.js'
    }
}