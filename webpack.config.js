const webpack = require('webpack');

module.exports = () => {
    return {
        mode: 'development',
        entry: {
            app: __dirname + '/public/src/index.js'
        },
        output: {
            filename: '[name].js',
            path: __dirname + '/public/dist/js'
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        query: {
                            "presets": ["@babel/preset-env", "@babel/preset-react"],
                        }
                    },
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: true //Added for locally scoped css class name
                        }
                    }],
                    include: /\.module\.css$/
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ],
                    exclude: /\.module\.css$/
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    loader: "url-loader?limit=500000"
                },
                {
                    test: /\.worker.js$/,
                    loader: 'worker-loader'
                }
            ]
        },
        node: {
            fs: "empty"
        }
    }
};
