/*
 * @Author: Nokey 
 * @Date: 2018-09-13 17:02:05 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-09-14 17:50:44
 */
'use strict'; 

import React, { Component } from 'react';

// Stylus
import classNames from 'classnames/bind'
import styles from './style'
let _s = classNames.bind(styles)

// Images
import logo from './img/f-logo.png'
import cvQR from './img/cv-wechat.jpg'

import weibo from './img/weibo.png'
import googlePlus from './img/google-plus.png'
import wechat from './img/wechat.png'
import fb from './img/fb.png'
import twitter from './img/twitter.png'
import youtube from './img/youtube.png'
import instagram from './img/ins.png'
import pinterest from './img/pinterest'
import tumblr from './img/tumblr'
import miaopai from './img/miaopai'

class Footer extends Component {
    handleWechatClick(){
        var _me = this,
            qr = $(_me.footerQr)
    
        qr.hasClass('hide') ? qr.removeClass('hide') : qr.addClass('hide')
    }

    render() {
        return (
            <footer>
                <div className={_s('footer-wrapper')}>
                    <div className={_s('footer-content')}>
                        <img className={_s('footer-logo')} src={logo} alt="Logo"/>

                        <div className={_s('copy-right')}>
                            <p>Copyright © 2018 CGTN.</p>
                            <p>Beijing ICP prepared NO.16065310-3</p>
                        </div>

                        <div className={_s('social-account')}>
                            <p className={_s('follow-txt')}>FOLLOW US@CGTN ON:</p>
                            <div className={_s('account-icons')}>
                                <a href="https://www.cgtn.com/socialmedia/facebook" className={_s('icon-box')}>
                                    <img className={_s('icon')+' transition1 show'} src={fb} alt="Facebook"/>
                                </a>
                                <a href="https://www.cgtn.com/socialmedia/twitter" className={_s('icon-box')}>
                                    <img className={_s('icon')+' transition1 show'} src={twitter} alt="Twitter"/>
                                </a>
                                <a href="https://www.cgtn.com/socialmedia/youtube" className={_s('icon-box')}>
                                    <img className={_s('icon')+' transition1 show'} src={youtube} alt="Youtube"/>
                                </a>
                                <a href="https://www.cgtn.com/socialmedia/instagram" className={_s('icon-box')}>
                                    <img className={_s('icon')+' transition1 show'} src={instagram} alt="Instagram"/>
                                </a>
                                <a href="https://www.cgtn.com/socialmedia/googleplus" className={_s('icon-box')}>
                                    <img className={_s('icon')+' transition1 show'} src={googlePlus} alt="Google-Plus"/>
                                </a>
                                <a href="https://www.cgtn.com/socialmedia/pinterest" className={_s('icon-box')}>
                                    <img className={_s('icon')+' transition1 show'} src={pinterest} alt="Pinterest"/>
                                </a>
                                <a href="https://www.cgtn.com/socialmedia/tumblr" className={_s('icon-box')}>
                                    <img className={_s('icon')+' transition1 show'} src={tumblr} alt="Tumblr"/>
                                </a>
                                <a href="javascript:void(0);" className={_s('icon-box')} onClick={this.handleWechatClick.bind(this)}>
                                    <img className={_s('icon')+' transition1 show'} src={wechat} alt="Wechat"/>
                                </a>
                                <a href="https://www.cgtn.com/socialmedia/weibo" className={_s('icon-box')}>
                                    <img className={_s('icon')+' transition1'} src={weibo} alt="Weibo"/>
                                </a>
                                <a href="https://www.cgtn.com/socialmedia/miaopai" className={_s('icon-box')}>
                                    <img className={_s('icon')+' transition1 show'} src={miaopai} alt="Miaopai"/>
                                </a>
                            </div>
                            <img ref={ele=>this.footerQr = ele} className={_s('footer-qr')+' transition2 hide'} src={cvQR} alt="QR"/>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;