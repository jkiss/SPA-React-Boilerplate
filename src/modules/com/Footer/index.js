/*
 * @Author: Nokey 
 * @Date: 2018-09-13 17:02:05 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-09-13 19:48:01
 */
'use strict'; 

import React, { Component } from 'react';

// Images
import logo from './img/logo@2x.png'
import weibo from './img/weibo@2x.png'
import weiboHover from './img/weibo-hover@2x.png'
import googlePlus from './img/google-plus@2x.png'
import googlePlusHover from './img/google-plus-hover@2x.png'
import wechat from './img/wechat@2x.png'
import wechatHover from './img/wechat-hover@2x.png'
import fb from './img/facebook@2x.png'
import fbHover from './img/facebook-hover@2x.png'
import twitter from './img/twitter@2x.png'
import twitterHover from './img/twitter-hover@2x.png'
import youtube from './img/youtube@2x.png'
import youtubeHover from './img/youtube-hover@2x.png'
import instagram from './img/instagram@2x.png'
import instagramHover from './img/instagram-hover@2x.png'
import cvQR from './img/cv-wechat.png'

class Footer extends Component {
    componentDidMount() {
        $('.icon-box').hover(function() {
          var _me = $(this);
    
          _me.find('.icon').removeClass('show');
          _me.find('.icon-hover').addClass('show');
        }, function() {
          var _me = $(this);
    
          _me.find('.icon').addClass('show');
          _me.find('.icon-hover').removeClass('show');
        });
    }
    
    handleWechatClick(){
        var _me = this,
            qr = $(_me.footerQr)
    
        qr.hasClass('hide') ? qr.removeClass('hide') : qr.addClass('hide')
    }

    render() {
        return (
            <footer>
                <div className="footer-wrapper">
                    <div className="footer-content">
                        <div className="copy-right">
                            <img className="footer-logo" src={logo} alt="Logo"/>
                            <p>Copyright © 2018 CGTN.</p>
                            <p>Beijing ICP prepared NO.16065310-3</p>
                        </div>

                        <div className="social-account">
                        <p>FOLLOW US@CGTN ON:</p>
                        <div className="account-icons">
                            <a href="https://www.cgtn.com/socialmedia/weibo" className="icon-box">
                                <img className="icon transition1 show" src={weibo} alt="Weibo"/>
                                <img className="icon-hover transition1" src={weiboHover} alt="Weibo"/>
                            </a>
                            <a href="https://www.cgtn.com/socialmedia/googleplus" className="icon-box">
                                <img className="icon transition1 show" src={googlePlus} alt="Google-Plus"/>
                                <img className="icon-hover transition1" src={googlePlusHover} alt="Google-Plus"/>
                            </a>
                            <a href="javascript:void(0);" className="icon-box" onClick={this.handleWechatClick}>
                                <img className="icon transition1 show" src={wechat} alt="Wechat"/>
                                <img className="icon-hover transition1" src={wechatHover} alt="Wechat"/>
                            </a>
                            <a href="https://www.cgtn.com/socialmedia/facebook" className="icon-box">
                                <img className="icon transition1 show" src={fb} alt="Facebook"/>
                                <img className="icon-hover transition1" src={fbHover} alt="Facebook"/>
                            </a>
                            <a href="https://www.cgtn.com/socialmedia/twitter" className="icon-box">
                                <img className="icon transition1 show" src={twitter} alt="Twitter"/>
                                <img className="icon-hover transition1" src={twitterHover} alt="Twitter"/>
                            </a>
                            <a href="https://www.cgtn.com/socialmedia/youtube" className="icon-box">
                                <img className="icon transition1 show" src={youtube} alt="Youtube"/>
                                <img className="icon-hover transition1" src={youtubeHover} alt="Youtube"/>
                            </a>
                            <a href="https://www.cgtn.com/socialmedia/instagram" className="icon-box">
                                <img className="icon transition1 show" src={instagram} alt="Instagram"/>
                                <img className="icon-hover transition1" src={instagramHover} alt="Instagram"/>
                            </a>
                        </div>
                        <img ref={ele=>this.footerQr = ele} className="footer-qr transition2 hide" src={cvQR} alt="QR"/>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;