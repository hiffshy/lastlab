
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './index.js')
    },
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.css$/, use: [ 'style-loader','css-loader'] },
            { test: /\.(js)$/, use: 'babel-loader' },
            {test: /\.html$/, use: ['html-loader']}
        ]
    },
    externals: {
        swiper: 'Swiper',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
      },

    
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        
      ],
      mode: 'development',
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }

}
