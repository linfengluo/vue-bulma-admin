<!--
    Created by linfengluo@gmail.com on 2017/9/4.
-->
<template>
    <span class="icon"
        :class="[sizeClass, colorClass, directionsClass]"
    >
        <i :class="'fa fa-' + name"></i>
    </span>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                default: 'bug'
            },
            size: String,
            directions: String,
            color: String
        },
        computed: {
            sizeClass(){
                return this.size ? `is-${this.size}` : null
            },

            colorClass(){
                return this.color ? `has-text-${this.color}` : null
            },

            directionsClass(){
                return this.directions ? `is-${this.directions}` : null
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .icon{
        vertical-align: middle;
    }
</style>
