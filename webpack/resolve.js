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
        ,'jwplayer': path.resolve(vendor_path, 'jwplayer7.12.11.js')
        ,'jquery-loader': path.resolve(vendor_path, 'jquery.html5Loader.min.js')
        ,'hoverdir': path.resolve(vendor_path, 'jquery.hoverdir.js')
        ,'flexgrids': path.resolve(vendor_path, 'flexgrids.js')
        ,'scrollto': path.resolve(vendor_path, 'jquery-scrollto.js')
    },

    extensions: ['.js', '.styl', '.css', '.jpg', '.gif', '.png'],

    modules: [
        path.resolve('./src/fonts'),
        path.resolve('./src/styles'),
        path.resolve('./src/res'),
        path.resolve('./src/modules'),
        path.resolve('./src/pages'),
        path.resolve('./node_modules')
    ]
};