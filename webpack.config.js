var path = require('path');

module.exports = {
    entry : './src/wrap.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js',
        publicPath : 'dist'
    },
    module : {
        rules : [
            {
                test : /\.html$/,
                use : ['raw-loader']
            },
            {
                test : /\.sass$/,
                use : ['style-loader','css-loader','sass-loader']
            },
            {
                test : /\.css$/,
                use : ['style-loader', 'css-loader']
            },
            {
                test : /\.js$/,
                use : ['babel-loader']
            }
        ]
    }
}
