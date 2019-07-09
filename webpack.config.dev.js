const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(less)$/,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    require.resolve('less-loader'),
                ]
            },
            {
                test: /\.(css)$/,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                ]
            },
            {
                test: /\.(scss)$/,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    require.resolve('sass-loader'),
                ]
            },
            {
                test: /\.svg$/,
                loader: 'file-loader',
                query: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.(jpg|png|gif|ico)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
      },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({"template": "index.html"})
    ]
};
