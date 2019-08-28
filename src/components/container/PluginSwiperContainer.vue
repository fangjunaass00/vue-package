<template>
    <div class="container">
        <SwiperVertival></SwiperVertival>

        <PluginHorizon></PluginHorizon>
    </div>
</template>

<script>
// 使用 npm install --save swiper 安装swiper
import Swiper from 'swiper';
import SwiperVertival from '../../components/plugin/PluginSwiperVertical';
import PluginHorizon from '../../components/plugin/PluginSwiperHorizon';
export default {
    name: 'PluginSwiperContainer',
    components: { SwiperVertival, PluginHorizon },
    filters: {},
    props: [],
    data: function() {
        return {};
    },
    computed: {},
    watch: {},
    created: function() {},
    mounted: function() {},
    methods: {},
};
</script>

<style  scoped>
.container {
    width: 100%;
    height: calc(100vh - 30vw);
    position: absolute;
    top: 30vw;
}
</style>