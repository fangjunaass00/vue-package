<template>
    <div class="music-part" :style="pageScale">
        <div
            class="music-button"
            :class="[sharedState.backgrundMusicIsPlaying?'playing':'paused',isparten1?'parten1':'parten2']"
            @click="musicButtonClick"
        ></div>
    </div>
</template>

<script>
const ROTATE_FPS = 1000 / 60; // 音符旋转帧率
const ROTATE_PERIOD = 1500; // 音符旋转完整旋转一次的时间

import { getWindowSize } from '../util/rem.js';
export default {
    name: 'MusicButton',
    data: function() {
        return {
            rotateAnglePerFrame:
                Math.round((360 / ROTATE_PERIOD) * 0 * 100) / 100,
            lastRotateTime: 0,
            sharedState: window.store.state,
            rotateAngle: 0,
            isparten1: true,
            pageScale: 'transform:scale(' + getWindowSize().pageScale + ')',
        };
    },
    computed: {
        rotateAngleDeg: function() {
            return `rotate(${this.rotateAngle}deg)`;
        },
    },
    methods: {
        musicButtonClick: function() {
            if (this.sharedState.backgrundMusicIsPlaying) {
                window.store.setBackgroundMusicPause();
                this.$emit('backgroundMusicPause');
            } else {
                window.store.setBackgroundMusicPlaying();
                this.$emit('backgroundMusicPlay');
            }
        },
        rotate: function(time) {
            if (time - this.lastRotateTime > ROTATE_FPS) {
                this.lastRotateTime = time;
                this.rotateAngle += this.rotateAnglePerFrame;
                if (this.rotateAngle > 360) {
                    this.rotateAngle -= 360;
                }
            }
        },
        initRotate: function() {
            let currentTime = new Date();
            if (this.sharedState.backgrundMusicIsPlaying) {
                this.rotate(currentTime);
            }
            requestAnimationFrame(this.initRotate);
        },
        init: function() {
            // requestAnimationFrame(this.initRotate);
        },
        changeParten: function(data) {
            this.isparten1 = data.value;
        },
    },
    mounted() {
        this.init();
        this.$bus.on('music-icon-change', this.changeParten);
    },
};
</script>

<style>
.music-part {
    width: 100%;
    height: 10vw;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    opacity: 0;
    transform-origin: 0 0;
}
.music-button {
    position: absolute;
    width: 14vw;
    height: 14vw;
    top: 3vw;
    left: 2vw;
    transform: translate3d(0, 0, 0);
    -webkit-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
    background: url(../../public/imgs/page1/page1-button-music.png) center
        center no-repeat;
    background-size: 100% 100%;
}
.music-last-page {
    left: 33vw;
    top: 5vw;
}

.playing {
}

.paused {
    animation-play-state: paused;
}
.parten1 {
    background: url(../../public/imgs/page1/page1-button-music.png) center
        center no-repeat;
    background-size: 100% 100%;
}

.parten2 {
    background: url(../../public/imgs/page1/page1-button-music.png) center
        center no-repeat;
    background-size: 100% 100%;
}

@keyframes rotating {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>