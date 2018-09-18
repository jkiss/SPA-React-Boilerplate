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
import logo from './img/f-logo'
import cvQR from './img/cv-wechat'

import weibo from './img/weibo'
import googlePlus from './img/google-plus'
import wechat from './img/wechat'
import fb from './img/fb'
import twitter from './img/twitter'
import youtube from './img/youtube'
import instagram from './img/ins'
import pinterest from './img/pinterest'
import tumblr from './img/tumblr'
import miaopai from './img/miaopai'

import weiboHover from './img/weibo-hover'
import googlePlusHover from './img/google-plus-hover'
import wechatHover from './img/wechat-hover'
import fbHover from './img/fb-hover'
import twitterHover from './img/twitter-hover'
import youtubeHover from './img/youtube-hover'
import instagramHover from './img/ins-hover'
import pinterestHover from './img/pinterest-hover'
import tumblrHover from './img/tumblr-hover'
import miaopaiHover from './img/miaopai-hover'

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
                                    <img className={_s('icon')+' transition1'} src={fb} alt="Facebook"/>
                                    <img className={_s('icon-hover')+' transition1'} src={fbHover} alt="Facebook"/>
                                </a>
                                <a href="https://www.cgtn.com/socialmedia/twitter" className={_s('icon-box')}>
                                    <img className={_s('icon')+' transition1'} src={twitter} alt="Twitter"/>
                                    <img className={_s('icon-hover')+' transition1'} src={twitterHover} alt="Twitter"/>
                                </a>
                                <a href="https://www.cgtn.com/socialmedia/youtube" className={_s('icon-box')}>
                                    <img className={_s('icon')+' transition1'} src={youtube} alt="Youtube"/>
                                    <img className={_s('icon-hover')+' transition1'} src={youtubeHover} alt="Youtube"/>
                                </a>
                                <a href="https://www.cgtn.com/socialmedia/instagram" className={_s('icon-box')}>
                                    <img className={_s('icon')+' transition1'} src={instagram} alt="Instagram"/>
                                    <img className={_s('icon-hover')+' transition1'} src={instagramHover} alt="Instagram"/>
                                </a>
                                <a href="https://www.cgtn.com/socialmedia/googleplus" className={_s('icon-box')}>
                                    <img className={_s('icon')+' transition1'} src={googlePlus} alt="Google-Plus"/>
                                    <img className={_s('icon-hover')+' transition1'} src={googlePlusHover} alt="Google-Plus"/>
                                </a>
                                <br/>
                                <a href="https://www.cgtn.com/socialmedia/pinterest" className={_s('icon-box')}>
                                    <img className={_s('icon')+' transition1'} src={pinterest} alt="Pinterest"/>
                                    <img className={_s('icon-hover')+' transition1'} src={pinterestHover} alt="Pinterest"/>
                                </a>
                                <a href="https://www.cgtn.com/socialmedia/tumblr" className={_s('icon-box')}>
                                    <img className={_s('icon')+' transition1'} src={tumblr} alt="Tumblr"/>
                                    <img className={_s('icon-hover')+' transition1'} src={tumblrHover} alt="Tumblr"/>
                                </a>
                                <a href="javascript:void(0);" className={_s('icon-box')} onClick={this.handleWechatClick.bind(this)}>
                                    <img className={_s('icon')+' transition1'} src={wechat} alt="Wechat"/>
                                    <img className={_s('icon-hover')+' transition1'} src={wechatHover} alt="Wechat"/>
                                </a>
                                <a href="https://www.cgtn.com/socialmedia/weibo" className={_s('icon-box')}>
                                    <img className={_s('icon')+' transition1'} src={weibo} alt="Weibo"/>
                                    <img className={_s('icon-hover')+' transition1'} src={weiboHover} alt="Weibo"/>
                                </a>
                                <a href="https://www.cgtn.com/socialmedia/miaopai" className={_s('icon-box')}>
                                    <img className={_s('icon')+' transition1'} src={miaopai} alt="Miaopai"/>
                                    <img className={_s('icon-hover')+' transition1'} src={miaopaiHover} alt="Miaopai"/>
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