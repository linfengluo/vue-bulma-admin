<!--
    Created by linfengluo@gmail.com on 2017/9/6.
-->
<template>
    <div class="vb-menu__group"
         :class="{
            'is-open': isOpen
         }"
         :style="'height:' + realHeight +'px'"
         ref="menuGroup">
        <div class="vb-menu__subtitle"
             v-if="title !== ''"
             v-text="title"
        >
        </div>
        <slot></slot>
    </div>
</template>

<script>
    import MenuMixins from './mixins'
    export default {
        name: 'vb-navmenuGroup',
        componentName: 'vb-navmenuGroup',
        props: {
            title: {
                type: String,
                default: ''
            },
            index: {
                type: [String, Number],
                default: '-1'
            },
            currentOpened: {
                type: [Array],
                default: 0
            }
        },
        mixins: [MenuMixins],
        mounted(){
            this.containerHeight = this.getScrollHeight()
        },
        computed: {
            isOpen(){
                return this.currentOpened.indexOf(this.index) > -1
            },

            realHeight(){
                return this.isOpen ? this.containerHeight : 0
            }
        },
        methods: {
            getScrollHeight(){
                return this.$refs.menuGroup.scrollHeight
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
