<!--
    Created by linfengluo@gmail.com on 2017/9/22.
-->
<template>
    <form class="vb-form"
          :class="{
            'vb-form--inline': inline
          }"
    >
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name: 'form',
        componentName: 'form',
        props: {
            labelWidth: [String, Number],
            rules: Object,
            mode: Object,
            inline: Boolean,
            labelAlign: String
        },
        data() {
            return {
                labelWidthList: [],
                localLabelWidth: null
            }
        },
        components: {},
        mixins: [],
        created(){
        },
        mounted(){
        },
        watch: {
            labelWidthList: {
                handler(val){
                    let maxWidth = Math.max.apply(null, val)
                    this.localLabelWidth = this.labelWidth ? this.labelWidth : maxWidth
                },
                deep: true
            }
        },
        computed: {},
        methods: {
            pushLabelWidth(width){
                let index = this.labelWidthList.indexOf(width)
                if (index < 0) {
                    this.labelWidthList.push(width)
                }
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
