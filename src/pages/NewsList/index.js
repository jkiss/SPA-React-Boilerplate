/*
 * @Author: Nokey 
 * @Date: 2018-03-30 16:29:13 
 * @Last Modified by:   Mr.B 
 * @Last Modified time: 2018-03-30 16:29:13 
 */
'use strict';

import React, { Component } from 'react'
import CONFIG from '../../../config'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'scrollto'
import UTILS from 'utils'

// Style
import classNames from 'classnames/bind'
import styles from './style'
let _s = classNames.bind(styles)

// res
import icon1 from './img/article-list-icon1@2x.png'

// Title
const Title = props=>{
    return (
        <div className="article-list-title-wrap">
            <h1 className={_s('list-title')}>OUR PROJECTS</h1>
            <div className={_s('icon1-wrap')}>
                <img src={icon1} alt="ICON" />
            </div>
            <p className={_s('list-desc')}>
                A peek into China's intangible cultural heritages
            </p>
        </div>
    )
}

// List Item
class ListItem extends Component{
    constructor(props) {
        super(props);
        
        let _me = this,
            dateString = moment(_me.props.newstime, moment.ISO_8601).format('YYYY-MM-DD'),
            labelColor = _me.props.speciallabelcolor,
            type, typeStyle

        switch (labelColor) {
            case '#00a0fe':
                type = 'Business'
                typeStyle = '#00a0fe'
                break;

            case '#fcb42d':
                type = 'Tech & Sci'
                typeStyle = '#fcb42d'
                break;
        }

        this.state = {
            type: type,
            typestyle: typeStyle,
            date: dateString
        }
    }

    componentWillReceiveProps(nextProps) {
        // if (!this.props.narrowScreen) {
        //     $(this.itemImg).removeClass('show');
        // }
    }

    render() {
        var _me = this,
            url_title = $.trim(_me.props.title).split(' ').join('-');

        return (
            <div className={_s('article-list-item', 'column', 'float')}>
                <a href={this.props.detailUrl}>
                    <div 
                        className={_s('head-img-wrapper')} 
                        data-ratio="0.56" 
                        ref={(item) => { this.props.handleResizeItem($(item)) }}>

                        <img 
                            ref={ele=>this.itemImg = ele} 
                            src={this.props.imgurl} 
                            alt="Head Image" 
                            onLoad={this.props.handleCenterImgLoaded} />
                    </div>
                </a>

                <div className={_s('foot-content-wrapper')}>
                    <h3>{this.props.title}</h3>

                    <i className={_s('sep-line-1')}></i>

                    <p className={_s('summary')}>
                        {this.props.summary}
                    </p>

                    {/* <i className={_s('sep-line-2')}></i> */}

                    <div className={_s('desc-wrapper')}>
                        {/* <span className={_s('news-type')} style={{ color: this.state.typestyle }} >
                            {this.state.type}
                        </span> */}

                        <span className={_s('news-date')}>
                            {/* <i className={_s('sep-line-3')}></i> */}
                            <i className={_s('icon-clock')}></i>
                            {this.props.newstime}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

// List
const List = props=>{
    let
        items = [],
        id = 0;

    if(props.listdata){
        props.listdata.forEach((item, index) => {
            items.push(
                <ListItem 
                    key={'list-item-' + id++} 
                    newstime={item.news_time} 
                    speciallabelcolor={item.speciallabelcolor} 
                    imgurl={item.pic_link} 
                    title={item.news_title} 
                    summary={item.news_content}
                    handleCenterImgLoaded={props.handleCenterImgLoaded} 
                    handleResizeItem={props.handleResizeItem} 
                    newsid={item.id} 
                    narrowScreen={props.narrowScreen}
                    detailUrl={item.news_link} />
            )
        })
    }

    return (
        <div className={_s('article-list-container', 'grid')}>
            {items}
        </div>
    )
}

/**
 *  Start Pagination
 **/
class PrevBtn extends Component{
    handleClick(e) {
        var _me = this;
        if (_me.props.num > _me.props.firstNum) {
            _me.props.handleUpdatePageNum(_me.props.num - 1);
        }
    }

    render() {
        return (
            <div className={this.props.disable ? _s('prev-btn', 'disable') : _s('prev-btn')} onClick={this.handleClick} >
                &lt;
            </div>
        );
    }
}
class NextBtn extends Component{
    handleClick(e) {
        var _me = this;
        if (_me.props.num < _me.props.lastNum) {
            _me.props.handleUpdatePageNum(_me.props.num + 1);
        }
    }

    render() {
        return (
            <div className={this.props.disable ? _s('next-btn', 'disable') : _s('next-btn')} onClick={this.handleClick} >
                &gt;
      </div>
        );
    }
}
const Ellipsis = props=>{
    return (
        <span className={_s('page-ellipsis')}>...</span>
    );
}
class PageNum extends Component{
    handleClick(e) {
        var _me = this;

        _me.props.handleUpdatePageNum(_me.props.num);
    }

    render() {
        return (
            <span className={this.props.active ? (_s('page-num', 'active')+' transition1') : (_s('page-num')+' transition1')} onClick={this.handleClick.bind(this)}>
                {this.props.num}
            </span>
        );
    }
}
class Pagination extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            loading: false,
            nowNum: this.props.nowNum
        }
    }

