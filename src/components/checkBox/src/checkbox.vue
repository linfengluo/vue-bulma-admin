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
               :name="name"
               :disabled="disabled || (isOverLength && !isChecked)"
        >
        <input type="checkbox"
               v-if="isInGroup"
               :value="selfValue"
               :checked="isChecked"
               :name="name"
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
        name: 'vb-checkbox',
        componentName: 'vb-checkbox',
        props: {
            label: {
                type: [String, Number, Boolean],
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
            },
            name: {
                type: String,
                default: ''
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
                return this.isGroup ? this.checkboxGroup.value.indexOf(this.label) > -1 : this.selfValue
            },

            isOverLength(){
                if (this.isGroup) {
                    return this.checkboxGroup.max !== 0 && this.checkboxGroup.value.length >= this.checkboxGroup.max
                } else {
                    return false
                }
            }
        },
        watch: {
            value(val){
                if (!this.isGroup) {
                    this.selfValue = val
                }
            }
        },
        methods: {
            // 初始化selected
            initSelected(){
                if (this.isGroup) {
                    this.checked && this.checkboxGroup.insertSelected(this.label)
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
                    if (parent.$options.componentName !== 'vb-checkboxGroup') {
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
                        this.isChecked ? this.checkboxGroup.removeUnSelected(this.label) : this.checkboxGroup.insertSelected(this.label)
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
    @import "../../../sass/variables/_variables";
    .vb-checkbox{
        padding-left: 20px;
        min-height: 16px;
        user-select: none;

        &__group{
            .vb-checkbox{
                &:not(:last-child){
                    margin-right: $space * 2;
                }
            }

        }

        input[type="checkbox"]{
            cursor: pointer;
            opacity: 0;
            left: -9999px;
            outline: none!important;
            position: absolute;
        }
        &:before{
            background-color: #ffffff;
            border-radius: $radius;
            border: 1px solid gainsboro;
            content: "";
            display: inline-block;
            width: 16px;
            height: 16px;
            left: 0;
            top: 0px;
            position: absolute;
            transition: 0.1s ease-in-out;
            outline: none !important;
        }
        &.checked:after{
            font: normal normal normal 14px/1 FontAwesome;
            content: "\f00c";
            color: #7a7d84;
            display: inline-block;
            font-size: 11px;
            height: 16px;
            left: 0;
            padding-left: 2px;
            position: absolute;
            top: 2px;
            width: 16px;
            transition: 0.1s ease-in-out;
            -o-transition: 0.1s ease-in-out;
            -webkit-transition: 0.1s ease-in-out;
        }
        &.checked:before{
            background-color: $primary;
            border-color: $primary;
        }
        &.checked.disabled:before{
            background-color: $grey-light;
            border-color: $grey-light;
        }
        &.checked:after{
            color: #fff;
        }

    }
</style>
