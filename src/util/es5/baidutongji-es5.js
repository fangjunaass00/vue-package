var Tongji = function () {
    this.tongjiid = '';
};

// 公共的方法放到prototype里，以便于以后继承
Tongji.prototype = {
    init: function (id) {
        this.tongjiid = id;
        if (!this.tongjiid) {
            console.log('baidutongji id is null, baidutongji cant launch without id');
            return;
        }

        window._hmt = window._hmt || [];
        (function () {
            var hm = document.createElement("script");
            // hm.src = "//hm.baidu.com/hm.js?3729a1a76cb88da875455309d395b710";
            hm.src = "//hm.baidu.com/hm.js?" + id;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    },

    output: function () {
        console.log('baidutongji output: id is ' + this.tongjiid);
    },

    push: function (category, action, opt_label, opt_value) {
        // 这里给默认值的写法要特别小心，因为当默认值为bool值时，下方的写法是错误的。
        action = action || '';
        opt_label = opt_label || '';
        opt_value = opt_value || '';

        if (!this.tongjiid) {
            console.log('baidutongji id is null, baidutongji cant push without id, please do function init and do this again');
            return;
        }
        // 模仿百度统计的事件记录
        // http://tongji.baidu.com/open/api/more?p=guide_trackEvent
        window._hmt.push(['_trackEvent', category, action, opt_label, opt_value]);
    }
};

var tj = new Tongji();
export default tj;