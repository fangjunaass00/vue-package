<template>
  <div class="sold-dispatch-pic">
    <div class="sold-dispatch-pic-title title1">房源照片（9图）</div>
    <div class="sold-dispatch-pic-content">
      <div class="sold-dispatch-pic-content-box" v-for="item in data" v-bind:key="item.id">
        <img src="../../public/imgs/plus.png" class="sold-dispatch-pic-content-box-img" />
        <input
          type="file"
          accept="image/*"
          id="file"
          class="photo-input"
          @change="addNewPhoto($event,item.id)"
        />
        <div class="photo-show-pic" :style="item.value"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'UploadImage',
    props: ['data'],
    data: function() {
        return {
            picData: [{ id: 0, value: '' }],
        };
    },
    methods: {
        addNewPhoto: function(e, id) {
            console.log(id);
            console.log(e.target.files[0]);

            var that = this;
            var file = e.target.files[0];
            if (file.type.indexOf('image') == 0) {
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e) {
                    // 图片base64化
                    var url = this.result;
                    that.$emit('changeInput', {
                        pluginname: 'UploadImage',
                        url,
                    });
                    return;
                    that.pageInfo.picData[
                        that.pageInfo.picData.length - 1
                    ].value =
                        'background:url(' + newUrl + ');backgroundSize:cover';
                    var obj = { id: that.pageInfo.picData.length, value: '' };
                    that.pageInfo.picData.push(obj);
                };
            }

            return;
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
</style>


