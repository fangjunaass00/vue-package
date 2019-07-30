import Vue from 'vue';
import App from './App.vue';
// eslint-disable-next-line no-unused-vars
import soundjs from './util/soundjs';
// eslint-disable-next-line no-unused-vars
import store from './util/store.js';
// eslint-disable-next-line no-unused-vars
// const vConsole = require('./util/vconsole.js');
import router from './router';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
