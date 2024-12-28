const path = require('path');

module.exports = {
    entry: './src/SkillsRadarComponent.tsx',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'SkillsRadarComponent.js',
        library: 'SkillsRadarComponent',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
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
        extensions: ['.tsx', '.ts', '.js'],
    },
};