    handleUpdatePageNum(n) {
        var _me = this;

        if (!_me.state.loading) {
            _me.state.loading = true;
            _me.props.handlePaginate(n, () => {
                _me.setState({
                    nowNum: n
                });
                _me.state.loading = false;
            });

            // $('body').ScrollTo();
            window.scrollTo(0, 0);
        }
    }

    /**
     * [updateNum description]
     * @param  {[num]} nowNum   [description]
     * @param  {[num]} totalNum [description]
     * @param  {[num]} range    [eg: ...3456... range is 4]
     * @return {[React Doms]}   [description]
     */
    updateNum(nowNum, totalNum, range) {
        var _me = this,
            startNum = 0,
            temp = 0,
            key = 0,
            paginationDoms = [];

        if (totalNum <= range) {
            startNum = 1;
            for (temp = startNum; temp <= totalNum; temp++) {
                paginationDoms.push(<PageNum key={'pagenum' + key++} num={temp} active={nowNum === temp ? true : false} handleUpdatePageNum={_me.handleUpdatePageNum.bind(this)} />);
            }
        } else {
            // 前一页按钮
            paginationDoms.push(<PrevBtn key={'pagenum' + key++} num={nowNum} firstNum={1} disable={nowNum <= 1 ? true : false} handleUpdatePageNum={_me.handleUpdatePageNum.bind(this)} />);

            // 中间页码和省略号
            if (nowNum <= Math.ceil(range / 2)) {
                startNum = 1;

                // 中间 Range 的页码
                for (temp = startNum; temp <= range; temp++) {
                    paginationDoms.push(<PageNum key={'pagenum' + key++} num={temp} active={nowNum === temp ? true : false} handleUpdatePageNum={_me.handleUpdatePageNum.bind(this)} />);
                }

                // 后省略号
                paginationDoms.push(<Ellipsis key={'pagenum' + key++} />);

                // The last page num
                paginationDoms.push(<PageNum key={'pagenum' + key++} num={totalNum} active={false} handleUpdatePageNum={_me.handleUpdatePageNum.bind(this)} />);
            } else if (nowNum >= (totalNum - Math.floor(range / 2))) {
                startNum = totalNum - range + 1;

                // The first page num
                paginationDoms.push(<PageNum key={'pagenum' + key++} num={1} active={false} handleUpdatePageNum={_me.handleUpdatePageNum.bind(this)} />);

                // 前省略号
                paginationDoms.push(<Ellipsis key={'pagenum' + key++} />);

                // 中间 Range 的页码
                for (temp = startNum; temp <= totalNum; temp++) {
                    paginationDoms.push(<PageNum key={'pagenum' + key++} num={temp} active={nowNum === temp ? true : false} handleUpdatePageNum={_me.handleUpdatePageNum.bind(this)} />);
                }
            } else {
                startNum = nowNum - Math.floor(range / 2);

                // The first page num
                paginationDoms.push(<PageNum key={'pagenum' + key++} num={1} active={false} handleUpdatePageNum={_me.handleUpdatePageNum.bind(this)} />);

                // 前省略号
                paginationDoms.push(<Ellipsis key={'pagenum' + key++} />);

                // 中间 Range 的页码
                for (temp = startNum; temp <= (range + startNum); temp++) {
                    paginationDoms.push(<PageNum key={'pagenum' + key++} num={temp} active={nowNum === temp ? true : false} handleUpdatePageNum={_me.handleUpdatePageNum.bind(this)} />);
                }

                // 后省略号
                paginationDoms.push(<Ellipsis key={'pagenum' + key++} />);

                // The last page num
                paginationDoms.push(<PageNum key={'pagenum' + key++} num={totalNum} active={false} handleUpdatePageNum={_me.handleUpdatePageNum.bind(this)} />);
            }

            // 后一页按钮
            paginationDoms.push(<NextBtn key={'pagenum' + key++} num={nowNum} lastNum={totalNum} disable={nowNum >= totalNum ? true : false} handleUpdatePageNum={_me.handleUpdatePageNum.bind(this)} />);
        }

        return paginationDoms;
    }

    render() {
        // Logic of pagination here
        var
            nowNum = this.state.nowNum,
            totalNum = this.props.totalNum,
            range = this.props.range,
            paginationDoms = this.updateNum(nowNum, totalNum, range);

        return (
            <div className={_s('pagination-wrapper')}>
                {paginationDoms}
            </div>
        );
    }
}
// End Pagination //

