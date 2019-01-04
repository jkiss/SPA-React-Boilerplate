/*
 * @Author: Nokey 
 * @Date: 2018-09-25 10:04:07 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-09-25 17:22:15
 */
'use strict'; 

/**
 * reducers below /home domain(include it's components)
 */

function list(state = {
    isFetching: true,
    msg: 'Loading',
    items: []
}, action) {
    switch(action.type){
        case 'list_FETCH_START':
            return Object.assign({}, state, {
                isFetching: true
            })

        case 'list_FETCH_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                msg: action.payload.msg
            })

        case 'list_FETCH_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                msg: action.payload.msg,
                items: action.payload.data
            })

        default:
            return state
    }
}

export default list