/*
 * @Author: Nokey 
 * @Date: 2018-09-27 14:49:29 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-09-27 17:23:58
 */
'use strict';

import React, { Component } from 'react'

// style
import classNames from 'classnames/bind'
import styles from './css'
let _s = classNames.bind(styles)

// res
import slide1 from './img/banner1.jpg'
import slide2 from './img/banner2.jpg'
import slide3 from './img/banner3.jpg'

class HomeSliderItem extends Component{
    componentDidMount() {
        let sliderContent = $(this.sliderContent),
            ratio = window.innerWidth > 800 ? 0.3738 : 0.3738;

        sliderContent.height(sliderContent.width() * ratio + 'px');
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.data.bgUrl !== this.props.data.bgUrl){
            $(this.sliderContent)
                .addClass('transition2')
                .addClass('show')
        }
    }

    render() {
        return (
            <div className={_s('home-slide-item')}>
                <a href={this.props.data.newsUrl} target="_blank">
                    <div 
                        ref={ele=>this.sliderContent = ele} 
                        className={_s('slide-content')} 
                        style={{backgroundImage: `url(${this.props.data.bgUrl})`}}>
                    </div>
                </a>
            </div>
        );
    }
}

class HomeSlider extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            sliderData: [
                {
                    label: '',
                    title: 'Peking Opera: Inheritance or popularization?',
                    desc: '',
                    bgUrl: slide1,
                    newsUrl: 'https://news.cgtn.com/news/3d3d514f7845444d79457a6333566d54/share_p.html'
                },
                {
                    label: '',
                    title: 'The stirring art of Mongolian throat singing',
                    desc: '',
                    bgUrl: slide2,
                    newsUrl: 'https://news.cgtn.com/news/336b7a4e78637a6333566d54/share_p.html'
                },
                {
                    label: '',
                    title: 'Yueju Opera: From the past to now',
                    desc: '',
                    bgUrl: slide3,
                    newsUrl: 'https://news.cgtn.com/news/3567544d33637a6333566d54/share_p.html'
                }
            ]
        }
    }

    componentDidMount() {
        var _me = this;

        // TODO: slick-clone img dom has some problem when infinite loop...
        // Initialize slick 
        $('#slick_slide').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            infinite: false
        })
    }

    render() {
        var _me = this,
            keyId = 0,
            sliders = []

        _me.state.sliderData.forEach((obj, index) => {
            sliders.push(<HomeSliderItem key={'homeSlider' + keyId++} data={obj} />)
        })

        return (
            <div id="slick_slide" className={_s('slider-box')}>
                {sliders}
            </div>
        );
    }
}

export default HomeSlider