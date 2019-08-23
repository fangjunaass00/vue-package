<template>
    <div>
        <div class="title" @click="showSelect">请选择上传种类</div>
        <!-- <UploadImage
            v-if="showComponentName=='UploadImage'"
            :data="UploadImage"
            @changeInput="changeImage"
        ></UploadImage>-->
        <div class="sold-dispatch-pic" v-if="showComponentName=='UploadImage'">
            <div class="sold-dispatch-pic-title title1">房源照片（9图）</div>
            <div class="sold-dispatch-pic-content">
                <UploadImage
                    v-for="item in picdata.list"
                    :key="item.id"
                    :data="item"
                    :name="picdata.name"
                    @changeInput="addNewPhoto"
                ></UploadImage>
            </div>
        </div>
        <UploadVideo
            v-if="showComponentName=='UploadVideo'"
            :data="UploadVideo"
            @changeInput="changeImage"
        ></UploadVideo>
    </div>
</template>

<script>
import '../../util/iosSelect/iosSelect.css';
import '../../util/iosSelect/iosSelect.js';

import UploadImage from '../../components/sampleCode/SampleUploadImage';
import UploadVideo from '../../components/sampleCode/SampleUploadVideo';
export default {
    name: 'PluginSelector',
    data: function() {
        return {
            selectedList: [
                { id: '1', value: '图片上传', name: 'UploadImage' },
                { id: '2', value: '视频上传', name: 'UploadVideo' },
                { id: '3', value: 'input1', name: 'InputParten' },
            ],
            picdata: { name: 'uploadImage', list: [{ id: 0, value: '' }] },
            UploadVideo: [{ id: 0, value: '' }],
            showComponentName: 'UploadImage',
        };
    },
    components: { UploadImage, UploadVideo },
    methods: {
        addNewPhoto: function(data) {
            this.picdata.list[this.picdata.list.length - 1].value =
                'background:url(' + data.value + ');backgroundSize:cover';
            var obj = { id: this.picdata.length, value: '' };
            this.picdata.list.push(obj);
        },
        //地址显示控件点击后触发事件
        showSelect: function() {
            //自己实现的根据地址名称获取id，代码如下
            var that = this;

            var iosSelect = new IosSelect(1, [this.selectedList], {
                title: '请选择选择器',
                itemHeight: 35,
                // relation: [1], //三个初始值，省市县
                // oneLevelId: '10000',
                callback: function(data) {
                    // that.$bus.emit('selectone', {
                    //     name: that.data.name,
                    //     value: data,
                    // });
                    that.showComponentName = data.name;
                    console.log(data);
                },
            });
        }, //根据地址名字转化未三级level，用以给iosSelect设置初始值

        changeImage: function(data) {
            this.UploadImage[this.UploadImage.length - 1].value =
                'background:url(' + data.url + ');backgroundSize:cover';
            var obj = {
                id: this.UploadImage.length,
                value: '',
            };
            this.UploadImage.push(obj);
        },
    },
};
</script>

<style lang="stylus" scoped></style>