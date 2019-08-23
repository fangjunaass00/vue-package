<template>
    <div>
        <div class="title" @click="showSelect">请选择选择器种类</div>
        <SelectorAddress
            v-if="showComponentName=='SelectorAddress'"
            :data="addressData"
            @changeInput="changeInputAddress"
        ></SelectorAddress>
        <SelectorTime
            v-if="showComponentName=='SelectorTime'"
            :data="timeData"
            @changeInput="changeInputTime"
        ></SelectorTime>
    </div>
</template>

<script>
import '../../util/iosSelect/iosSelect.css';
import '../../util/iosSelect/iosSelect.js';

import SelectorTime from '../../components/plugin/PluginSelectorTime';
import SelectorAddress from '../../components/plugin/PluginSelectorAddress';

export default {
    name: 'PluginSelector',
    data: function() {
        return {
            showComponentName: 'InputParten',
            selectedList: [
                { id: '1', value: 'address-selector', name: 'SelectorAddress' },
                { id: '2', value: 'time-selector', name: 'SelectorTime' },
            ],
            addressData: {
                province: '内蒙古自治区',
                city: '呼和浩特市',
                road: '土默特左旗',
                pluginname: 'SelectorAddress',
            },
            timeData: '2023年 8月 9日',
        };
    },
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
        },
        changeInputTime: function(data) {
            this.timeData = data.value;
        },
        changeInputAddress(data) {
            this.address = data.address;
        },
    },
    components: {
        SelectorTime,
        SelectorAddress,
    },
};
</script>

<style lang="stylus" scoped></style>