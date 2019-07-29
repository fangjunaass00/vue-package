// 获取浏览器
let navController = {
    isIE: false,
    isAndroid: false,
    isIos: false,
    isWX: false,
    isDD: false,
    isKB: false,
    isWB: false,
    isQQSpace: false,
    isWebApp: false,
    isMac: false,
    isEdge: false,
    isQQBrowser: false,
    isMobile: false,
    isIpad: false,
    isPC: false,
    init: function () {
        let u = navigator.userAgent;
        let v = { //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            mac: u.indexOf('Mac') > -1,
            edge: u.indexOf('Edge') > -1,
            qqBrowser: u.indexOf('QQBrowser') > -1,
        };

        // let language = (navigator.browserLanguage || navigator.language).toLowerCase();

        // IE内核
        this.isIE = v.trident;
        this.isEdge = v.edge;
        this.isMac = v.mac;
        this.isQQBrowser = v.qqBrowser;
        this.isMobile = v.mobile;
        this.isIpad = v.iPad;
        this.isIos = true;
        this.isAndroid = true;
        this.isWebApp = true;


        if (v.mobile) {
            // 移动端设备细化判断是从什么浏览器打开
            let ua = u.toLowerCase(); //获取判断用的对象

            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                //在微信中打开
                this.isWX = true;
            }
            if (ua.match(/WeiBo/i) == "weibo") {
                //在新浪微博客户端打开
                this.isWB = true;
            }
            if (ua.match(/QQ/i) == "qq") {
                //在QQ空间打开
                this.isQQSpace = true;
            }
            if (ua.match(/koubeidefined/i) == "koubeidefined") {
                //在口碑打开
                this.isKB = true;
            }
            if (ua.match(/dingtalk/i) == "dingtalk") {
                //在口碑打开
                this.isDD = true;
            }
        }
    }
};

navController.init();

export default navController;
