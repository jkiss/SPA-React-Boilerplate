/*
 * @Author: Nokey 
 * @Date: 2018-03-29 17:59:16 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-12-27 17:13:48
 */
'use strict'; 

import React, { Component } from 'react'
import CONFIG from '../../../config'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { reqHomeList } from './api'

// com
import Component1 from './Component1'

// Stylus
import classNames from 'classnames/bind'
import styles from './css'
let _s = classNames.bind(styles)

class Home extends Component{
    componentDidMount() {
        let _me = this

        window.addEventListener('resize', _me.handleResize.bind(this))

        // Analytics - gtags
        // gtag('config', 'UA-???????', {
        //     'page_path': '/priceless-culture'
        // })

        console.log('redux', _me.props)
        _me.props.dispatch({
            type: 'START_FETCH'
        })

        reqHomeList().then((data)=>{
            if(data.status == 200){
                _me.props.dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: {
                        msg: 'Fetch home data success!',
                        data: data.data
                    }
                })
            }else{
                _me.props.dispatch({
                    type: 'FETCH_FAILURE',
                    payload: {
                        msg: 'Fetch home data fail...'
                    }
                })
            }
        })
        
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this))
    }

    handleResize(){
        console.info('Resize...')
    }

    render() {
        let cont
        if(this.props.home.isFetching){
            cont = <p className={_s('p')}>Loading</p>
        }else{
            cont = (
                <React.Fragment>
                    <Component1 />
                
                    <Link to={CONFIG.route.list.path}>
                        <span className={_s('link')}>List</span>
                    </Link>
                </React.Fragment>
            )
        }
        return (
            <div className={_s('box')}>
                { cont }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    home: state.home
})

export default withRouter(connect(mapStateToProps)(Home))