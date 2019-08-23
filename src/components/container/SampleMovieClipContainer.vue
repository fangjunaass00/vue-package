<template>
    <div>
        <MovieClip
            :movieClipInfo="movieClipThunder"
            :loop="false"
            @frameEnd="frameEnd"
            ref="movie1"
        ></MovieClip>
        <div class="btn" @click="playAnimate">play</div>
    </div>
</template>
<script>
import MovieClip from '../../components/sampleCode/SampleMovieClip';
export default {
    name: 'SampleMovieClipContainer',
    components: { MovieClip },
    data: function() {
        return {
            movieClipThunder: {
                arr: [],
                time: 1000 / 30, // 间隔时间
            },
        };
    },
    mounted: function() {},
    created: function() {
        this.initMovieClipThunder();
    },
    methods: {
        initMovieClipThunder: function() {
            let ret = [];
            let baseUrl =
                'http://alicdn.herdsric.com/zybank/imgs/page3/effect1/page3-effect1_';

            for (var i = 1; i < 20; i++) {
                var img = {
                    src: require('../../../public/imgs/enterframe/frame' +
                        i +
                        '.png'),
                    id: i,
                };
                ret.push(img);
            }

            // 闪电序列帧
            this.movieClipThunder.arr = ret;
        },
        playAnimate: function() {
            // this.showThunder = true;
            this.$refs.movie1.$emit('play-clip');
        },
        frameEnd: function() {
            this.$refs.movie1.$emit('reset-clip');
        },
    },
};
</script>

<style >
.btn {
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