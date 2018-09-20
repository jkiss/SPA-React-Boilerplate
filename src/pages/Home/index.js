/*
 * @Author: Nokey 
 * @Date: 2018-03-29 17:59:16 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-09-14 18:47:32
 */
'use strict'; 

import React, { Component } from 'react'
import CONFIG from '../../../config'
import { Link } from 'react-router-dom'
import 'flexgrids'
import 'hoverdir'
import 'slick-carousel'
import UTILS from 'utils'

// Stylus
import 'slick-carousel/slick/slick.css'
import './slick-theme'
import classNames from 'classnames/bind'
import styles from './style'
let _s = classNames.bind(styles)

// res
import slide1 from './img/banner1.jpg'
import slide2 from './img/banner2.jpg'
import slide3 from './img/banner3.jpg'

import img_logo from './img/f-logo.png'

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

class HomeContent extends Component {
    constructor(props) {
        super(props);
        
        let tempObj = {
                id: '',
                imgurl: '',
                title: ''
            },
            tempArray = []

        for (var i = 0; i < 13; i++) {
            tempArray.push(tempObj)
        }

        this.state = {
            newsdata: tempArray
        }

        this.news_data = [{
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
    }

    componentDidMount() {
        var _me = this;

        // Initialize flexgrids
        $('#flexgrids_container').flexgrids({
            definition: {
                '<320': 1,
                '321<476': 2,
                '477<952': 4,
                '953<1428': 6,
                '1429<': 8
            },
            ratio: 0.75, // 0.5625
            delay: 100,
            selector: '.'+_s('flexgrids-grid'),
            onReady: (a) => {
                if(window.innerWidth > 800){
                    let boxes = $('.'+_s('grid-inner-box'))

                    boxes.hoverdir({
                        hoverElem: '.'+_s('da-item')
                    })
                }else{
                    $('.'+_s('da-item')).addClass('none')
                }

                setTimeout(() => {
                    _me.props.handleResize();
                }, 450);
            }
        });

        _me.setHomeNewsData(_me.news_data)

        // _me.ajaxNewsData = $.getJSON(CONFIG.io.all_news_list, {
        //         newsnum: 11
        //     })
        //     .done((data) => {
        //         let news_data = data.slice(0, 11)
        //         console.log(news_data)
                
        //         _me.setHomeNewsData(news_data)

        //         // var dataFormat = data.map((obj) => {
        //         //     // obj.title = $.trim(obj.title.replace(/\?/g, '')).split(' ').join('-');
        //         //     obj.title = $.trim(obj.title).split(' ').join('-');
        //         //     obj.imgurl = obj.imgurl.replace(/http:\/\/54.169.58.10/, Config.origin)

        //         //     return obj;
        //         // })

        //         // _me.setState({
        //         //     newsdata: dataFormat
        //         // })
        //     })
        //     .fail((err) => {
        //         console.error('Error: Get all news data failed - ', err)
        //     });

        // Analytics
        // ga('send', {
        //     'hitType': 'pageview',
        //     'page': '/Home'
        // });
    }

    // componentWillUnmount() {
    //     this.ajaxNewsData.abort();
    // }

    setHomeNewsData(data) {
        let _me = this,
            newsDoms = $('.news-one')

        data.forEach((e, i) => {
            let news_dom = newsDoms.eq(i)
            // set news bg image
            let newsBgDom = news_dom.find('.'+_s('news-bg'))

            newsBgDom.attr('src', e.pic)

            newsBgDom.on('load', function(){
                let img = $(this)

                UTILS.centerImage(img)
                    .addClass('transition2')
                    .addClass(_s('show'))

                _me.props.addCenterImg(img)
            })

            // set news title
            news_dom.find('.news-title').text(e.title)

            // set sub title
            news_dom.find('.'+_s('sub-title-box')).text(e.sub_title)

            // set news url
            news_dom.find('a').attr('href', e.news_url)
        })
    }

    render() {
        let path_baseurl = '/chinastartup/articles/'

        return (
            <div id="home_content" className={_s('home-content')}>
                <div className="box flexgrids-main-content">
                    <ul className="vanilla flexgrids-container" id="flexgrids_container">
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;},&quot;2&lt;&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;2&quot;}}">
                            <a target="_blank">
                                <div className={_s('grid-inner-box')}>
                                    {/* news bg */}
                                    <img className={_s('news-bg')} alt="News Bg" />

                                    {/* news title */}
                                    <div className={_s('da-item')}>
                                        <div className={_s('da-box-content')}>
                                            <div className={_s('in')}>
                                                <h3 className="news-title"></h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* sub title */}
                                    <div className={_s('sub-title-box')}>

                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className={_s('flexgrids-grid', 'home-icon-new')} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;},&quot;2&lt;&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;1&quot;}}">
                            <div className={_s('home-spec-1')}>
                                {/* <div className={_s('da-item')}>
                                    <div className={_s('da-box-content')}>
                                        <div className={_s('in')}>
                                            <h3></h3>
                                        </div>
                                    </div>
                                </div> */}
                                <img src={img_logo} className={_s('logo')} alt="LOGO" />
                            </div>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;},&quot;2&lt;&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;2&quot;}}">
                            <a target="_blank">
                                <div className={_s('grid-inner-box')}>
                                    {/* news bg */}
                                    <img className={_s('news-bg')} alt="News Bg" />

                                    {/* news title */}
                                    <div className={_s('da-item')}>
                                        <div className={_s('da-box-content')}>
                                            <div className={_s('in')}>
                                                <h3 className="news-title"></h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* sub title */}
                                    <div className={_s('sub-title-box')}>

                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;},&quot;2&lt;2&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;2&quot;},&quot;3&lt;&quot;:{&quot;w&quot;:&quot;3&quot;,&quot;h&quot;:&quot;3&quot;}}">
                            <a target="_blank">
                                <div className={_s('grid-inner-box')}>
                                    {/* news bg */}
                                    <img className={_s('news-bg')} alt="News Bg" />

                                    {/* news title */}
                                    <div className={_s('da-item')}>
                                        <div className={_s('da-box-content')}>
                                            <div className={_s('in')}>
                                                <h3 className="news-title"></h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* sub title */}
                                    <div className={_s('sub-title-box')}>

                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className={_s('flexgrids-grid')} data-grid="{&quot;&lt;&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;}}">
                            <a href="https://twitter.com/intent/tweet?text=Priceless Culture&amp;url=https://op.cgtn.com/priceless-culture&amp;via=cgtnofficial" target="_blank">
                                <div className={_s('grid-inner-box', 'share-twitter')}>
                                    {/* <div className={_s('da-item')}>
                                        <div className={_s('da-box-content')}>
                                            <div className={_s('in')}>
                                                <h3></h3>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </a>
                        </li>
                        <li className={_s('flexgrids-grid')} data-grid="{&quot;&lt;&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;}}">
                            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://op.cgtn.com/priceless-culture&amp;display=popup&amp;app_id=105353929816858">
                                <div className={_s('grid-inner-box', 'home-spec-2')}>
                                    {/* <div className={_s('da-item')}>
                                        <div className={_s('da-box-content')}>
                                            <div className={_s('in')}>
                                                <h3></h3>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </a>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;},&quot;2&lt;2&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;2&quot;},&quot;3&lt;&quot;:{&quot;w&quot;:&quot;3&quot;,&quot;h&quot;:&quot;3&quot;}}">
                            <a target="_blank">
                                <div className={_s('grid-inner-box')}>
                                    {/* news bg */}
                                    <img className={_s('news-bg')} alt="News Bg" />

                                    {/* news title */}
                                    <div className={_s('da-item')}>
                                        <div className={_s('da-box-content')}>
                                            <div className={_s('in')}>
                                                <h3 className="news-title"></h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* sub title */}
                                    <div className={_s('sub-title-box')}>

                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;},&quot;2&lt;&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;2&quot;}}">
                            <a target="_blank">
                                <div className={_s('grid-inner-box')}>
                                    {/* news bg */}
                                    <img className={_s('news-bg')} alt="News Bg" />

                                    {/* news title */}
                                    <div className={_s('da-item')}>
                                        <div className={_s('da-box-content')}>
                                            <div className={_s('in')}>
                                                <h3 className="news-title"></h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* sub title */}
                                    <div className={_s('sub-title-box')}>

                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className={_s('flexgrids-grid')} data-grid="{&quot;&lt;&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;2&quot;}}">
                            <div className={_s('grid-inner-box', 'home-spec-3')}>
                                {/* <div className={_s('da-item')}>
                                    <div className={_s('da-box-content')}>
                                        <div className={_s('in')}>
                                            <h3></h3>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;}}">
                            <a target="_blank">
                                <div className={_s('grid-inner-box')}>
                                    {/* news bg */}
                                    <img className={_s('news-bg')} alt="News Bg" />

                                    {/* news title */}
                                    <div className={_s('da-item')}>
                                        <div className={_s('da-box-content')}>
                                            <div className={_s('in')}>
                                                <h3 className="news-title"></h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* sub title */}
                                    <div className={_s('sub-title-box')}>

                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;},&quot;2&lt;&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;2&quot;}}">
                            <a target="_blank">
                                <div className={_s('grid-inner-box')}>
                                    {/* news bg */}
                                    <img className={_s('news-bg')} alt="News Bg" />

                                    {/* news title */}
                                    <div className={_s('da-item')}>
                                        <div className={_s('da-box-content')}>
                                            <div className={_s('in')}>
                                                <h3 className="news-title"></h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* sub title */}
                                    <div className={_s('sub-title-box')}>

                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;2&quot;},&quot;2&lt;&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;3&quot;}}">
                            <a target="_blank">
                                <div className={_s('grid-inner-box')}>
                                    {/* news bg */}
                                    <img className={_s('news-bg')} alt="News Bg" />

                                    {/* news title */}
                                    <div className={_s('da-item')}>
                                        <div className={_s('da-box-content')}>
                                            <div className={_s('in')}>
                                                <h3 className="news-title"></h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* sub title */}
                                    <div className={_s('sub-title-box')}>

                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;2&quot;},&quot;2&lt;&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;3&quot;}}">
                            <a target="_blank">
                                <div className={_s('grid-inner-box')}>
                                    {/* news bg */}
                                    <img className={_s('news-bg')} alt="News Bg" />

                                    {/* news title */}
                                    <div className={_s('da-item')}>
                                        <div className={_s('da-box-content')}>
                                            <div className={_s('in')}>
                                                <h3 className="news-title"></h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* sub title */}
                                    <div className={_s('sub-title-box')}>

                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;2&quot;},&quot;2&lt;&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;3&quot;}}">
                            <a target="_blank">
                                <div className={_s('grid-inner-box')}>
                                    {/* news bg */}
                                    <img className={_s('news-bg')} alt="News Bg" />

                                    {/* news title */}
                                    <div className={_s('da-item')}>
                                        <div className={_s('da-box-content')}>
                                            <div className={_s('in')}>
                                                <h3 className="news-title"></h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* sub title */}
                                    <div className={_s('sub-title-box')}>

                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;}}">
                            <a target="_blank">
                                <div className={_s('grid-inner-box')}>
                                    {/* news bg */}
                                    <img className={_s('news-bg')} alt="News Bg" />

                                    {/* news title */}
                                    <div className={_s('da-item')}>
                                        <div className={_s('da-box-content')}>
                                            <div className={_s('in')}>
                                                <h3 className="news-title"></h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* sub title */}
                                    <div className={_s('sub-title-box')}>

                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

