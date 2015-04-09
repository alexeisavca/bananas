var path = require('path');
module.exports = {
    entry: "./bundles/install.jsx",
    output: {
        path: './concat/',
        filename: "install.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['jsx?harmony'] }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias:{
            "component-provider": path.join(__dirname, '/modules/component-provider'),
            "module-provider": path.join(__dirname, '/modules/module-provider')
        }
    }
};