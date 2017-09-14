<!--
    Created by linfengluo@gmail.com on 2017/9/14.
-->
<template>
    <label class="vb-switch"
           :disabled="disabled">
        <input type="checkbox"
               v-model="selfValue"
               :name="name"
               @change="handleChange"
               :disabled="disabled">
        <span class="vb-switch__wrap"
              ref="wrap"
              :class="{
                      'vb-switch__hasText': hasText,
                      'vb-switch__checked': isChecked,
                      'disabled': disabled
              }"
        >
            <span v-text="isChecked ? onText : offText"
                  class="vb-switch__text"
                  :class="{
                      'disabled': disabled
                  }"
            ></span>
            <span class="vb-switch__btn"
                  :class="{
                        'checked': isChecked,
                        'hasText': hasText
                  }"
            ></span>
        </span>

    </label>
</template>

<script>
    export default {
        props: {
            value: {
                type: [Boolean, String, Number],
                default: false
            },
            onText: {
                type: String,
                default: ''
            },
            offText: {
                type: String,
                default: ''
            },
            onValue: {
                type: [Boolean, String, Number],
                default: true
            },
            offValue: {
                type: [Boolean, String, Number],
                default: false
            },
            onColor: {
                type: String,
                default: ''
            },
            offColor: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        mounted(){
            if (this.onColor || this.offColor) {
                this.setBackgroundColor()
            }
        },
        computed: {
            hasText(){
                return this.onText || this.offText
            },

            isChecked(){
                return this.selfValue
            },

            isDiyValue(){
                return this.onValue === true || this.offValue === false
            },
            selfValue: {
                get() {
                    return this.value === this.onValue
                },

                set(val) {
                    let targetValue = val ? this.onValue : this.offValue
                    this.$emit('input', targetValue)
                }
            }
        },
        watch: {
            selfValue(){
                if (this.onColor || this.offColor) {
                    this.setBackgroundColor()
                }
            }
        },
        methods: {
            handleChange(event) {
                this.$emit('change', event.currentTarget.checked)
            },

            setBackgroundColor() {
                let newColor = this.value ? this.onColor : this.offColor
                this.$refs.wrap.style.borderColor = newColor
                this.$refs.wrap.style.backgroundColor = newColor
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../../sass/variables/variables";
.vb-switch{
    display: inline-block;
    position: relative;
    font-size: 14px;
    line-height: 22px;
    height: 22px;
    vertical-align: middle;

    &__wrap{
        margin: 0;
        padding: 0 7px 0 18px;
        display: inline-block;
        position: relative;
        width: 46px;
        height: 22px;
        border: 1px solid $grey;
        outline: none;
        border-radius: 12px;
        background-color: $grey;
        box-sizing: border-box;
        cursor: pointer;
        color: $white;
        transition: border-color .3s,background-color .3s;

        &.disabled{
            cursor: not-allowed;
            background-color: $grey-lighter;
            border-color: $grey-lighter;
        }
    }

    &__checked{
        padding: 0 18px 0 7px;
        background-color: $primary;
        border-color: $primary;
    }

    &__hasText{
        width: 58px;
    }

    &__text{
        display: inline-block;
        width: 100%;
        text-align: center;
        height: 21px;
    }

    &__btn{
        top: 2px;
        left: 2px;
        position: absolute;
        border-radius: 100%;
        transition: transform .3s;
        width: 16px;
        height: 16px;
        background-color: $white-ter;
        transition: left .3s;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);

        &.checked{
            left: 26px;

            &.hasText{
                left: 38px;
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
}
</style>