class HomeSliderItem extends Component{
    componentDidMount() {
        let sliderContent = $(this.sliderContent),
            ratio = window.innerWidth > 800 ? 0.3738 : 0.3738;

        sliderContent.height(sliderContent.width() * ratio + 'px');
    }

    render() {
        return (
            <div className={_s('home-slide-item')}>
                <a href={this.props.data.newsUrl} target="_blank">
                    <div ref={ele=>this.sliderContent = ele} className={_s('slide-content')}>
                        <img src={this.props.data.bgUrl} onLoad={this.props.handleImgLoaded} alt="JPG" />
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
        });
    }

    handleImgLoaded(e) {
        var _me = this,
            img = $(e.target)

        UTILS.centerImage(img)
            .addClass('transition2')
            .addClass('show')

        _me.props.addCenterImg(img)
    }

    render() {
        var _me = this,
            keyId = 0,
            sliders = []

        _me.state.sliderData.forEach((obj, index) => {
            sliders.push(<HomeSliderItem key={'homeSlider' + keyId++} data={obj} handleImgLoaded={_me.handleImgLoaded.bind(this)} />)
        })

        return (
            <div id="slick_slide" className={_s('slider-box')}>
                {sliders}
            </div>
        );
    }
}

class Home extends Component{
    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this))

        window.scrollTo(0, 0);

        // Analytics - gtags
        gtag('config', 'UA-66998167-8', {
            'page_path': '/priceless-culture'
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this))
    }

    handleResize() {
        var _me = this;

        _me.props.centerImgs.forEach((e, i) => {
            UTILS.centerImage(e)
        });
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
                    <HomeSlider 
                        centerImage={this.centerImage} 
                        addCenterImg={this.addCenterImg.bind(this)} />
                    {/* End Slider */}

                    {/* Main content */}
                    <HomeContent 
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

export default Home;