// ReadMore (will show on mobile device)
class ReadMore extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            loading: false,
            nowNum: this.props.nowNum,
            noMore: false
        }
    }

    handleClick(e) {
        var _me = this,
            next_num = _me.state.nowNum + 1,
            notLastNum = _me.state.nowNum < _me.props.totalNum,
            noMore = next_num === _me.props.totalNum;

        if (!_me.state.loading && notLastNum) {
            _me.setState({
                loading: true
            });
            _me.props.handlePaginate(next_num, () => {
                _me.setState({
                    loading: false,
                    nowNum: next_num,
                    noMore: noMore
                });
            });
        }
    }

    render() {
        return (
            <div>
                <div className={this.state.loading ? (_s('list-read-more-btn')+' none') : _s('list-read-more-btn')} onClick={this.handleClick.bind(this)} >
                    {this.state.noMore ? 'END' : 'MORE'}
                </div>

                <div className={this.state.loading ? _s('list-loading-box') : (_s('list-loading-box')+'none')} ></div>
            </div>
        );
    }
}

class NewsList extends React.Component {
    constructor(props) {
        super(props);

        let narrow_screen = window.innerWidth > 500 ? false : true
        
        this.state = {
            narrowScreen: narrow_screen,
            listdata: [],
            currentPageNum: 1,
            totalPageNum: 0
        }

        this.num_per_page = 9
        this.requesting = false
    }

    componentDidMount() {
        var _me = this;

        _me.handlePaginate(_me.state.currentPageNum)

        // Resize event
        window.addEventListener('resize', this.handleResize.bind(this))

        // Scroll to top
        window.scrollTo(0, 0)

        // Analytics - gtags
        gtag('config', 'UA-66998167-8', {
            'page_path': '/priceless-culture/list'
        })
    }

    componentWillUnmount() {
        // TODO: abort ajax
        this.getCurrentPageContentAJAX.abort()

        // Unbind Resize event
        window.removeEventListener('resize', this.handleResize.bind(this))
    }

    handleResize() {
        var _me = this;

        /*
         * Judge if screen is narrow
         */
        if (window.innerWidth > 500) {
            _me.setState({
                narrowScreen: false
            });
        } else {
            _me.setState({
                narrowScreen: true
            });
        }

        /*
         * Center images
         */
        _me.props.centerImgs.forEach((e, i) => {
            UTILS.centerImage(e)
        });

        /*
         * Resize head-img-wrapper's height
         */
        _me.props.resizeItems.forEach((e, i) => {
            _me.resizeItem(e);
        });
    }

    /**
     * [addResizeItem description]
     * @param {[$DOM]} item [item is a jQuery DOM]
     */
    addResizeItem(item) {
        this.props.resizeItems.push(item);
    }
    resizeItem(item) {
        item.css('height', item.width() * item.data('ratio') + 'px');
    }
    handleResizeItem(item) {
        var _me = this;

        _me.resizeItem(item);
        _me.addResizeItem(item);
    }

    // add image which need be center to array
    addCenterImg(img) {
        this.props.centerImgs.push(img);
    }

    /**
     * [handleCenterImgLoaded invoke addCenterImg() & centerImage() , and transmit to children]
     * @param  {[type]} e [pure img dom]
     * @return {[null]}
     */
    handleCenterImgLoaded(e) {
        var _me = this,
            img = $(e.target);

        UTILS.centerImage(img)
            .addClass('transition2')
            .addClass('show');

        _me.addCenterImg(img);
    }

    handlePaginate(current_page_num, cb) {
        var _me = this,
            pageURL = CONFIG.io.all_news_list

        // request current page content
        _me.getCurrentPageContentAJAX = $.getJSON(pageURL, {
                pagenum: current_page_num
            })
            .done((json) => {
                let total_pages = Math.ceil(json.length / _me.num_per_page),
                    curr_page_data = json.slice((current_page_num-1)*_me.num_per_page, current_page_num*_me.num_per_page)

                // Set state
                if(_me.state.narrowScreen){
                    _me.setState({
                        totalPageNum: total_pages,
                        listdata: _me.state.listdata.concat(curr_page_data)
                    })
                }else{
                    _me.setState({
                        totalPageNum: total_pages,
                        listdata: curr_page_data
                    })
                }

                // callback
                cb && cb();
            }).fail((jqxhr, textStatus, err) => {
                console.log('Request Failed: ' + err + '. -> Articles.js')
            })

        // Scroll to top
        // $('body').ScrollTo();

        // Analytics
        // ga('send', {
        //     'hitType': 'pageview',
        //     'page': 'Articles-' + current_page_num
        // });
    }

    render() {
        var _me = this,
            viewStyle = _me.state.narrowScreen ? <ReadMore /> : <Pagination />;
        // console.log(_me.state.listdata);
        return (
            <div className={_s('list-box')}>
                <div className={_s('list-wrapper')}>
                    <Title />

                    <List 
                        listdata={_me.state.listdata} 
                        handleCenterImgLoaded={_me.handleCenterImgLoaded.bind(this)} 
                        handleResizeItem={_me.handleResizeItem.bind(this)} 
                        narrowScreen={_me.state.narrowScreen}
                        />

                    {
                        React.cloneElement(viewStyle, {
                            nowNum: _me.state.currentPageNum,
                            totalNum: _me.state.totalPageNum,
                            range: 5,
                            handlePaginate: _me.handlePaginate.bind(this)
                        })
                    }
                </div>
            </div>
        );
    }
}
NewsList.defaultProps = {
    centerImgs: [],
    resizeItems: []
}

export default NewsList;