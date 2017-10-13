<!--
    Created by linfengluo@gmail.com on 2017/10/13.
-->
<template>
    <div class="vb-pagination__total">
        共 {{total}} 条
    </div>
</template>

<script>
    export default {
        props: {
            total: [Number, String]
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
    @import "base";
.vb-pagination__total{
    margin-right: $space;
    display: inline-block;
    vertical-align: middle;
    line-height: $paginationItemHeight;
}
</style>
