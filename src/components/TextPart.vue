<template>
    <div>
        <img v-for="item in list" :key="item.id" :src="item.src" alt class="img" />
    </div>
</template>

<script>
export default {
    name: 'TextPart',
    data: function() {
        return {
            list: [],
        };
    },
    created: function() {
        this.list = [];
        for (var i = 1; i < 20; i++) {
            var img = {
                src: require('../../public/imgs/enterframe/frame' + i + '.png'),
                id: i,
            };
            this.list.push(img);
        }
    },
};
</script>

<style  scoped>
.img {
    height: 10vw;
}
</style>

