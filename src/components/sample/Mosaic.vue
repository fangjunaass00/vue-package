<template>
    <div class="mosi-container" ref="canvasContainer">
        <img src="../../../public/imgs/show.jpg" class="bg-img" ref="copyImg" />
        <canvas id="canvas" ref="canvasEle"></canvas>
    </div>
</template>

<script>
export default {
    name: 'Mosaic',
    data: function() {
        return {
            num: null,
            canvas: null,
            context: null,
            canvasInfo: {
                width: null,
                height: null,
            },
            colorArr: [],
            count: 0,
            speed: 1,
        };
    },
    mounted: function() {
        this.initCanvas();
    },
    methods: {
        initCanvas: function() {
            var canvasDom = this.$refs.canvasEle;
            var that = this;
            console.log(this.$refs.canvasContainer.el);
            this.canvasInfo = {
                width: this.$refs.canvasContainer.width,
                height: this.$refs.canvasContainer.height,
            };
            this.context = canvasDom.getContext('2d');
            console.log(this.canvasInfo);
            canvasDom.width = 400;
            canvasDom.height = 400;

            var aimg = new Image();
            aimg.src = require('../../../public/imgs/show.jpg');
            aimg.onload = function() {
                console.log('加载完成');
                that.draw(this);
            };
            // this.draw(this.$refs.copyImg);
        },
        draw: function(obj) {
            console.log(obj);
            this.context.drawImage(obj, 0, 0, 400, 400);

            var oImg = this.context.getImageData(0, 0, 400, 400);
            this.w = oImg.width;
            this.h = oImg.height;

            //创建一个新的ImageData对象
            var newImg = this.context.createImageData(400, 400);
            //马赛克的程度，数字越大越模糊
            this.num = 16;
            //等分画布
            var stepW = this.w / this.num;
            var stepH = this.h / this.num;
            //这里是循环画布的像素点
            for (var i = 0; i < stepH; i++) {
                for (var j = 0; j < stepW; j++) {
                    //获取一个小方格的随机颜色，这是小方格的随机位置获取的
                    var color = this.getXY(
                        oImg,
                        j * this.num + Math.floor(Math.random() * this.num),
                        i * this.num + Math.floor(Math.random() * this.num)
                    );
                    //这里是循环小方格的像素点，
                    this.colorArr.push({
                        color,
                        i,
                        j,
                        w: this.w,
                        num: this.num,
                    });

                    // mosaike(color, i, j, w, num);
                }
            }
            this.render();
        },
        getXY(obj, x, y) {
            var w = obj.width;
            var h = obj.height;
            var d = obj.data;
            var color = [];
            color[0] = obj.data[4 * (y * w + x)];
            color[1] = obj.data[4 * (y * w + x) + 1];
            color[2] = obj.data[4 * (y * w + x) + 2];
            color[3] = obj.data[4 * (y * w + x) + 3];
            return color;
        },

        setXY(obj, x, y, color) {
            var w = obj.width;
            var h = obj.height;
            var d = obj.data;
            obj.data[4 * (y * w + x)] = color[0];
            obj.data[4 * (y * w + x) + 1] = color[1];
            obj.data[4 * (y * w + x) + 2] = color[2];
            obj.data[4 * (y * w + x) + 3] = color[3];
        },
        // 画一个马赛克像素点
        mosaike(item) {
            this.context.beginPath();
            this.context.fillStyle =
                'rgba(' +
                item.color[0] +
                ',' +
                item.color[1] +
                ',' +
                item.color[2] +
                ',' +
                item.color[3] +
                ')';
            this.context.arc(
                item.j * item.num,
                item.i * item.num,
                this.num / 2,
                0,
                Math.PI * 2,
                false
            );
            this.context.fill();
        },

        // 添加一个像素到渲染数组renderArr中
        getOneblock(startX, startY) {
            this.colorArr.forEach(element => {
                if (
                    element.i < startX + 1 &&
                    element.i >= startX &&
                    element.j < startY + 1 &&
                    element.j >= startY
                ) {
                    this.renderArr.push(element);
                }
            });
        },

        // 将需要渲染的点添加到渲染数组中
        getRenderArr() {
            this.renderArr = [];
            for (var i = 0; i < Math.min(this.count, this.h / this.num); i++) {
                for (
                    var j = 0;
                    j < Math.min(this.count - i, this.w / this.num);
                    j++
                ) {
                    this.getOneblock(i, j);
                }
            }
        },
        render() {
            this.count += this.speed;

            // 计算渲染数组
            this.getRenderArr();

            // 清空canvas
            this.context.clearRect(
                0,
                0,
                this.context.canvas.width,
                this.context.canvas.height
            );
            // 到达极限后，开始负向增长
            if (this.count >= (this.h + this.w) / this.num) {
                this.speed = -this.speed;
            }
            if (this.count < 0) {
            } else {
                setTimeout(() => {
                    this.render();
                }, 100);
            }

            this.renderArr.forEach(item => {
                this.mosaike(item);
            });
        },
    },
    props: ['data'],
};
</script>

<style  scoped>
.mosi-container {
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

.bg-img {
    width: 100%;
    display: block;
    /* opacity: 0; */
}

#canvas {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
}
</style>