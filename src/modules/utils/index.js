/*
 * @Author: Nokey 
 * @Date: 2017-09-05 15:38:44 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-09-13 16:25:59
 */
'use strict';

import config from '../../../config'
import url from 'url'

class Util {
    isIE() {
        let ua = window.navigator.userAgent,
            e = ua.indexOf("MSIE ")

        if (e > 0)
            return parseInt(ua.substring(e + 5, ua.indexOf(".", e)), 10)
        if (ua.indexOf("Trident/") > 0) {
            let n = ua.indexOf("rv:");
            return parseInt(ua.substring(n + 3, ua.indexOf(".", n)), 10)
        }
        return false
    }

    CR(){
        console.log('%c' + 'Mr.B', 'font-family: "courier new"; color:#b7a457; font-size:24px;')
    }

    /**
     * HTML:
     * <div class="center-image">
     *     <img />
     * </div>
     * 
     * JS:
     * var center_images = $('.center-image');
     * 
     * @param {Array} image_boxs 
     * @memberof Util
     */
    centerImageArr(image_boxs) {
        image_boxs.each(function (i) {
            let container = $(this),
                img = $("img", this),
                containerRatio = container.outerWidth() / container.outerHeight(),
                imgRatio = img.width() / img.height();

            if (imgRatio >= containerRatio) {
                img.css({
                    "width": "auto",
                    "height": "102%"
                });
            } else {
                img.css({
                    "width": "102%",
                    "height": "auto"
                });
            }

            img.css({
                "position": "absolute",
                "top": "50%",
                "left": "50%",
                "margin-top": -1 * img.height() * 0.5 + "px",
                "margin-left": -1 * img.width() * 0.5 + "px"
            });

        });
    }

    centerImage(img) {
        var container = img.parent(),
            containerRatio = container.outerWidth() / container.outerHeight(),
            imgRatio = img.width() / img.height();

        if (imgRatio >= containerRatio) {
            img.css({ "width": "auto", "height": "102%" });
        } else {
            img.css({ "width": "102%", "height": "auto" });
        }

        img.css({
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "margin-top": -1 * img.height() * 0.5 + "px",
            "margin-left": -1 * img.width() * 0.5 + "px"
        });

        return img;
    }

    /**
     * JWplayer
     */
    setJWplayer(dom, data, opt){
        opt = opt || {}

        try {
            jwplayer(dom).setup({
                file: data.video,
                image: data.poster,
                skin: {
                    name: 'nk-player'
                },
                stretching: 'uniform',
                width: '100%',
                aspectratio: opt.ratio || '16:9',
                androidhls: true,
                primary: 'html5',
                autostart: false,
                hlshtml: true,
                base: url.resolve(config.plugin_url, '/plugins/jwplayer-7.12.11'),
                flashplayer: url.resolve(config.plugin_url, '/plugins/jwplayer-7.12.11/jwplayer.flash.swf')
            }).on('setupError', (e)=>{
                console.log('Setup Error...', e)
            }).on('play', ()=>{
                console.log('video play')
            });
        } catch(error){
            console.error('Setup JWplayer: ' + error)
        }

        return dom
    }

    removeJWplayer(dom){
        try {
            jwplayer(dom).remove()
        } catch (error) {
            console.error('Remove JWplayer: ' + error)
        }
    }

    /**
     * Get element background-image's URL
     */
    getBGImage(e){
        return $(e).css('backgroundImage').match(/http.+[jpg|png|svg|jpeg]/i)[0]
    }
}

export default new Util()