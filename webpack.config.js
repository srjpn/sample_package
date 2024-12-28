const path = require('path');

module.exports = {
    entry: './src/SkillsRadarComponent.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'SkillsRadarComponent.js',
        library: 'SkillsRadarComponent',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
    resolve: {
        extensions: ['.js'],
    },
};
