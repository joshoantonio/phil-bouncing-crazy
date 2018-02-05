const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSass = new ExtractTextPlugin({
    filename: 'stylesheets/index.css'
})

module.exports = {
    entry: './styles/main.scss',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'stylesheets/index.css'
    },
    module:{
        rules:[
            {
                test: /\.(s?)css$/,
                exclude: /node_modules/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                }),
            },
        ]
    },
    plugins: [
        extractSass
    ],
};
