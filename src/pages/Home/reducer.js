/*
 * @Author: Nokey 
 * @Date: 2018-09-25 10:04:07 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-09-25 17:22:15
 */
'use strict'; 

function fetchHomeNews(state = {
    isFetching: false,
    msg: '',
    items: []
}, action) {
    switch(action.type){
        case 'FETCH_START':
            return Object.assign({}, state, {
                isFetching: true
            })

        case 'FETCH_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                msg: action.payload.msg
            })

        case 'FETCH_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                msg: action.payload.msg,
                items: action.payload.data
            })

        default:
            return state
    }
}

export default fetchHomeNews