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
                // if (!iOS) {
                //     a.getTrigger().find('.js-da').hoverdir({
                //         element: '.js-da-item:eq(0)',
                //         elementClass: 'js-da-item'
                //     })
                // }
                // a.getTrigger().css('visibility', 'visible')
                let boxes = $('.'+_s('grid-inner-box'))
                // console.log(box.eq(0).width() + ':' + box.eq(0).width());
                boxes.hoverdir({
                    hoverElem: '.'+_s('da-item')
                })

                setTimeout(() => {
                    _me.props.handleResize();
                }, 450);
            }
        });

        _me.ajaxNewsData = $.getJSON(CONFIG.io.all_news_list, {
                newsnum: 11
            })
            .done((data) => {
                let news_data = data.slice(0, 11)
                console.log(news_data)
                
                _me.setHomeNewsData(news_data)

                // var dataFormat = data.map((obj) => {
                //     // obj.title = $.trim(obj.title.replace(/\?/g, '')).split(' ').join('-');
                //     obj.title = $.trim(obj.title).split(' ').join('-');
                //     obj.imgurl = obj.imgurl.replace(/http:\/\/54.169.58.10/, Config.origin)

                //     return obj;
                // })

                // _me.setState({
                //     newsdata: dataFormat
                // })
            })
            .fail((err) => {
                console.error('Error: Get all news data failed - ', err)
            });

        // Analytics
        // ga('send', {
        //     'hitType': 'pageview',
        //     'page': '/Home'
        // });
    }

    componentWillUnmount() {
        this.ajaxNewsData.abort();
    }

    setHomeNewsData(data) {
        let _me = this,
            newsDoms = $('.news-one')

        data.forEach((e, i) => {
            // set news bg image
            let newsBgDom = newsDoms.eq(i).find('.'+_s('news-bg'))

            newsBgDom.attr('src', e.pic_link)

            newsBgDom.on('load', function(){
                let img = $(this)

                UTILS.centerImage(img)
                    .addClass('transition2')
                    .addClass('show')

                _me.props.addCenterImg(img)
            })

            // set news title
            newsDoms.eq(i).find('.news-title').text(e.news_title)
        })
    }

    render() {
        let path_baseurl = '/chinastartup/articles/'

        return (
            <div id="home_content" className="home-content">
                <div className="box flexgrids-main-content">
                    <ul className="vanilla flexgrids-container" id="flexgrids_container">
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;},&quot;2&lt;&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;2&quot;}}">
                            <Link to={{ pathname: path_baseurl + this.state.newsdata[0].id + '/' + encodeURIComponent(this.state.newsdata[0].title), query: {}, state: { id: this.state.newsdata[0].id } }}>
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
                                </div>
                            </Link>
                        </li>
                        <li className={_s('flexgrids-grid', 'home-icon-new')} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;},&quot;2&lt;&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;1&quot;}}">
                            <div className={_s('grid-inner-box', 'home-spec-1')}>
                                <div className={_s('da-item')}>
                                    <div className={_s('da-box-content')}>
                                        <div className={_s('in')}>
                                            <h3></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;},&quot;2&lt;&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;2&quot;}}">
                            <Link to={{ pathname: path_baseurl + this.state.newsdata[1].id + '/' + encodeURIComponent(this.state.newsdata[1].title), query: {}, state: { id: this.state.newsdata[1].id } }}>
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
                                </div>
                            </Link>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;},&quot;2&lt;2&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;2&quot;},&quot;3&lt;&quot;:{&quot;w&quot;:&quot;3&quot;,&quot;h&quot;:&quot;3&quot;}}">
                            <Link to={{ pathname: path_baseurl + this.state.newsdata[2].id + '/' + encodeURIComponent(this.state.newsdata[2].title), query: {}, state: { id: this.state.newsdata[2].id } }}>
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
                                </div>
                            </Link>
                        </li>
                        <li className={_s('flexgrids-grid')} data-grid="{&quot;&lt;&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;}}">
                            <div className={_s('grid-inner-box')}>
                                <div className={_s('da-item')}>
                                    <div className={_s('da-box-content')}>
                                        <div className={_s('in')}>
                                            <h3></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={_s('flexgrids-grid')} data-grid="{&quot;&lt;&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;}}">
                            <div className={_s('grid-inner-box', 'home-spec-2')}>
                                <div className={_s('da-item')}>
                                    <div className={_s('da-box-content')}>
                                        <div className={_s('in')}>
                                            <h3></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;},&quot;2&lt;2&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;2&quot;},&quot;3&lt;&quot;:{&quot;w&quot;:&quot;3&quot;,&quot;h&quot;:&quot;3&quot;}}">
                            <Link to={{ pathname: path_baseurl + this.state.newsdata[3].id + '/' + encodeURIComponent(this.state.newsdata[3].title), query: {}, state: { id: this.state.newsdata[3].id } }}>
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
                                </div>
                            </Link>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;},&quot;2&lt;&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;2&quot;}}">
                            <Link to={{ pathname: path_baseurl + this.state.newsdata[4].id + '/' + encodeURIComponent(this.state.newsdata[4].title), query: {}, state: { id: this.state.newsdata[4].id } }}>
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
                                </div>
                            </Link>
                        </li>
                        <li className={_s('flexgrids-grid')} data-grid="{&quot;&lt;&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;2&quot;}}">
                            <div className={_s('grid-inner-box', 'home-spec-3')}>
                                <div className={_s('da-item')}>
                                    <div className={_s('da-box-content')}>
                                        <div className={_s('in')}>
                                            <h3></h3>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;}}">
                            <Link to={{ pathname: path_baseurl + this.state.newsdata[5].id + '/' + encodeURIComponent(this.state.newsdata[5].title), query: {}, state: { id: this.state.newsdata[5].id } }}>
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
                                </div>
                            </Link>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;},&quot;2&lt;&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;2&quot;}}">
                            <Link to={{ pathname: path_baseurl + this.state.newsdata[6].id + '/' + encodeURIComponent(this.state.newsdata[6].title), query: {}, state: { id: this.state.newsdata[6].id } }}>
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
                                </div>
                            </Link>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;2&quot;},&quot;2&lt;&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;3&quot;}}">
                            <Link to={{ pathname: path_baseurl + this.state.newsdata[7].id + '/' + encodeURIComponent(this.state.newsdata[7].title), query: {}, state: { id: this.state.newsdata[7].id } }}>
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
                                </div>
                            </Link>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;2&quot;},&quot;2&lt;&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;3&quot;}}">
                            <Link to={{ pathname: path_baseurl + this.state.newsdata[8].id + '/' + encodeURIComponent(this.state.newsdata[8].title), query: {}, state: { id: this.state.newsdata[8].id } }}>
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
                                </div>
                            </Link>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;2&quot;},&quot;2&lt;&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;3&quot;}}">
                            <Link to={{ pathname: path_baseurl + this.state.newsdata[9].id + '/' + encodeURIComponent(this.state.newsdata[9].title), query: {}, state: { id: this.state.newsdata[9].id } }}>
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
                                </div>
                            </Link>
                        </li>
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;}}">
                            <Link to={{ pathname: path_baseurl + this.state.newsdata[10].id + '/' + encodeURIComponent(this.state.newsdata[10].title), query: {}, state: { id: this.state.newsdata[10].id } }}>
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
                                </div>
                            </Link>
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
            ratio = window.innerWidth > 800 ? 0.3738 : 0.5625;

        sliderContent.height(sliderContent.width() * ratio + 'px');
    }

    render() {
        return (
            <div className={_s('home-slide-item')}>
                <Link to={{ pathname: this.props.data.newsUrl }}>
                    <div ref={ele=>this.sliderContent = ele} className={_s('slide-content')}>
                        <img src={this.props.data.bgUrl} onLoad={this.props.handleImgLoaded} alt="JPG" />
                    </div>
                </Link>
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
                    label: 'CHINA STARTUP',
                    title: 'LET BYGONES BE BACK',
                    desc: 'Press Repeat:An audiophile brings vintage radios back',
                    bgUrl: slide1,
                    newsUrl: '/chinastartup/articles/1467705/Press-Repeat%3A-An-audiophile-brings-vintage-radios-back'
                },
                {
                    label: 'CHINA STARTUP',
                    title: 'CARS AND PR',
                    desc: 'Car and PR:The uncharted classic road',
                    bgUrl: slide2,
                    newsUrl: '/chinastartup/articles/945501/Cars-and-PR%3A-The-uncharted-classic-road'
                },
                {
                    label: 'CHINA STARTUP',
                    title: 'SEE THROUGH SKIN',
                    desc: 'Imaging innovation makes veins visible',
                    bgUrl: slide3,
                    newsUrl: '/chinastartup/articles/1385777/Imaging-innovation-makes-veins-visible'
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
                    <HomeSlider centerImage={this.centerImage} addCenterImg={this.addCenterImg.bind(this)} />
                    {/* End Slider */}

                    {/* Main content */}
                    <HomeContent centerImage={this.centerImage} addCenterImg={this.addCenterImg.bind(this)} handleResize={this.handleResize.bind(this)} />
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