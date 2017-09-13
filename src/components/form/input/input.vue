<!--
    Created by linfengluo@gmail.com on 2017/9/7.
-->
<template>
    <div class="field"
         :class="{
            'has-addons': hasAddons
         }"
         :style="getStyleWidth(width)"
    >
        <slot name="prepend"></slot>
        <div class="control"
             :class="{
                'has-icons-left': leftIcon !== '',
                'has-icons-right': rightIcon !== '',
                'is-fullwidth': hasAddons
             }"
        >
            <input class="input"
                   :class="{
                        'is-small': size === 'small',
                        'is-medium': size === 'medium',
                        'is-large': size === 'large',
                        'is-success': state === 'success',
                        'is-danger': state === 'danger'
                   }"
                   :type="type"
                   :disabled="disabled"
                   :placeholder="placeholder"
                   :readonly="readonly"
                   :maxlength="maxlength"
                   :minlength="minlength"
                   :autocomplete="autoComplete"
                   :autofocus="autofocus"
                   @focus="handleFocus"
                   @blur="handleBlur"
                   @input="handleInput"
            >
            <vIcon :name="leftIcon"
                   v-if="leftIcon !== ''"
                   directions="left"
                   :size="iconSize[size]">

            </vIcon>
            <vIcon :name="rightIcon"
                   v-if="rightIcon !== ''"
                   directions="right"
                   :size="iconSize[size]">

            </vIcon>
        </div>
        <p class="help is-danger" v-if="error !== ''">
            <span v-text="error"></span>
        </p>
        <slot name="append"></slot>
    </div>
</template>

<script>
    import vIcon from '../../../elements/icon.vue'

    export default {
        props: {
            value: {
                type: [String, Number],
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            },
            placeholder: {
                type: String,
                default: 'input element'
            },
            size: {
                type: String,
                default: 'normal'
            },
            width: {
                type: [String, Number],
                default: ''
            },
            maxlength: {
                type: [String, Number],
                default: ''
            },
            minlength: {
                type: [String, Number],
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            autoComplete: {
                type: Boolean,
                default: false
            },
            state: {
                type: String,
                default: 'normal'
            },
            error: {
                type: String,
                default: ''
            },
            leftIcon: {
                type: String,
                default: ''
            },
            rightIcon: {
                type: String,
                default: ''
            },
            hasAddons: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                currentValue: this.value,
                iconSize: {
                    normal: 'small',
                    small: 'small',
                    medium: 'medium',
                    large: 'large'
                }
            }
        },
        components: {
            vIcon
        },
        watch: {
            value(val){
                this.setValue(val)
            }
        },
        methods: {
            setValue(val){
                if (val !== this.currentValue) {
                    this.currentValue = this.val
                } else {
                    return false
                }
            },
            handleFocus(event){
                this.$emit('focus', event)
            },

            handleBlur(event){
                this.$emit('blur', event)
            },

            handleInput(event){
                const value = event.target.value
                this.$emit('input', value)
                this.setValue(value)
                this.$emit('change', value)
            }

        }
    }
</script>

