/* 
 * @Author: Nokey 
 * @Date: 2021-03-17 20:16:51 
 * @Last Modified by:   Mr.B 
 * @Last Modified time: 2021-03-17 20:16:51 
 */

import config from 'Base/config'

function isIE(){
    let ua = window.navigator.userAgent,
        e = ua.indexOf("MSIE ")

    if (e > 0)
        return parseInt(ua.substring(e + 5, ua.indexOf(".", e)), 10)

    if (ua.indexOf("Trident/") > 0) {
        let n = ua.indexOf("rv:")
        return parseInt(ua.substring(n + 3, ua.indexOf(".", n)), 10)
    }
    
    return false
}

function isMobile(){
    let _ua = window.navigator.userAgent.toLowerCase()

    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|phone|bb10|rim|meego/i.test(_ua)
}

function isWeiXin(){
    let ua = window.navigator.userAgent.toLowerCase()
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true
    }else{
        return false
    }
}

function isNarrowScreen(){
    let _me = this
    /**
     * devices similar to mobile
     */
    let screen_ratio = window.innerWidth / window.innerHeight
    if(screen_ratio > 1){
        return false
    }else{
        return true
    }
}

/**
 * JWplayer
 */
function setJWplayer(dom, data, opt){
    opt = opt || {}
    let instance

    try {
        instance = jwplayer(dom).setup({
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
            autostart: opt.autostart === 'true' ? true : false,
            mute: opt.mute === 'true' ? true : false,
            controls: opt.controls === 'false' ? false : true,
            repeat: opt.repeat === 'true' ? true : false,
            hlshtml: true,
            base: config.plugin_url + 'jwplayer-8.12.5',
            flashplayer: config.plugin_url + 'jwplayer-8.12.5/jwplayer.flash.swf'
        }).on('setupError', (e)=>{
            console.log('Setup Error...', e)
        }).on('play', ()=>{
            console.log('video play')

            opt.onPlay && opt.onPlay()
        });
    } catch(error){
        console.error('Setup JWplayer: ' + error)
    }

    return instance
}

function removeJWplayer(dom){
    try {
        jwplayer(dom).remove()
    } catch (error) {
        console.error('Remove JWplayer: ' + error)
    }
}

/**
 * determine whether browser can 
 * play 360 video or not
 */
function isCanPlay360(){
    // TODO: Latest Chrome, Firefox & Edge desktop (CFE)
    let _me = this,
        _ua = window.navigator.userAgent.toLowerCase(),
        _isMobile = /mobile|android|kindle|silk|midp|phone|(windows .+arm|touch)/.test(_ua),
        _isIOS = /iphone|ipad/.test(_ua),
        _isChrome = /chrome/.test(_ua),
        _isCFE = /firefox|edge|chrome/.test(_ua)

    // if(_isMobile){
    //     return _isIOS || _isChrome
    // }else{
    //     return _isCFE
    // }
    return !_isMobile && _isCFE
}

/**
 * Get element background-image's URL
 */
function getBGImage(e){
    return e.style.backgroundImage.css('backgroundImage').match(/http.+[jpg|png|svg|jpeg]/i)[0]
}

/**
 * getBoundingClientRect
 */
function getBCR(ele, type) {
    if (type !== undefined) {
        return ele.getBoundingClientRect()[type];
    } else {
        return ele.getBoundingClientRect();
    }
}

/**
 * 10000 -> 10,000
 */
function formatNumberRgx(num) {
    var parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

/**
 * date add days
 */
function addDays(date_str, days){
    let date = new Date(date_str)

    date.setDate(date.getDate() + days)

    return date
}

/**
 * auto download file
 */
function downloadFile(url, name){
    // download
    let link = document.createElement('a')
    link.href = url
    link.download = name
    link.dispatchEvent(new MouseEvent('click'))
}

/**
 * parse url parameters
 */
function queryUrl(url) {
    if(!url) url = location.search

    let query = url.substr(1),
        result = {}
    query.split("&").forEach((part)=>{
        let item = part.split("=")
        result[item[0]] = decodeURIComponent(item[1])
    })

    return result
}

export {
    isIE,
    isMobile,
    isWeiXin,
    isNarrowScreen,
    setJWplayer,
    removeJWplayer,
    isCanPlay360,
    getBGImage,
    getBCR,
    formatNumberRgx,
    addDays,
    downloadFile,
    queryUrl
}