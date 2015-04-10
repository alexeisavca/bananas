var path = require('path');
module.exports = {
    entry: {
        install: "./bundles/install.jsx",
        frontend: "./bundles/frontend.jsx"
    },
    output: {
        path: './concat/',
        filename: "[name].js"
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