/*
 * @Author: Nokey 
 * @Date: 2018-09-25 09:59:25 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-09-25 11:35:52
 */
'use strict'; 

import { combineReducers } from 'redux'

// reducers
import fetchHomeNews from 'Home/reducer'

export default combineReducers({
    fetchHomeNews
})