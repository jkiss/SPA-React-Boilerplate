/*
 * @Author: Nokey 
 * @Date: 2018-09-25 09:59:25 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-03-17 20:07:19
 */
'use strict'; 

import { combineReducers } from 'redux'

// reducers
import home from 'Home/reducer'
import list from 'NewsList/reducer'

function app(state = {
    lang: cache_lang || 'en',  // 'en' or 'zh'
    loaded: false,
    show: false,
    isNarrowScreen: '',
    data: null
}, action) {
    switch (action.type) {
        case 'SWITCH_LANG':
            return {...state, ...{lang: action.payload.lang}}

        case 'SET_LOADED':
            return {...state, ...{loaded: action.payload.loaded}}

        case 'SCREEN_DECTECT':
            return {...state, ...{isNarrowScreen: action.payload.isNarrowScreen}}

        case 'SET_PANDEMIC':
            return {...state, ...{data: action.payload.data}}

        default:
            return state
    }
}

export default combineReducers({
    app,
    home,
    list
})