/*
 * @Author: Nokey 
 * @Date: 2018-03-30 16:29:13 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-12-27 17:15:39
 */
'use strict';

import React, { Component } from 'react'
import CONFIG from '../../../config'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { reqNewsList } from './api'

// Style
import classNames from 'classnames/bind'
import styles from './css'
let _s = classNames.bind(styles)

// res

class NewsList extends React.Component {
    componentDidMount() {
        var _me = this

        reqNewsList().then((ajax)=>{
            if(ajax.status == 200){
                console.log(ajax)
                _me.props.dispatch({
                    type: 'list_FETCH_SUCCESS',
                    payload: {
                        msg: 'Fetch list data success!',
                        data: ajax.data
                    }
                })
            }else{
                _me.props.dispatch({
                    type: 'list_FETCH_FAILURE',
                    payload: {
                        msg: 'Fetch list data fail...'
                    }
                })
            }
        })

        // Analytics - gtags
        // gtag('config', 'UA-???????', {
        //     'page_path': '/priceless-culture/list'
        // })
    }

    render() {
        return (
            <div className={_s('list-box')}>
                <div className={_s('list-wrapper')}>
                    {this.props.list.msg}
                </div>
            </div>
        );
    }
}
NewsList.defaultProps = {
    centerImgs: []
}

const mapStateToProps = state => ({
    list: state.list
})

export default withRouter(connect(mapStateToProps)(NewsList))