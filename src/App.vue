<template>
  <div id="app page">
    <InputParten1 class="input-parten" :data="inputData" @inputOnChange="inputOnChange"></InputParten1>
    <AddressSelector class="main-page-select" :data="selectData"></AddressSelector>
  </div>
</template>

<script>
import baiduStatistics from './util/baidu-statistics.js';
import navi from './util/nav-controller.js';
import { getWindowSize } from './util/rem.js';
import pageTurningManager from './util/page-turning-manager.js';

import BasePage from './components/BasePage.vue';
import MusicButton from './components/MusicButton.vue';
import PageLoading from './components/PageLoading.vue';

import InputParten1 from './components/InputParten1.vue';
import AddressSelector from './components/AddressSelector.vue';

export default {
    name: 'app',
    components: {
        BasePage,
        PageLoading,
        MusicButton,
        InputParten1,
        AddressSelector,
    },
    data: function() {
        return {
            inputData: {
                value: '你好啊',
            },
            selectData: {
                title: '请选择查看的组件',
                placeholder: '点击选择组件',
            },
        };
    },
    computed: {},
    created: function() {},
    mounted: function() {},
    methods: {
        inputOnChange: function() {
            console.log(this.inputData);
        },
    },
};
</script>

<style lang="scss">
@import url('./style/common.scss');
body {
    --rem-height: 0rem;
    --px-height: 0px;
    --circle-radius: 0px;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.common-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    background-size: cover;
}

.page1-bg {
    @extend .common-bg;
    background-image: url('../public/imgs/1.jpg');
}

.page2-bg {
    @extend .common-bg;
    background-image: url('../public/imgs/2.jpg');
}

.page3-bg {
    @extend .common-bg;
    background-image: url('../public/imgs/3.jpg');
}

.page4-bg {
    @extend .common-bg;
    background-image: url('../public/imgs/4.jpg');
}

.page-hint {
    background-color: #ffffff;
    color: #000000;
    width: 75vw;
    height: 10vw;
    font-size: 15px;
    line-height: 10vw;
    text-align: center;
}

.page-show {
    z-index: 5;
    opacity: 1;
}

.page-animate {
    animation: clipCircleIn 0.5s linear forwards;
    z-index: 10;
    opacity: 1;
}

.page-hide {
    z-index: 0;
    opacity: 0;
}

@keyframes clipCircleIn {
    0% {
        clip-path: circle(0 at 0% 100%);
    }
    100% {
        clip-path: circle(var(--circle-radius) at 0% 100%);
    }
}
</style>
