/*
 * @Author: Nokey 
 * @Date: 2017-03-29 16:06:55 
 * @Last Modified by: Nokey
 * @Last Modified time: 2017-03-29 16:09:56
 */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(function($){
  /**
   * Default Configure
   * @type {Object}
   */
  $.flexgrids = {
    conf: {
      selector: '.grid',
      ratio: 1,
      delay: 300,
      definition: { '<': 1 },
      onReady: function(){},
      onUnready: function(){},
      api: false
    }, 
    constants: {
      STATUS_READY: 'READY',
      STATUS_UNREADY: 'UNREADY'
    }
  };

  function FlexGrids(container, opt){
    var 
      _me = this,
      DefinitionFormat = [],
      items, itemsNum, // every element will be runned once.
      iterateItemID, iterateLineID,
      STATUS = $.flexgrids.constants.STATUS_READY,

      gridsColNum = 0,
      gridsMatrix = [],
      gridWidth, gridHeight,
      timer,
      query, temp_o;

    // format definition from human-reading to programmer-reading
    for(query in opt.definition){
      temp_o = query.split('<');
      if(!temp_o[0]) temp_o[0] = 0;
      if(!temp_o[1]) temp_o[1] = Number.POSITIVE_INFINITY;
      DefinitionFormat.push([temp_o[0], temp_o[1], opt.definition[query]]);
    }

    $.extend(_me, {
      /**
       * [layout description]
       * @return {this} 
       */
      layout: function(){
        var 
          gridsWidth = container.parent().width(),
          i, l;

        // calculate how much columns of this grids
        for (i = 0, l = DefinitionFormat.length; i < l; i++) {
          if(gridsWidth >= DefinitionFormat[i][0] && gridsWidth <= DefinitionFormat[i][1]){
            gridsColNum = Math.max(1, DefinitionFormat[i][2]);
            break;
          }
        }

        // calculate grid's width & height
        gridWidth = Math.floor(gridsWidth / gridsColNum);
        gridHeight = Math.floor((gridsWidth / gridsColNum) * opt.ratio);
        container.css('position', 'relative');

        return _me;
      },

      reset: function(){
        iterateItemID = 0;
        iterateLineID = 0;
        gridsMatrix = [];
        container.css('min-height', 0);

        return _me;
      },

      run: function(){
        // implement onUnready() at _me.run() start
        if(STATUS === $.flexgrids.constants.STATUS_READY){
          STATUS = $.flexgrids.constants.STATUS_UNREADY;
          items = container.find(opt.selector);
          itemsNum = items.length;
          opt.onUnready(_me);
        }

        // implement onReady() at _me.run() end
        if(iterateItemID >= itemsNum){
          STATUS = $.flexgrids.constants.STATUS_READY;
          opt.onReady(_me);
          return _me;
        }

        var 
          currentItem = items.eq(iterateItemID),
          currentID,
          itemSize = _me._readItemSize(currentItem),
          needLines, nowLines,
          LOOP = true;

        // skip nosize item
        if(itemSize.w < 1 || itemSize.h < 1){
          iterateItemID++;
          return _me.run();
        }

        // 循环检测每个网格来插入元素（ every row ）
        for (currentID = iterateLineID; LOOP; currentID++) {
          // add Gridlines if there is not enough space to place this item on rest grids
          nowLines = gridsMatrix.length;
          needLines = currentID + itemSize.h;
          if(needLines > nowLines){
            _me._addGridsLines(needLines - nowLines);
          }

          // 检查当前行每个网格，有合适的空位置则插入元素（ every col ）
          for (var i = 0; i < gridsColNum; i++) {
            if(_me._checkAround(currentID, i, itemSize.w, itemSize.h)){
              _me
                ._placeItem(currentItem, currentID, i, itemSize.w, itemSize.h)
                ._updateMatrix(currentID, i, itemSize.w, itemSize.h);

              // test
              // if(iterateItemID === 2){
              //   console.log('ItemID:'+ iterateItemID +'; LineID:' + iterateLineID);
              // }

              LOOP = false;
              break;
            }
          }

          // 优化
          if(currentID === iterateLineID){
            var m, j;
            for (m = currentID; m < currentID + itemSize.h; m++) {
              for (j = 0; j < gridsColNum; j++) {
                if(!gridsMatrix[m][j]){
                  break;
                }
              }
              if(j === gridsColNum){
                iterateLineID++;
              }else{
                break;
              }
            }
          }
        }

        iterateItemID++;
        return _me.run();
      },

      _checkAround: function(row, col, w, h){
        // if the remaining grid-cols less than w, return false.
        if((gridsColNum - col) < w) return false;

        for (var i = row; i < row + h; i++) {
          for (var j = col; j < col + w; j++) {
            if(gridsMatrix[i][j]) return false;
          }
        }
        return true;
      },

      _placeItem: function(item, row, col, w, h){
        item.css({
          position: 'absolute',
          left: gridWidth * col,
          top: gridHeight * row,
          width: gridWidth * w,
          height: gridHeight * h
        });

        return _me;
      },

      _updateMatrix: function(row, col, w, h){
        for (var i = row; i < row + h; i++) {
          for (var j = col; j < col + w; j++) {
            gridsMatrix[i][j] = true;
          }
        }

        return _me;
      },

      _readItemSize: function(item){
        var 
          data = item.data('grid'),
          result = [], size = { w: 1, h: 1 },
          tempArr, range;
        
        for(range in data){
          tempArr = range.split('<');
          if(!tempArr[0]) tempArr[0] = 0;
          if(!tempArr[1]) tempArr[1] = Number.POSITIVE_INFINITY;
          result.push([tempArr[0], tempArr[1], data[range].w, data[range].h]);
        }

        for (var i = 0; i < result.length; i++) {
          if(gridsColNum >= result[i][0] && gridsColNum <= result[i][1]){
            size.w = parseInt(result[i][2]);
            size.h = parseInt(result[i][3]);
            break;
          }
        }

        return size;
      },

      _addGridsLines: function(n){
        var
          i, j,
          l = gridsMatrix.length,
          cols = gridsColNum;

        for (i = 0; i < n; i++) {
          gridsMatrix.push([]);
          for (j = 0; j < cols; j++) {
            gridsMatrix[l + i].push(false);
          }
        }
        container.css('min-height', gridsMatrix.length * gridHeight);

        return _me;
      }
    });

    $(window).on('resize', function(){
      if(timer) clearTimeout(timer);
      timer = setTimeout(function(){
        var temp_w = gridWidth;
        _me.layout();
        if(temp_w !== gridWidth){
          _me.reset().run();
        }
      }, opt.delay);
    });

    return _me.reset().layout().run();
  }

  /**
   * [flexgrids description]
   * @param  {Object} opt [custom config]
   * @return {Object}     [description]
   */
  $.fn.flexgrids = function(opt){
    var existFlexgrids = this.data('__flexgrids');
    if(existFlexgrids){
      return existFlexgrids;
    }

    opt = $.extend({}, $.flexgrids.conf, opt);
    this.each(function(){
      existFlexgrids = new FlexGrids($(this), opt);
      $(this).data('__flexgrids', existFlexgrids);
    });

    return opt.api ? existFlexgrids : this;
  }

});