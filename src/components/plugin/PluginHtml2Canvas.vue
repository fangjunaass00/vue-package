// 使用 npm install --save html2canvas  添加文件
// 在截图部位加上，然后将值通过setTimeout延迟获取到之后，传到该组件中
// 参考：https://www.cnblogs.com/shirliey/p/10647239.html
<template>
    <div>
        <img :src="screenShoot" class="screen-shoot" />
    </div>
</template>
<script>
import html2canvas from 'html2canvas';
export default {
    name: 'HtmlToCanvas',
    data: function() {
        return {
            screenShoot: '',
        };
    },
    components: { html2canvas },

    mounted() {
        // 如果页面一加载就需要生成图片,就在mounted里调用方法,给一个setTimeout,保证页面元素已存在
        // setTimeout(this.toImage, 500);

        this.$on('screenshoot', function(data) {
            this.toImage(data);
        });
    },
    props: ['screendom'],
    methods: {
        toImage(data) {
            console.log(this.screendom);
            const dom = data.file;
            html2canvas(dom, {
                // scale,
                useCORS: true,
                width: dom.offsetWidth,
                height: dom.offsetHeight,
            }).then(canvas => {
                const context = canvas.getContext('2d');
                // 【重要】关闭抗锯齿 https://segmentfault.com/a/1190000011478657
                context.mozImageSmoothingEnabled = false;
                context.webkitImageSmoothingEnabled = false;
                context.msImageSmoothingEnabled = false;
                context.imageSmoothingEnabled = false;
                //处理canvas，例如加水印
                //完成canvas
                const src64 = canvas.toDataURL();
                this.screenShoot = src64;
                // this.print2(src64, canvas, scale);
            });
        },
    },
};
</script>

<style>
.screen-shoot {
    width: 100%;
    height: 100%;
    /* opacity: 0; */
}
</style>


