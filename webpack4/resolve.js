/**
 * Author: Mr.B
 * Date: 2017/7/7-17:20
 * Last Modified by: Nokey
 */
'use strict';

const path = require('path'),
      vendor_path = path.resolve(__dirname, '../src/vendor');

module.exports = {
    alias: {
        /**
         * Plugins( PS: some plugins may be installed by npm, please check package.json!!! )
         */
        'split-text': path.resolve(vendor_path, 'SplitText.min.js')
    },

    extensions: ['.js', '.styl', '.css', '.jpg', '.gif', '.png', 'mp3', 'mp4', 'obj', 'mtl', 'glb'],

    modules: [
        path.resolve('./src/fonts'),
        path.resolve('./src/modules'),
        path.resolve('./src/pages'),
        path.resolve('./node_modules')
    ]
};