<!--
    Created by linfengluo@gmail.com on 2017/9/8.
-->
<template>
    <span class="vb-breadcrumb__item">
        <a :href="link" class="vb-breadcrumb__link">
            <slot></slot>
        </a>
        <span class="vb-breadcrumb__separator">{{separator}}</span>
    </span>
</template>

<script>
    export default {
        props: {
            link: {
                type: String,
                default: 'javascript:;'
            }
        },
        computed: {
            separator(){
                return this.$parent.separator
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../sass/components/breadcrumb";
</style>
