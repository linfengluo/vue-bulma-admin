<!--
    Created by linfengluo@gmail.com on 2017/9/7.
-->
<template>
    <div class="vb-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'vb-content',
        componentName: 'vb-content',
        props: {
            width: {
                type: [String, Number],
                default: 250
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../../../sass/variables/_variables";
.vb-content{
    padding: $space * 2 $space * 4;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
</style>
