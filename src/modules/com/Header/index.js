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
import logo from './img/logo@2x'
import home from './img/home@2x'
import cgtn_logo from './img/cgtn-logo'

class Header extends Component {
    handleScroll(e){
        $(window).scrollTop() < 20 ? $('#main_header').attr('data-state', '') : $('#main_header').attr('data-state', 'scrolled');
    }
    
    componentDidMount() {
        var _me = this;

        $(window).scroll(function(event) {
            _me.handleScroll(event)
        })
    }

    render() {
        return (
            <header id="main_header" className={_s('header')}>
                <div className={_s('wrap')+' transition1'}>
                    <div className={_s('content')}>
                        {/* <Link to={CONFIG.route.home.path}>
                            <div className={_s('logo')+' transition1'}>Priceless Culture</div>
                        </Link> */}
                        <a href="https://www.cgtn.com" target="_blank">
                            <img src={cgtn_logo} alt="CGTN" className={_s('logo')+' transition1'} />
                        </a>
                        <Link to={CONFIG.route.home.path}>
                            <img className={_s('home')+' transition1'} src={home} alt="Home"/>
                        </Link>
                    </div>
                </div>
            </header>
        )
    }
    
};

export default Header;
