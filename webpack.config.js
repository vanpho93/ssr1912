module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname,
        filename: 'public/bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    }
};
