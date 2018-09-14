/*
 * @Author: Nokey 
 * @Date: 2017-10-11 16:05:30 
 * @Last Modified by: Nokey
 * @Last Modified time: 2017-10-12 16:06:49
 */
'use strict';

import './loading.styl'
import 'jquery.html5loader'

class Loading extends React.Component {
    preload() {
        let _me = this,
            loading_box = $(_me.loading_box),
            loading_percent = $(_me.percent),
            pre_files = [],
            html_imgs = _.map($('body .preload-img'), (e)=>{
                let _ele = $(e)

                if(_ele.get(0).tagName.toUpperCase() === 'IMG'){
                    return _ele.attr('src')
                }else{
                    return _ele.css('background-image').split('"')[1]
                }
                
            })

        html_imgs.forEach((e) => {
            // don't preload base64 image
            !e.match(/^data:/) &&
            pre_files.push({
                type: "IMAGE",
                source: e,
                size: 2000
            });
        });

        $.html5Loader({
            filesToLoad: { 'files': pre_files },
            onBeforeLoad: () => {},
            onComplete: ()=>{
                loading_box.addClass('hide');
                
                setTimeout(() => {
                    loading_box.addClass('none');

                    setTimeout(() => {
                        $(window).trigger('GLOBAL-ACT', 
                            {type: 'LOADING', payload: {
                                loading: false
                            }}
                        );
                        $(window).trigger('GLOBAL-ACT', 
                            {type: 'START-PAGE1-ANIMATE'}
                        );
                    }, 200);
                }, 320);
            },
            onElementLoaded: (obj, elm) => {},
            onUpdate: (percentage) => {
                // console.log(percentage);
                // p_bar.css('width', percentage + '%');
                // p_txt.text(percentage + '%');
                loading_percent.text(percentage + '%');
            }
      });

    }

    render() {
        return ( 
            <section 
                ref={_ele => this.loading_box = _ele} 
                className="loading__wrapper transition">

                <div 
                    ref={_ele => this.percent = _ele}
                    id="loading_percent" 
                    className="loading-percent abs">
                    0%
                </div>
            </section>
        );
    }
}

export default Loading;