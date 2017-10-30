const path = require('path')

module.exports = {
    entry: "./public/javascripts/news/newsEntry.js",
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'public'),
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    output: {
        path: path.resolve(__dirname, 'public/javascripts/news/'),
        filename: 'newsOut.js'
    }
}