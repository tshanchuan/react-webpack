var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/app.js')],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            "process.env": { 
                NODE_ENV: JSON.stringify("production") 
            }
        })
    ],
    devServer: {
        hot: true
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写,
            query:{
                presets:['es2015','react']
            }
        }]
    }
};