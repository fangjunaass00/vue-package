<template>
    <div>
        <p>使用npm i axios 安装</p>
        <p>下列方法直接进行http请求</p>
    </div>
</template>
<script>
import axiosFun from '../../util/axios-interface';
// var axios = require('axios');
export default {
    name: 'AxiosPart',
    data: function() {
        return {
            data: '',
        };
    },
    created: function() {
        axiosFun('getUserInfo', data => {
            var result = data.data.data;
            console.log(data, result);
        });
    },
};
</script>

