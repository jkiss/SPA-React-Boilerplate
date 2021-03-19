/* 
 * @Author: Nokey 
 * @Date: 2021-03-19 15:51:08 
 * @Last Modified by:   Mr.B 
 * @Last Modified time: 2021-03-19 15:51:08 
 */

/**
 * reducers below /home domain(include it's components)
 */

function home(state = {
    isFetching: true,
    msg: '',
    items: []
}, action) {
    switch(action.type){
        case 'home_FETCH_START':
            return Object.assign({}, state, {
                isFetching: true
            })

        case 'home_FETCH_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                msg: action.payload.msg
            })

        case 'home_FETCH_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                msg: action.payload.msg,
                items: action.payload.data
            })

        default:
            return state
    }
}

export default home