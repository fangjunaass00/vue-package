<template>
    <div class="sold-dispatch-pic-content-box">
        <img src="../../../public/imgs/plus.png" class="sold-dispatch-pic-content-box-img" />
        <input
            type="file"
            accept="video/*"
            id="file"
            class="photo-input"
            @change="addNewVideo($event,data.id)"
        />
        <video class="video-show-pic" :src="data.value"></video>
    </div>
</template>
<script>
export default {
    name: 'UploadVideo',
    props: ['data'],
    data: function() {
        return {};
    },
    methods: {
        addNewVideo: function(e, id) {
            var that = this;
            var file = e.target.files[0];
            if (file.type.indexOf('video') == 0) {
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e) {
                    // 图片base64化
                    var url = this.result;
                    that.$emit('changeInput', {
                        name: 'UploadVideo',
                        value: url,
                    });
                };
            }
        },
    },
};
</script>

<style scoped>
.sold-dispatch-pic-title {
    padding-top: 3vw;
}

.sold-dispatch-pic {
    padding: 5vw;
}

.sold-dispatch-pic-content {
    width: 100%;
    padding-top: 0vw;
}

.sold-dispatch-pic-content-box {
    width: 34vw;
    height: 24vw;
    position: relative;
    border: 1px solid #000;
    display: inline-block;
    margin: 2vw;
    overflow: hidden;
}

.sold-dispatch-pic-content-box-img {
    width: 20vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

.photo-input {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    z-index: 5;
}
.photo-show-pic {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-size: cover;
}
.video-show-pic {
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}
</style>


