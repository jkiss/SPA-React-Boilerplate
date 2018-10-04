/*
 * @Author: Nokey 
 * @Date: 2018-03-29 17:59:16 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-09-27 15:13:22
 */
'use strict'; 

import React, { Component } from 'react'
import CONFIG from '../../../config'
import { Link } from 'react-router-dom'
import 'slick-carousel'
import UTILS from 'utils'

// redux
import { connect } from 'react-redux'

// com
import Slider from './Slider'
import GridContent from './GridContent'

// Stylus
import 'slick-carousel/slick/slick.css'
import './slick-theme'
import classNames from 'classnames/bind'
import styles from './css'
let _s = classNames.bind(styles)



import img_pic1 from './img/cover/1'
import img_pic2 from './img/cover/2'
import img_pic3 from './img/cover/3'
import img_pic4 from './img/cover/4'
import img_pic5 from './img/cover/5'
import img_pic6 from './img/cover/6'
import img_pic7 from './img/cover/7'
import img_pic8 from './img/cover/8'
import img_pic9 from './img/cover/9'
import img_pic10 from './img/cover/10'
import img_pic11 from './img/cover/11'

const news_data = [{
        title: 'The intangible craftsmanship of Yunjin brocade',
        sub_title: 'Yunjin',
        pic: img_pic1,
        news_url: 'https://news.cgtn.com/news/324d6a4e78597a6333566d54/share_p.html'
    },{
        title: 'The civilization accelerator: China engraved block printing technique',
        sub_title: 'The civilization accelerator',
        pic: img_pic2,
        news_url: 'https://news.cgtn.com/news/3d3d774d3467544e78457a6333566d54/share_p.html'
    },{
        title: 'Kunqu Opera: An orchid in bloom',
        sub_title: 'Kunqu Opera',
        pic: img_pic3,
        news_url: 'https://news.cgtn.com/news/31676a4d32557a6333566d54/share_p.html'
    },{
        title: 'Peking Opera: Inheritance or popularization?',
        sub_title: 'Peking Opera',
        pic: img_pic4,
        news_url: 'https://news.cgtn.com/news/3d3d514f7845444d79457a6333566d54/share_p.html'
    },{
        title: 'Tibetan Opera: A \'living fossil\' of Tibetan culture',
        sub_title: 'Tibetan Opera',
        pic: img_pic5,
        news_url: 'https://news.cgtn.com/news/35677a4e35677a6333566d54/share_p.html'
    },{
        title: 'Guqin links musical past with the present',
        sub_title: 'Guqin',
        pic: img_pic6,
        news_url: 'https://news.cgtn.com/news/34556a4e35637a6333566d54/share_p.html'
    },{
        title: 'The stirring art of Mongolian throat singing',
        sub_title: 'Khoomei',
        pic: img_pic8,
        news_url: 'https://news.cgtn.com/news/336b7a4e78637a6333566d54/share_p.html'
    },{
        title: 'Gesar epic tradition: A window to Tibetan culture',
        sub_title: 'Gesar epic tradition',
        pic: img_pic9,
        news_url: 'https://news.cgtn.com/news/31556a4e7a637a6333566d54/share_p.html'
    },{
        title: 'Chinese shadow puppetry: A tale of light and shadow',
        sub_title: 'Chinese shadow puppetry',
        pic: img_pic10,
        news_url: 'https://news.cgtn.com/news/33516a4e7a597a6333566d54/share_p.html'
    },{
        title: 'Sustaining sericulture and silk craftsmanship in China',
        sub_title: 'sericulture and silk',
        pic: img_pic11,
        news_url: 'https://news.cgtn.com/news/3d3d514d7a636a4e77457a6333566d54/share_p.html'
    },{
        title: 'Longquan Celadon: The \'jade\' in Chinese porcelain',
        sub_title: 'Longquan Celadon',
        pic: img_pic7,
        news_url: 'https://news.cgtn.com/news/3363544d316b7a6333566d54/share_p.html'
    }]

class Home extends Component{
    componentDidMount() {
        let _me = this

        window.addEventListener('resize', _me.handleResize.bind(this))

        window.scrollTo(0, 0);

        // Analytics - gtags
        gtag('config', 'UA-66998167-8', {
            'page_path': '/priceless-culture'
        })

        console.log('redux', _me.props.fetchHomeNews)
        _me.props.dispatch({
            type: 'START_FETCH',
            payload: {}
        })

        setTimeout(()=>{
            _me.props.dispatch({
                type: 'FETCH_SUCCESS',
                payload: {
                    msg: 'Fetch home data success!',
                    data: news_data
                }
            })
        }, 2000)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this))
    }

    handleResize() {
        var _me = this

        _me.props.centerImgs.forEach((e, i) => {
            UTILS.centerImage(e)
        })
    }

    addCenterImg(img) {
        console.log()
        this.props.centerImgs.push(img);
    }

    render() {
        return (
            <div className={_s('home-box')}>
                <div className={_s('home-wrapper')}>
                    {/* Slider */}
                    <Slider 
                        centerImage={this.centerImage} 
                        addCenterImg={this.addCenterImg.bind(this)} />
                    {/* End Slider */}

                    {/* Main content */}
                    <GridContent 
                        centerImage={this.centerImage} 
                        addCenterImg={this.addCenterImg.bind(this)} 
                        handleResize={this.handleResize.bind(this)} />
                    {/* End Main content */}

                    <div className={_s('read-more')}>
                        <Link to={CONFIG.route.list.path}>
                            <div className={_s('line')}>
                                <i className={_s('read-more-btn', 'line-block')}></i>
                                VIEW ALL PROJECTS
                                <i className={_s('read-more-line', 'line-block')}></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
Home.defaultProps = {
    centerImgs: []
}

const mapStateToProps = state => ({
    fetchHomeNews: state.fetchHomeNews
})

export default connect(mapStateToProps)(Home)