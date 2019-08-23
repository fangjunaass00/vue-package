<template>
    <div class="center">
        <component :is="componentName"></component>
    </div>
</template>

<script>
export default {
    name: 'OtherContainer',
    data: function() {
        return {
            componentName: '',
        };
    },
    methods: {
        getUrlpara: function() {
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
            var r = window.location.search.substr(1).match(reg);
            if (!!r) {
                return decodeURI(r[2]);
            }
            return null;
        },
    },
    mounted: function() {
        console.log(this.$route.params);
        this.componentName = this.getUrlpara('name');
    },
};
</script>

<style scoped>
.center {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
}
</style>