/*
 * @Author: Nokey 
 * @Date: 2018-03-29 17:59:16 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-12-27 17:13:48
 */
'use strict'; 

import React, { Component } from 'react'
import CONFIG from '../../../config'
import { Link } from 'react-router-dom'
import UTILS from 'utils'

// redux
import { connect } from 'react-redux'

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

        console.log('redux', _me.props.home)
        _me.props.dispatch({
            type: 'START_FETCH',
            payload: {}
        })

        setTimeout(()=>{
            _me.props.dispatch({
                type: 'FETCH_SUCCESS',
                payload: {
                    msg: 'Fetch home data success!',
                    data: ['1', '2']
                }
            })
        }, 2000)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this))
    }

    handleResize(){
        console.info('Resize...')
    }

    render() {
        return (
            <div className={_s('box')}>
                <Component1 />
                
                <Link to={CONFIG.route.list.path}>
                    <span className={_s('link')}>List</span>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    home: state.home
})

export default connect(mapStateToProps)(Home)