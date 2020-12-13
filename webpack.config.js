const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        publicPath: "/public/"
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                exclude: /node_modules/,
                loader: 'file-loader?limit=8192&name=images/[name].[ext]'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.less', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'test',
                hash: false,
                cache: false,
                showErrors: false,
            }
        )
    ],
    devServer: {
        // 根目录下dist为基本目录
        contentBase: path.join(__dirname, 'dist'),
        // 自动压缩代码
        compress: true,
        // 服务端口为1208
        port: 8000,
        // 自动打开浏览器
        open: true
    }
}