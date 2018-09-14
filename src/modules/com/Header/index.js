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
import styles from './style'
let _s = classNames.bind(styles)

// res
import logo from './img/home@2x'
import home from './img/logo@2x'

class Header extends Component {
    componentDidMount() {
        setTimeout(() => {
            $('#main_header').attr('data-state', 'scrolled')
        }, 3000);
    }
    render() {
        return (
            <header id="main_header" className={_s('header')}>
                <div className={_s('wrap')+' transition1'}>
                <div className="content">
                    <Link to={CONFIG.route.home.path}>
                        <img className="logo transition1" src={logo} alt="Logo"/>
                    </Link>
                    <Link to={CONFIG.route.home.path}>
                        <img className="home transition1" src={home} alt="Home"/>
                    </Link>
                </div>
                </div>
            </header>
        );
    }
}

export default Header;