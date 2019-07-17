const path = require('path');

const conf = {
    devtool: 'source-map',
    entry: { 
        app:'./src/index.js' 
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: 'dist/'
    },
    
    devServer: {
        overlay: true
    }
};

module.exports = conf;