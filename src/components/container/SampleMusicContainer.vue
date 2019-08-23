<template>
    <div class="center">
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
        musicPlay() {
            this.musicdata.playing = true;
        },
        musicPause() {
            this.musicdata.playing = false;
        },
    },
    mounted: function() {
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