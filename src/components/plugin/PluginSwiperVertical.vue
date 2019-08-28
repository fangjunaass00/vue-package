<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" :class="color[item]" v-for="item in 10" :key="item"></div>
        </div>
    </div>
</template>
<script>
// 使用 npm install --save swiper 安装swiper
import Swiper from 'swiper';
export default {
    name: 'PluginSwiperContainer',
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
                direction: 'vertical',
                roundLengths: true,
                resistance: true,
                resistanceRatio: 0,
                on: {},
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
    width: 50vw;
    height: 20vw;
    position: relative;
    overflow: hidden;
}
.swiper-container .swiper-wrapper {
    width: 100%;
    height: auto;
    position: relative;
}
.swiper-container .swiper-slide {
    width: 100%;
    height: 20vw;
    position: relative;
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