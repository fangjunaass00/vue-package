<template>
  <div>
    <div class="input-block">
      <div class="input-name title1">入住时间</div>
      <input class="input-input" placeholder="请输入入住时间" @click="showSelect" v-model="data.cityEx" />
    </div>
  </div>
</template>

<script>
import '../util/iosSelect/iosSelect.css';
import '../util/iosSelect/iosSelect.js';

//three中的两个辅助文件，用来支撑地区选择的数据
// import './zepto.js';
//areaData_v2需要进行修改，不然会提示data format error，修改在下面讲解

export default {
    name: 'TimeSelector',
    props: ['data'],
    data() {
        return {
            // cityEx: '2023年 8月 9日',
            now: new Date(),
        };
    },
    computed: {
        nowYear: function() {
            return this.now.getFullYear();
        },
        nowMonth: function() {
            return this.now.getMonth() + 1;
        },
        nowDate: function() {
            return this.now.getDate();
        },
    },
    methods: {
        // 数据初始化
        formatYear: function(nowYear) {
            var arr = [];
            for (var i = nowYear - 5; i <= nowYear + 5; i++) {
                arr.push({
                    id: i + '',
                    value: i + '年',
                });
            }
            return arr;
        },
        formatMonth: function() {
            var arr = [];
            for (var i = 1; i <= 12; i++) {
                arr.push({
                    id: i + '',
                    value: i + '月',
                });
            }
            return arr;
        },
        formatDate: function(count) {
            var arr = [];
            for (var i = 1; i <= count; i++) {
                arr.push({
                    id: i + '',
                    value: i + '日',
                });
            }
            return arr;
        },
        yearData: function(callback) {
            // settimeout只是模拟异步请求，真实情况可以去掉
            // setTimeout(function() {
            callback(this.formatYear(this.nowYear));
            // }, 2000)
        },
        monthData: function(year, callback) {
            // settimeout只是模拟异步请求，真实情况可以去掉
            // setTimeout(function() {
            callback(this.formatMonth());
            // }, 2000);
        },
        dateData: function(year, month, callback) {
            // settimeout只是模拟异步请求，真实情况可以去掉
            // setTimeout(function() {
            if (/^(1|3|5|7|8|10|12)$/.test(month)) {
                callback(this.formatDate(31));
            } else if (/^(4|6|9|11)$/.test(month)) {
                callback(this.formatDate(30));
            } else if (/^2$/.test(month)) {
                if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                    callback(this.formatDate(29));
                } else {
                    callback(this.formatDate(28));
                }
            } else {
                throw new Error('month is illegal');
            }
        },
        //地址显示控件点击后触发事件
        showSelect: function() {
            var iosSelect = new IosSelect(
                3,
                [this.yearData, this.monthData, this.dateData],
                {
                    title: '请选择时间',
                    itemHeight: 35,
                    relation: [1, 1], //三个初始值，省市县
                    callback: (selectOneObj, selectTwoObj, selectThreeObj) => {
                        var cityEx =
                            selectOneObj.value +
                            ' ' +
                            selectTwoObj.value +
                            ' ' +
                            selectThreeObj.value;
                        this.$emit('changeInput', {
                            pluginname: 'TimeSelector',
                            cityEx: cityEx,
                        });
                    },
                }
            );
        }, //根据地址名字转化未三级level，用以给iosSelect设置初始值
    },
};
</script>
<style scoped>
</style>

