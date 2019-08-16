import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 注册微信分享
import WXConfig from './util/wechat-share';
Vue.prototype.WXConfig = WXConfig;

// 总线系统
import VueBus from './util/vue-bus';
Vue.use(VueBus);

import axios from 'axios';
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://47.99.166.160:83/';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
