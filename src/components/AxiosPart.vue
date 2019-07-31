<template>
  <div>
    <p>使用npm i axios</p>
    <p>在main.js中，导入axios,并将其设置为全局变量，方便引用</p>
    <p>设置好baseUrl</p>
    <p>获取到的数据——</p>
    <p>{{data}}</p>
  </div>
</template>
<script>
var axios = require('axios');
export default {
    name: 'AxiosPart',
    data: function() {
        return {
            data: '',
        };
    },
    created: function() {
        this.$axios
            .get('/getjson', {})
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    },
};
</script>

