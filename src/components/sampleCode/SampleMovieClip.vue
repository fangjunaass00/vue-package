<template>
    <div class="movie-clip-container" :style="containerStyle">
        <img
            v-for="item in movieClipInfo.arr"
            :key="item.id"
            :src="item.src"
            class="frame"
            :style="{opacity: isFrameShow(item.id)}"
        />
    </div>
</template>

<script>
export default {
    name: 'MovieClip',
    data: function() {
        return {
            containerStyle: 'opacity:0',
            lastTime: null,
            frameIndex: 1,
        };
    },
    props: {
        movieClipInfo: {
            type: Object,
            default: function() {
                return {
                    arr: [
                        {
                            id: 0,
                            src: '',
                        },
                    ],
                    time: 1000 / 30, // 间隔时间
                };
            },
        },

        loop: {
            type: Boolean,
            default: true,
        },
    },
    watch: {},
    created: function() {
        this.$on('reset-clip', function() {
            this.reset();
        });
        this.$on('play-clip', function() {
            this.play();
        });
    },
    methods: {
        isFrameShow: function(index) {
            return index == this.frameIndex ? 1 : 0;
        },
        playEnterFrame: function() {
            if (this.frameIndex > this.movieClipInfo.arr.length) {
                if (this.loop) {
                    this.frameIndex = 0;
                    requestAnimationFrame(this.playEnterFrame);
                } else {
                    this.$emit('frameEnd');
                }
            } else {
                requestAnimationFrame(this.playEnterFrame);
            }

            if (!this.lastTime) {
                this.lastTime = Date.now();
                return;
            } else {
                let nowTime = Date.now();
                if (nowTime - this.lastTime > this.movieClipInfo.time) {
                    this.lastTime = nowTime;
                    this.frameIndex++;
                }
            }
        },
        play: function() {
            this.containerStyle = 'opacity:1';
            this.playEnterFrame();
        },
        reset: function() {
            this.frameIndex = 0;
        },
    },
};
</script>
<style scoped>
.movie-clip-container {
    width: 100%;
    position: absolute;
    top: 0;
}
.frame {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
}
</style>


