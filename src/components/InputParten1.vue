<template>
  <div class="input-block">
    <div>请输入：</div>
    <div class="input-block-input">
      <input type="text" :value="data.value" @change="changeValue" />
    </div>
  </div>
</template>

<script>
export default {
    name: 'InputParten1',
    props: ['data'],
    methods: {
        changeValue: function() {
            console.log('change');
            this.$emit('inputOnChange');
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


