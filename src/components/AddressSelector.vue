<template>
  <div>
    <!-- <div class="rightList" @click="showSelect">
      <input placeholder="请选择地址" v-model="cityEx" />
    </div>-->
    <div class="input-block">
      <div class="input-name title1">{{data.title}}</div>
      <!-- <input
        class="input-input"
        :placeholder="data.placeholder"
        @click="showSelect"
        v-model="cityEx"
      />-->
      <div class="input-input" :placeholder="data.placeholder" @click="showSelect">{{data.cityEx}}</div>
    </div>
  </div>
</template>

<script>
// 使用 npm i iosselect 安装插件
// 参考：https://www.npmjs.com/package/iosselect
import '../util/iosSelect/iosSelect.css';
import '../util/iosSelect/iosSelect.js';

//three中的两个辅助文件，用来支撑地区选择的数据
// import './zepto.js';
//areaData_v2需要进行修改，不然会提示data format error，修改在下面讲解
import {
    iosProvinces,
    iosCitys,
    iosCountys,
} from '../util/iosSelect/areaData_v2.js';

export default {
    props: ['data'],
    name: 'AddressSelector',
    data() {
        return {
            // cityEx: '内蒙古自治区 呼和浩特市 土默特左旗',
        };
    },
    methods: {
        //地址显示控件点击后触发事件
        showSelect: function() {
            //自己实现的根据地址名称获取id，代码如下
            var levels = this.textToLevel(this.data.cityEx);

            var iosSelect = new IosSelect(
                3,
                [iosProvinces, iosCitys, iosCountys],
                {
                    title: '地址选择',
                    itemHeight: 35,
                    relation: [1, 1], //三个初始值，省市县
                    oneLevelId: levels[0],
                    twoLevelId: levels[1],
                    threeLevelId: levels[2], //地址选择点击确定后的回调
                    callback: (selectOneObj, selectTwoObj, selectThreeObj) => {
                        var cityEx =
                            selectOneObj.value +
                            ' ' +
                            selectTwoObj.value +
                            ' ' +
                            selectThreeObj.value;
                        this.$emit('changeInput', {
                            pluginname: 'AddressSelector',
                            cityEx: cityEx,
                        });
                    },
                }
            );
        }, //根据地址名字转化未三级level，用以给iosSelect设置初始值
        textToLevel: function(text) {
            var arr = [];

            if (text) {
                var objs = text.split(' ');

                if (objs[0]) {
                    iosProvinces.forEach((item, index) => {
                        if (item.value == objs[0]) {
                            arr.push(item.id);
                        }
                    });
                }

                if (objs[1]) {
                    iosCitys.forEach((item, index) => {
                        if (item.value == objs[1]) {
                            arr.push(item.id);
                        }
                    });
                }

                if (objs[2]) {
                    iosCountys.forEach((item, index) => {
                        if (item.value == objs[2]) {
                            arr.push(item.id);
                        }
                    });
                }
            }

            return arr;
        },
    },
};
</script>
<style scoped>
</style>

