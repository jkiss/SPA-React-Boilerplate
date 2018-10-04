/*
 * @Author: Nokey 
 * @Date: 2018-09-27 13:47:44 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-09-27 14:48:18
 */
'use strict'; 

import { Component } from 'react'
import 'flexgrids'
import 'hoverdir'
import UTILS from 'utils'

// redux
import { connect } from 'react-redux'

// style
import classNames from 'classnames/bind'
import styles from './css'
let _s = classNames.bind(styles)

// image
import img_logo from './img/f-logo.png'

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

    }

    componentDidMount() {
        var _me = this

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
        })

        // Analytics
        // ga('send', {
        //     'hitType': 'pageview',
        //     'page': '/Home'
        // });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('HomeContent update: ', this.props.items)
        this.setHomeNewsData(this.props.items)
    }

    setHomeNewsData(data) {
        let _me = this,
            newsDoms = $('.news-one')

        data.forEach((e, i) => {
            let news_dom = newsDoms.eq(i)
            // set news bg image
            let newsBgDom = news_dom.find('.'+_s('news-bg'))

            let img = new Image()
            img.src = e.pic
            img.onload = ()=>{
                newsBgDom
                    .css('background-image', `url(${e.pic})`)
                    .addClass('transition2')
                    .addClass(_s('show'))
            }

            // newsBgDom.on('load', function(){
            //     let img = $(this)

            //     UTILS.centerImage(img)
            //         .addClass('transition2')
            //         .addClass(_s('show'))

            //     _me.props.addCenterImg(img)
            // })

            // set news title
            news_dom.find('.news-title').text(e.title)

            // set sub title
            news_dom.find('.'+_s('sub-title-box')).text(e.sub_title)

            // set news url
            news_dom.find('a').attr('href', e.news_url)
        })
    }

    render() {
        return (
            <div id="home_content" className={_s('home-content')}>
                <div className="box flexgrids-main-content">
                    <ul className="vanilla flexgrids-container" id="flexgrids_container">
                        <li className={_s('flexgrids-grid')+' news-one'} data-grid="{&quot;&lt;1&quot;:{&quot;w&quot;:&quot;1&quot;,&quot;h&quot;:&quot;1&quot;},&quot;2&lt;&quot;:{&quot;w&quot;:&quot;2&quot;,&quot;h&quot;:&quot;2&quot;}}">
                            <a target="_blank">
                                <div className={_s('grid-inner-box')}>
                                    {/* news bg */}
                                    <div className={_s('news-bg')}></div>

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
                                    <div className={_s('news-bg')}></div>

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
                                    <div className={_s('news-bg')}></div>

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
                                    <div className={_s('news-bg')}></div>

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
                                    <div className={_s('news-bg')}></div>

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
                                    <div className={_s('news-bg')}></div>

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
                                    <div className={_s('news-bg')}></div>

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
                                    <div className={_s('news-bg')}></div>

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
                                    <div className={_s('news-bg')}></div>

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
                                    <div className={_s('news-bg')}></div>

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
                                    <div className={_s('news-bg')}></div>

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

const mapStateToProps = state => ({
    items: state.fetchHomeNews.items
})

export default connect(mapStateToProps)(HomeContent)