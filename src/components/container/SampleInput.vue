<template>
    <div>
        <div class="title" @click="showSelect">请选择input种类</div>
        <InputParten
            v-if="showComponentName=='InputParten'"
            :data="InputParten1"
            @changeInput="changeInputEvent"
        ></InputParten>
    </div>
</template>

<script>
import '../../util/iosSelect/iosSelect.css';
import '../../util/iosSelect/iosSelect.js';

import InputParten from '../../components/sampleCode/SampleInputParten';
export default {
    name: 'PluginSelector',
    data: function() {
        return {
            selectedList: [
                { id: '1', value: 'input1', name: 'InputParten' },
                { id: '2', value: 'input1', name: 'InputParten' },
                { id: '3', value: 'input1', name: 'InputParten' },
            ],
            InputParten1: {
                value: '你好啊',
            },
            showComponentName: 'InputParten',
        };
    },
    components: { InputParten },
    methods: {
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

        changeInputEvent: function(data) {
            this.InputParten1.value = data.$event.target.value;
        },
    },
};
</script>

<style lang="stylus" scoped></style>