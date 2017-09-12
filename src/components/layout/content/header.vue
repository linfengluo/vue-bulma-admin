<!--
    Created by linfengluo@gmail.com on 2017/9/7.
-->
<template>
    <div class="vb__flex vb__flex--around vb-header">
        <div class="vb__flex--item">
            <slot></slot>
        </div>

        <div class="vb__flex--item is-clearfix">
            <div class="is-pulled-right">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
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
.vb-header{
    height: $header-height;
    line-height: $header-height;
    &--center{
        text-align: center;
    }
}
</style>
