<template>
    <div class="music-part" :class="{'showEle':musicdata.visible}" :style="pageScale">
        <div
            class="music-button"
            :class="[musicdata.playing?'playing':'paused',]"
            @click="musicButtonClick"
        ></div>
    </div>
</template>

<script>
import { getWindowSize } from '../../util/rem.js';
export default {
    name: 'MusicButton',
    data: function() {
        return {
            backgrundMusicIsPlaying: true,
            pageScale: 'transform:scale(' + getWindowSize().pageScale + ')',
        };
    },
    computed: {},
    methods: {
        musicButtonClick: function() {
            if (this.musicdata.playing) {
                this.$emit('backgroundMusicPause');
            } else {
                this.$emit('backgroundMusicPlay');
            }
        },
    },
    mounted() {},
    props: ['musicdata'],
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
    transition: 0.5s;
}
.showEle {
    opacity: 1;
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
    background: url(../../../public/imgs/music-open.png) center center no-repeat;
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
    background: url(../../../public/imgs/music-open.png) center center no-repeat;
    background-size: 100% 100%;
}

.parten2 {
    background: url(../../../public/imgs/music-open.png) center center no-repeat;
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