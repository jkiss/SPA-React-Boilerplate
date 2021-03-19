/* 
 * @Author: Nokey 
 * @Date: 2021-03-19 16:06:26 
 * @Last Modified by:   Mr.B 
 * @Last Modified time: 2021-03-19 16:06:26 
 */

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