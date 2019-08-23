<template>
    <div id="app page">
        <!-- <InputParten1 class="input-parten" :data="inputData" @inputOnChange="inputOnChange"></InputParten1> -->
        <ToolSelector :data="selectData" @changeInput="changeToolSelector"></ToolSelector>
        <!-- <AddressSelector class="main-page-select" :data="selectData"></AddressSelector> -->
        <router-view class="router-container" />
    </div>
</template>

<script>
import ToolSelector from './components/mainTool/ToolSelector';

export default {
    name: 'app',
    components: {
        ToolSelector,
    },
    data: function() {
        return {
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
            console.log(data.pluginData.parameter);

            this.$router.push({
                path: '/' + this.selectData.pluginData.pluginname,
                query: { name: data.pluginData.parameter },
            });
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
.router-container {
    width: 100%;
    height: calc(100vh - 30vw);
    position: absolute;
    top: 30vw;
}
</style>
