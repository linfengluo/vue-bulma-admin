<!--
    Created by linfengluo@gmail.com on 2017/9/13.
-->
<template>
    <label class="radio vb-radio"
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
        name: 'radio',
        componentName: 'radio',
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
@import "../../../sass/variables/_variables";

.vb-radio{
    padding-left: 20px;
    user-select: none;

    input[type="radio"]{
        cursor: pointer;
        opacity: 0;
        left: -9999px;
        outline: none!important;
        position: absolute;
    }
    &:before{
        background-color: #ffffff;
        border-radius: 100%;
        border: 2px solid $primary;
        content: "";
        display: inline-block;
        width: 16px;
        height: 16px;
        left: 0;
        position: absolute;
        transition: 0.2s ease-in-out;
        -o-transition: 0.2s ease-in-out;
        -webkit-transition: 0.2s ease-in-out;
        outline: none !important;
    }
    &.checked:after{
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        top: 4px;
        left: 4px;
        border: 4px solid;
        border-color: $primary;
        border-radius: 100%;
        transition: 0.2s ease-in-out;
        -o-transition: 0.2s ease-in-out;
        -webkit-transition: 0.2s ease-in-out;
    }

    &.disabled{
        &:before{
            border: 2px solid $grey-light;
        }
    }

    &.checked.disabled:after{
        border-color: $grey-light;
    }

    &.checked:after{
        color: #fff;
    }
}

</style>
