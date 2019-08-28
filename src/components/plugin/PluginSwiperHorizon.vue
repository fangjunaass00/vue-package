<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" :class="color[item]" v-for="item in 10" :key="item"></div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
// 使用 npm install --save swiper 安装swiper
import Swiper from 'swiper';
export default {
    name: 'PluginSwiperHorizon',
    components: {},
    filters: {},
    props: [],
    data: function() {
        return {
            color: [
                'red',
                'blue',
                'yellow',
                'red',
                'blue',
                'yellow',
                'red',
                'blue',
                'yellow',
                'red',
                'blue',
                'yellow',
                'red',
                'blue',
                'yellow',
            ],
        };
    },
    computed: {},
    watch: {},
    created: function() {},
    mounted: function() {
        this.initSwiper();
    },
    methods: {
        initSwiper: function() {
            let that = this;
            this.mySwiper = new Swiper('.swiper-container', {
                direction: 'horizontal',
                pagination: '.swiper-pagination',
            });
        },
    },
};
</script>

<style  scoped>
.container {
    width: 100%;
    height: calc(100vh - 30vw);
    position: absolute;
    top: 30vw;
}
.swiper-container {
    width: 100vw;
    height: 20vw;
    position: relative;
    overflow: hidden;
}
.swiper-wrapper {
    min-width: 100%;
    height: 100%;
    white-space: nowrap;
}
.swiper-slide {
    display: inline-block;
    width: 100vw;
    height: 100%;
    position: relative;
    /* float: left; */
}

.red {
    background: red;
}
.blue {
    background: blue;
}
.yellow {
    background: yellow;
}
</style>