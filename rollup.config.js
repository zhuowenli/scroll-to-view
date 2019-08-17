/*
 * @Author: 卓文理
 * @Email: 531840344@qq.com
 * @Date: 2018-05-23 14:49:30
 */

import babel from 'rollup-plugin-babel';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { uglify } from 'rollup-plugin-uglify';

export default {
    input: 'src/index.js',
    output: {
        format: 'umd',
        name: 'scrollToView',
        file: 'dist/scroll-to-view.js',
        sourcemap: process.env.NODE_ENV === 'development',
    },
    watch: {
        include: 'src/**'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            externalHelpers: false,
            runtimeHelpers: true
        }),
        process.env.NODE_ENV === 'production' ? uglify() : sourcemaps(),
    ]
}

