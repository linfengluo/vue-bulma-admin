<!--
    Created by linfengluo@gmail.com on 2017/9/7.
-->
<template>
    <div class="vb-content" :style="'left: ' + width + 'px'">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            width: {
                type: [String, Number],
                default: 250
            }
        },
        data() {
            return {}
        },
        components: {},
        mixins: [],
        created(){
        },
        mounted(){
        },
        watch: {},
        computed: {},
        methods: {}
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../../sass/variables/variables";
.vb-content{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    padding: $space * 2;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
</style>
