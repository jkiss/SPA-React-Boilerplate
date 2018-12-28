/*
 * @Author: Nokey 
 * @Date: 2018-09-13 16:20:19 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-09-13 20:47:22
 */
'use strict'; 

import { Component } from 'react'
import { Link } from 'react-router-dom'
import CONFIG from '../../../../config'

// Stylus
import classNames from 'classnames/bind'
import styles from './css'
let _s = classNames.bind(styles)

// res

class Header extends Component {
    render() {
        return (
            <header id="main_header" className={_s('header')}>
                <Link to={CONFIG.route.home.path}>
                    <span className={_s('link')}>Home</span>
                </Link>
                <Link to={CONFIG.route.list.path}>
                    <span className={_s('link')}>List</span>
                </Link>
            </header>
        )
    }
    
};

export default Header;
