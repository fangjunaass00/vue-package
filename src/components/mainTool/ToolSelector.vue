<template>
    <div>
        <div class="input-block" @click="showSelect">
            <div class="input-name title1">请选择组件</div>
            <!-- <input class="input-input" :value="data.rank2" /> -->
            <div class="input-name name2">{{data.pluginName}}</div>
        </div>
    </div>
</template>

<script>
// 使用 npm i iosselect 安装插件
// 参考：https://www.npmjs.com/package/iosselect
import '../../util/iosSelect/iosSelect.css';
import '../../util/iosSelect/iosSelect.js';

import { rank1, rank2, rank3 } from '../../util/iosSelect/packageJs.js';

export default {
    props: ['data'],
    name: 'SelectorAddress',
    data() {
        return {};
    },
    methods: {
        //地址显示控件点击后触发事件
        showSelect: function() {
            //自己实现的根据地址名称获取id，代码如下
            // var levels = this.textToLevel(this.cityEx);

            var iosSelect = new IosSelect(3, [rank1, rank2, rank3], {
                title: '组件选择',
                itemHeight: 35,
                relation: [1, 1], //三个初始值，省市县
                oneLevelId: this.data.rank1,
                twoLevelId: this.data.rank2,
                threeLevelId: this.data.rank3, //地址选择点击确定后的回调
                callback: (selectOneObj, selectTwoObj, selectThreeObj) => {
                    console.log(selectThreeObj);
                    var data = {
                        rank1: selectOneObj.value,
                        rank2: selectTwoObj.value,
                        rank3: selectThreeObj.value,
                        pluginName: selectThreeObj.pluginname,
                    };
                    this.$emit('changeInput', data);
                },
            });
        }, //根据地址名字转化未三级level，用以给iosSelect设置初始值
    },
};
</script>
<style scoped>
.input-block {
    width: 100%;
    height: 30vw;
}
.input-name {
    width: 100%;
    height: 20vw;
    background: #6addd3;
    color: #fff;
    text-align: center;
    line-height: 20vw;
    font-size: 7vw;
}
.name2 {
    height: 10vw;
    line-height: 10vw;
}
</style>

