// 使用 npm install --save jweixin-npm 安装jdk
// 在main.js中完成注册，然后在任意地方调用wxShowMenu即可
import axios from 'axios';
import wx from 'jweixin-npm';
export default {
    wxShowMenu: function() {
        var postdata = { url: window.location.href };
        console.log(postdata);
        axios
            .get(
                // 'https://univadis.herdsric.com/univadis-2019/getJsSignatureJson.do',
                'http://univadis.herdsric.com/univadis-2019/getJsSignatureJson.do',
                { params: postdata }
            )
            .then(function(res) {
                console.log('wechat start');
                var shareData = {
                    title: '来这里，帮你圈出学习重点',
                    content: '99归医，相伴9载，更懂医者心',
                    img:
                        'http://alicdn.herdsric.com/univadis/univadis-question/imgs/share.png',
                    link: '',
                };
                var data = res.data.data;
                console.log(data);
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: data.appId, // 必填，公众号的唯一标识
                    timestamp: data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: data.noncestr, // 必填，生成签名的随机串
                    signature: data.signature, // 必填，签名，见附录1
                    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
                });
                wx.ready(function() {
                    //分享到朋友圈
                    wx.onMenuShareTimeline({
                        title: shareData.title, // 分享标题
                        desc: shareData.content, //分享描述
                        link: window.location.href, // 分享链接
                        imgUrl: shareData.img, // 分享图标
                    });
                    //分享给朋友
                    wx.onMenuShareAppMessage({
                        title: shareData.title, // 分享标题
                        desc: shareData.content, //分享描述
                        link: window.location.href, // 分享链接
                        imgUrl: shareData.img, // 分享图标
                    });
                });
            });
    },
};
