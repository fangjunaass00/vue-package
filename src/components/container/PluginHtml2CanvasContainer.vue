<template>
    <div class="html-part">
        <div class="left-container" ref="imageTofile">
            <img src="../../../public/imgs/test1.jpg" class="screen-png" />
        </div>
        <PluginHtml2Canvas class="right-container" :screendom="screendom" ref="screenshoot"></PluginHtml2Canvas>
        <div class="screen-shot-btn" @click="screenShot">截图</div>
    </div>
</template>

<script>
import PluginHtml2Canvas from '../../components/plugin/PluginHtml2Canvas.vue';
export default {
    name: 'PluginHtml2CanvasContainer',
    components: { PluginHtml2Canvas },
    data: function() {
        return {
            screendom: this.$refs.imageTofile,
        };
    },
    methods: {
        screenShot: function() {
            this.$refs.screenshoot.$emit('screenshoot', {
                file: this.$refs.imageTofile,
            });
        },
    },
};
</script>

<style  scoped>
.html-part {
    width: 100%;
    height: 100%;
    position: relative;
}
.screen-png {
    width: 100%;
}
.left-container,
.right-container {
    width: 50%;
    float: left;
    overflow: hidden;
}
.screen-shot-btn {
    width: 100%;
    height: 10vw;
    float: left;
    color: #ffffff;
    background: blue;
    text-align: center;
    line-height: 10vw;
    position: fixed;
    bottom: 0;
}
</style>