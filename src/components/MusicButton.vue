<template>
  <div
    class="music-button"
    :class="[sharedState.backgrundMusicIsPlaying?'playing':'paused']"
    :style="{transform: rotateAngleDeg}"
    @click="musicButtonClick"
  ></div>
</template>

<script>
const ROTATE_FPS = 1000 / 60; // 音符旋转帧率
const ROTATE_PERIOD = 1500; // 音符旋转完整旋转一次的时间

export default {
  name: "MusicButton",
  data: function() {
    return {
      rotateAnglePerFrame:
        Math.round((360 / ROTATE_PERIOD) * ROTATE_FPS * 100) / 100,
      lastRotateTime: 0,
      sharedState: window.store.state,
      rotateAngle: 0
    };
  },
  computed: {
    rotateAngleDeg: function() {
      return `rotate(${this.rotateAngle}deg)`;
    }
  },
  methods: {
    musicButtonClick: function() {
      if (this.sharedState.backgrundMusicIsPlaying) {
        window.store.setBackgroundMusicPause();
        this.$emit("backgroundMusicPause");
      } else {
        window.store.setBackgroundMusicPlaying();
        this.$emit("backgroundMusicPlay");
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
      requestAnimationFrame(this.initRotate);
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style>
.music-button {
  position: absolute;
  z-index: 999;
  width: 50px;
  height: 50px;
  top: 20px;
  right: 20px;
}

.playing {
  background: url(../../public/imgs/music-open.png) center center no-repeat;
  background-size: 100% 100%;
}

.paused {
  background: url(../../public/imgs/music-open.png) center center no-repeat;
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