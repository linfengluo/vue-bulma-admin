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
            <template v-if="!$slots.default">
                {{label}}
            </template>
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
    @import "../../../sass/variables/_variables";

    .vb-radio{

        &__btn{
            display: inline;
            padding: 0 $space * 2;
            margin: 0;

            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            vertical-align: middle;
            text-align: center;
            outline: none;
            margin: 0;
            position: relative;
            cursor: pointer;
            transition: all .3s;

            span{
                font-size: 14px;
                border-radius: 0;
                line-height: 2.2em;
            }

            &:not(:last-child){
                border-right: 1px solid $border;
            }

            &:hover{
                color: $primary;
            }

            input[type="radio"]{
                cursor: pointer;
                opacity: 0;
                left: -9999px;
                outline: none!important;
                position: absolute;
            }

            &.checked{
                background-color: $primary;
                color: $white;
            }

            &.disabled{
                &:hover{
                    color: inherit;
                }
            }

            &.checked.disabled:after{
                border-color: $grey-light;
            }
        }
    }

</style>
