/*
 * @Author: Nokey 
 * @Date: 2019-07-25 15:24:35 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-03-17 20:13:20
 */
'use strict'; 

import * as log from 'loglevel'

PRODUCTION ? log.setLevel('warn') : log.setLevel('debug')

export default {
    info: function(){
        log.info('%c [INFO]:', 'background: #222; color: #88d1f1', ...arguments)
    },

    warn: function() {
        log.info('%c [WARN]:', 'background: #222; color: #f7de1f', ...arguments)
    },

    error: function(){
        log.error('%c [ERROR]:', 'background: #222; color: #f44a47', ...arguments)
    }
}