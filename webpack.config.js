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
        extensions: ['', '.js', '.jsx']
    }
};