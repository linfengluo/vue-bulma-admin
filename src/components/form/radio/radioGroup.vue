<!--
    Created by linfengluo@gmail.com on 2017/9/13.
-->
<template>
    <div class="control vb-radio__group"
        :class="{
            'vb-radio__groupBtn': isBtn
        }"
    >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'radioGroup',
        componentName: 'radioGroup',
        props: {
            value: [String, Number]
        },
        data() {
            return {
                selfValue: this.value,
                isBtn: false
            }
        },
        watch: {
            value(val){
                if (this.selfValue !== val) {
                    this.selfValue = val
                }
            }
        },
        mounted(){
            this.isBtn = this.$children.length > 0 && this.$children[0].$options.componentName === 'radioBtn'
        },

        methods: {
            changeSelectedValue(val){
                this.selfValue = val
                this.$emit('input', val)
                this.$emit('change', val)
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../../sass/components/form/raido/radioGroup";
</style>
