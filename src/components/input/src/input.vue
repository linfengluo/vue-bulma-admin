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
                   :class="[stateClass, sizeClass]"
                   :name="name"
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
    import vIcon from '../../icon/src/icon.vue'

    export default {
        name: 'input',
        componentName: 'input',
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
                default: ''
            },
            size: String,
            name: String,
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
            state: String,
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
                    medium: 'normal',
                    large: 'medium'
                }
            }
        },
        components: {
            vIcon
        },
        computed: {
            sizeClass(){
                return this.size ? `is-${this.size}` : null
            },

            stateClass(){
                return this.state ? `is-${this.state}` : null
            }
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

