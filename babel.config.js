/*
 * @Author: 卓文理
 * @Email: zhuowenligg@gmail.com
 * @Date: 2019-08-17 12:18:47
 */

module.exports = {
    presets: [
        [
            '@babel/env',
            {
                corejs: 2,
                useBuiltIns: 'usage',
                targets: {
                    chrome: '40'
                },
            },
        ],
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
    ],
    sourceType: 'unambiguous'
};
