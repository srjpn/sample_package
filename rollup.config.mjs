import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs', // CommonJS
            sourcemap: true,
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm', // ES Modules
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        json(),
        postcss({
            extract: true,
            minimize: true,
        }),
    ],
    external: ['react', 'react-dom'],
};
