<!--
    Created by linfengluo@gmail.com on 2017/9/8.
-->
<template>
    <div class="vb-codePanel">
        <div class="vb-codePanel__demo">
            <slot></slot>
        </div>

        <div class="vb-codePanel__code"
             :style="'height: ' + pannelHeight + 'px'"
             ref="codeWrap"
        >
            <pre v-highlightjs><slot name="code"></slot></pre>
        </div>
        <div class="vb-codePanel__toggle" @click="togglePanel">
            <vIcon :name="icon" class="has-text-success"></vIcon>
            <span v-text="tips" class="has-text-success"></span>
        </div>
    </div>
</template>

<script>
    import vIcon from '../../elements/icon.vue'
    export default {
        data(){
            return {
                isOpen: false,
                codeHeight: 0,
                pannelHeight: 0
            }
        },
        mounted(){
            this.codeHeight = this.$refs.codeWrap.scrollHeight
        },
        computed: {
            tips(){
                return this.isOpen ? '隐藏代码' : '显示代码'
            },
            icon(){
                return this.isOpen ? 'angle-double-up' : 'angle-double-down'
            }
        },
        components: {
            vIcon
        },
        methods: {
            togglePanel(){
                this.isOpen = !this.isOpen
                this.pannelHeight = this.isOpen ? this.codeHeight : 0
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../sass/components/codepanel";

</style>
