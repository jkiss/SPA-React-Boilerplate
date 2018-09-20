/*
 * @Author: Mr.B 
 * @Date: 2018-03-03 17:55:47 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-03-09 14:49:47
 */
'use strict';

function setShareData(shareData){
	//朋友圈
	wx.onMenuShareTimeline({
		title: shareData.title,
		link: shareData.site_link,
		imgUrl: shareData.img_url,
		success: function (){ 
			console.log("timeline");
			shareData.success && shareData.success();
		},
		cancel: function (){
			console.log("timeline");
			shareData.cancel && shareData.cancel();
		}
	});
	//好友
	wx.onMenuShareAppMessage({
		title: shareData.title,
		desc: shareData.desc,
		link: shareData.site_link, 
		imgUrl: shareData.img_url,
		type: '', // 分享类型,music、video或link，不填默认为link
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		success: function (){ 
			console.log("message");
			shareData.success && shareData.success();
		},
		cancel: function (){
			console.log("message");
			shareData.cancel && shareData.cancel();
		}
	});
}

function setWxShare(shareData){
	// init
	wx.ready(()=>{
		setShareData(shareData)
	})

	// request signature
	$.ajax({
		type: 'GET',
		url: 'https://wechat.cgtn.com/socialweb/social/weixin/getKeys.do?url=' + encodeURIComponent(location.href.split('#')[0]),
		contentType: 'application/json',
		dataType: 'json',
		success: function(data){
			wx.config({
				debug: false,
				appId: 'wxd61ff47456d31b8e', // 必填，公众号的唯一标识
				timestamp: data.data.timestamp, // 必填，生成签名的时间戳
				nonceStr: data.data.nonceStr, // 必填，生成签名的随机串
				signature: data.data.signature,// 必填，签名，见附录1
				jsApiList: ["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
			});
		},
		fail: function(e){
			console.error('Get jssdk api fail!!!')
		}
	})
}

export { setWxShare }
