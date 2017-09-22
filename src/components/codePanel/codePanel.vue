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
    import vIcon from '../icon/icon.vue'
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
    @import "../../sass/variables/variables";

    .hljs{
        background: inherit;
        padding: 0 $space * 4;
    }

    .vb-codePanel{
        border: 1px solid $border;
        border-radius: $radius;
        max-width: 900px;


        &__toggle{
            padding: $space ;
            border-top: 1px solid $border;
            text-align: center;
            cursor: pointer;

            .icon{
                vertical-align: bottom;
            }
        }

        &__demo{
            padding: $space * 4;
        }

        &__code{
            margin: 0;
            transition: all .3s ease-in-out;
            text-align: left;
            overflow: hidden;
        }
    }


</style>
