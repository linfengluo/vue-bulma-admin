<!--
    Created by linfengluo@gmail.com on 2017/9/12.
-->
<template>
    <label class="checkbox vb-checkbox"
           :class="{
                'checked': isChecked,
                'disabled': disabled || (isOverLength && !isChecked)
           }"
           :disabled="disabled || (isOverLength && !isChecked)"
           @click.stop.prevent="handleClick"
    >
        <input type="checkbox"
               v-if="!isInGroup"
               :checked="isChecked"
               :disabled="disabled || (isOverLength && !isChecked)"
        >
        <input type="checkbox"
               v-if="isInGroup"
               :value="selfValue"
               :checked="isChecked"
               :disabled="disabled || (isOverLength && !isChecked)"
        >
        <span v-if="$slots.default || label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
    export default {
        name: 'checkboxItem',
        componentName: 'checkboxItem',
        props: {
            label: {
                type: String,
                default: ''
            },
            value: {
                type: [String, Number, Boolean],
                default: ''
            },
            checked: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isGroup: false,
                checkboxGroup: null,
                selfValue: false
            }
        },
        mounted(){
            this.isGroup = this.isInGroup()
            this.initSelected()
        },
        computed: {
            isChecked(){
                return this.isGroup ? this.checkboxGroup.value.indexOf(this.value) > -1 : this.selfValue
            },

            isOverLength(){
                if (this.isGroup) {
                    return this.checkboxGroup.max !== 0 && this.checkboxGroup.value.length >= this.checkboxGroup.max
                } else {
                    return false
                }
            }
        },
        methods: {
            // 初始化selected
            initSelected(){
                if (this.isGroup) {
                    this.checked && this.checkboxGroup.insertSelected(this.value)
                } else {
                    if (this.checked) {
                        this.selfValue = true
                        this.$emit('change', this.selfValue)
                        this.$emit('input', this.selfValue)
                    }
                }
            },

            isInGroup(){
                let parent = this.$parent
                while (parent) {
                    if (parent.$options.componentName !== 'checkboxGroup') {
                        parent = parent.$parent
                    } else {
                        this.checkboxGroup = parent
                        return true
                    }
                }
                return false
            },

            handleClick(){
                if (this.disabled || (this.isOverLength && !this.isChecked)) {
                    return false
                } else {
                    if (this.isGroup) {
                        this.isChecked ? this.checkboxGroup.removeUnSelected(this.value) : this.checkboxGroup.insertSelected(this.value)
                    } else {
                        this.selfValue = !this.selfValue
                        this.$emit('change', this.selfValue)
                        this.$emit('input', this.selfValue)
                    }
                }
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../../sass/components/form/_checkbox";
</style>
