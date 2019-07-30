<template>
  <div class="input-block">
    <div>请输入：</div>
    <div class="input-block-input">
      <input type="text" :value="data.value" @input="changeValue($event)" />
      <div>input值：{{data.value}}</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'InputParten1',
    props: ['data'],
    methods: {
        changeValue: function($event) {
            console.log('change', {
                pluginname: 'InputParten1',
                $event,
            });
            this.$emit('changeInput', {
                pluginname: 'InputParten1',
                $event,
            });
        },
    },
};
</script>

<style scoped>
.input-block {
    width: 100%;
    height: 10vw;
    background: #fff;
    display: flex;
    flex-wrap: nowrap;
}
</style>


