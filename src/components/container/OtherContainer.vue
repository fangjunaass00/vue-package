<template>
    <div class="center">
        <component :is="componentName"></component>
        <SampleMusicButton
            :musicdata="musicdata"
            @backgroundMusicPause="musicPause"
            @backgroundMusicPlay="musicPlay"
        ></SampleMusicButton>
    </div>
</template>

<script>
import SampleMusicButton from '../../components/sampleCode/SampleMusicButton';
export default {
    name: 'OtherContainer',
    data: function() {
        return {
            componentName: '',
            musicdata: {
                playing: true,
                visible: false,
            },
        };
    },
    methods: {
        getUrlpara: function() {
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
            var r = window.location.search.substr(1).match(reg);
            if (!!r) {
                return decodeURI(r[2]);
            }
            return null;
        },
        musicPlay() {
            this.musicdata.playing = true;
        },
        musicPause() {
            this.musicdata.playing = false;
        },
    },
    mounted: function() {
        console.log(this.$route.query);
        this.componentName = this.getUrlpara('name');
        setTimeout(() => {
            this.musicdata.visible = true;
        }, 2000);
    },
    components: { SampleMusicButton },
};
</script>

<style scoped>
.center {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
}
</style>