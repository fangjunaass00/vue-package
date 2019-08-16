<template>
    <div id="app page">
        <!-- <InputParten1 class="input-parten" :data="inputData" @inputOnChange="inputOnChange"></InputParten1> -->
        <ToolSelector :data="selectData" @changeInput="changeToolSelector"></ToolSelector>
        <!-- <AddressSelector class="main-page-select" :data="selectData"></AddressSelector> -->
        <router-view :data="inputDataList[selectData.pluginName]" @changeInput="changeValue" />
        <!-- <component
      :is="selectData.pluginName"
      :data="inputDataList[selectData.pluginName]"
      @changeInput="changeValue"
        ></component>-->
    </div>
</template>

<script>
import ToolSelector from './components/mainTool/ToolSelector';

import InputParten1 from './components/InputParten1.vue';
import SelectorAddress from './components/SelectorAddress.vue';

export default {
    name: 'app',
    components: {
        InputParten1,
        SelectorAddress,
        ToolSelector,
    },
    data: function() {
        return {
            inputDataList: {
                InputParten1: {
                    value: '你好啊',
                },
                SelectorAddress: {
                    cityEx: '内蒙古自治区 呼和浩特市 土默特左旗',
                    pluginname: 'SelectorAddress',
                },
                SelectorTime: {
                    cityEx: '2018年 1月 1日',
                    pluginname: 'SelectorTime',
                },
                UploadImage: [{ id: 0, value: '' }],
                UploadVideo: [{ id: 0, value: '' }],
            },

            selectData: {
                title: '请选择查看的组件',
                placeholder: '点击选择组件',
                rank1: '参考类',
                rank2: 'InputParten1',
                rank3: 'input组件',
                pluginName: this.$route.name,
            },
            selectInputData: {},
        };
    },
    computed: {},
    created: function() {
        this.WXConfig.wxShowMenu();
    },
    mounted: function() {},
    methods: {
        inputOnChange: function() {
            console.log(this.inputData);
        },
        changeToolSelector: function(data) {
            this.selectData = data;
            this.$router.push({ path: '/' + this.selectData.pluginName });
        },
        changeValue: function(data) {
            console.log(data);
            console.log(this.inputDataList);
            switch (data.pluginname) {
                case 'InputParten1':
                    this.inputDataList.InputParten1.value =
                        data.$event.target.value;
                    break;
                case 'SelectorAddress':
                    console.log(this.inputDataList.SelectorAddress.cityEx);
                    this.inputDataList.SelectorAddress.cityEx = data.cityEx;
                    break;
                case 'SelectorTime':
                    this.inputDataList.SelectorTime.cityEx = data.cityEx;
                    break;

                case 'UploadImage':
                    this.inputDataList.UploadImage[
                        this.inputDataList.UploadImage.length - 1
                    ].value =
                        'background:url(' + data.url + ');backgroundSize:cover';
                    var obj = {
                        id: this.inputDataList.UploadImage.length,
                        value: '',
                    };
                    this.inputDataList.UploadImage.push(obj);
                    break;
                case 'UploadVideo':
                    this.inputDataList.UploadVideo[
                        this.inputDataList.UploadVideo.length - 1
                    ].value = data.url;
                    var obj = {
                        id: this.inputDataList.UploadVideo.length,
                        value: '',
                    };
                    this.inputDataList.UploadVideo.push(obj);
                    break;
            }
        },
    },
};
</script>

<style lang="scss">
@import url('./style/common.scss');
body {
    --rem-height: 0rem;
    --px-height: 0px;
    --circle-radius: 0px;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
