<!--
    Created by linfengluo@gmail.com on 2017/9/13.
-->
<template>
    <label class="radio vb-radio__btn"
           :class="{
                'checked': selfValue === label,
                'disabled': disabled
           }"
           :disabled="disabled"
    >
        <input type="radio"
               :name="name"
               :checked="checked"
               :value="label"
               v-model="selfValue"
               :disabled="disabled">
        <span v-if="$slots.default || label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
    export default {
        name: 'radioBtn',
        componentName: 'radioBtn',
        props: {
            name: String,
            checked: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            label: String,
            value: String
        },
        data() {
            return {
                radioGroup: null,
                isGroup: false
            }
        },
        mounted(){
            this.isGroup = this.isInGroup()
        },
        computed: {
            selfValue: {
                get() {
                    return this.isGroup ? this.radioGroup.selfValue : this.value
                },

                set(val) {
                    if (this.isGroup) {
                        this.radioGroup.changeSelectedValue(val)
                    } else {
                        this.$emit('input', val)
                        this.$emit('change', val)
                    }
                }
            }
        },
        methods: {
            isInGroup(){
                let parent = this.$parent
                while (parent) {
                    if (parent.$options.componentName !== 'radioGroup') {
                        parent = parent.$parent
                    } else {
                        this.radioGroup = parent
                        return true
                    }
                }
                return false
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../../sass/components/form/raido/radioBtn";
</style>
