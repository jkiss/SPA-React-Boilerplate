/*
 * @Author: Nokey 
 * @Date: 2018-09-27 16:03:00 
 * @Last Modified by:   Mr.B 
 * @Last Modified time: 2018-09-27 16:03:00 
 */
'use strict'; 

function slider(state = {
    isFetching: false,
    msg: '',
    items: []
}, action) {
    switch (action.type) {
        case 'FETCH_SLIDER_START':
            return Object.assign({}, state, {
                isFetching: true,
            })

        case 'FETCH_SLIDER_FAIL':
            return Object.assign({}, state, {
                isFetching: false,
                msg: action.payload.msg
            })

        case 'FETCH_SLIDER_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                msg: action.payload.msg,
                items: action.payload.data
            })
    
        default:
            return state
    }
}