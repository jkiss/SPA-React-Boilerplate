/*
 * @Author: Nokey 
 * @Date: 2019-07-25 15:24:35 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2019-07-25 15:27:53
 */
'use strict'; 

import * as log from 'loglevel'

PRODUCTION ? log.setLevel('warn') : log.setLevel('debug')

export default log