class BaiduStatistics {
    constructor() {
        this.id = '';
    }

    init(id = '') {
        this.id = id;
        this.log(`launch, id is ${this.id}`);
        if (!this.id) {
            this.log('id is null, launch refuse');
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
    }

    output() {
        // 输出百度统计id
        this.log(`output: id is ${this.id}`);
    }

    push(category, action = '', opt_label = '', opt_value = '') {
        if (!this.id) {
            this.log('can not push event without id, please do function init and do this again');
            return;
        }
        // 模仿百度统计的事件记录
        // http://tongji.baidu.com/open/api/more?p=guide_trackEvent
        window._hmt.push(['_trackEvent', category, action, opt_label, opt_value]);
    }

    log(txt) {
        console.log(`baidu statistics: ${txt}`);
    }
}

let _baiduStatistics = new BaiduStatistics();
export default _baiduStatistics;