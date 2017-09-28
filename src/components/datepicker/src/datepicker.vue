<!--
    Created by linfengluo@gmail.com on 2017/9/25.
-->
<template>
    <div class="field"
         :class="{
            'has-addons': showIcon
         }"
         :style="getStyleWidth(fullwidth ? 0 : width)"
    >
        <slot name="prepend"></slot>
        <div class="control"
             :class="{
                'has-icons-right': showIcon,
                'is-fullwidth': fullwidth
             }"
        >
            <input class="input"
                   :class="[stateClass, sizeClass]"
                   :name="name"
                   :disabled="disabled"
                   :placeholder="placeholder"
                   v-model="currentValue"
                   ref="pickrElement"
                   data-input
            >
            <vIcon :name="icon"
                   v-if="showIcon"
                   directions="right"
                   :size="iconSize[size]">
            </vIcon>
        </div>
    </div>
</template>

<script>
    import Flatpickr from 'flatpickr'
    import 'flatpickr/dist/flatpickr.min.css'
    import vIcon from '../../icon'

    const Zh = require('flatpickr/dist/l10n/zh.js').zh
    Flatpickr.localize(Zh)

    export default {
        name: 'datepicker',
        componentName: 'datepicker',
        props: {
            value: {
                type: [String, Number, Date],
                defalut(){
                    return new Date()
                }
            },
            mode: {
                type: String,
                default: 'single'
            },
            size: {
                type: String,
                default: 'normal'
            },
            width: [String, Number],
            state: String,
            name: String,
            fullwidth: {
                type: Boolean,
                default: false
            },
            showIcon: {
                type: Boolean,
                default: true
            },
            disabled: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: ''
            },
            format: String,
            maxDate: [String, Date, Number],
            minDate: [String, Date, Number],
            inline: {
                type: Boolean,
                default: false
            },
            enableTime: {
                type: Boolean,
                default: false
            },
            time_24: {
                type: Boolean,
                default: true
            },
            disableDate: {
                type: Array,
                default(){
                    return []
                }
            },
            enableDate: {
                type: Array,
                default(){
                    return []
                }
            }
        },
        data() {
            let dateFormat = ''

            if (this.enableTime){
                dateFormat = this.format ? this.format.replace(/YYYY/g, 'Y')
                    .replace(/MM/g, 'm')
                    .replace(/DD/g, 'd')
                    .replace(/HH/g, 'H')
                    .replace(/mm/g, 'i')
                    .replace(/ss/g, 'S') : 'Y-m-d H:i'
            } else {
                dateFormat = this.format ? this.format.replace(/YYYY/g, 'Y')
                    .replace(/MM/g, 'm')
                    .replace(/DD/g, 'd') : 'Y-m-d'
            }
            return {
                flatPickr: null,
                icon: 'calendar',
                currentValue: this.value,
                iconSize: {
                    normal: 'small',
                    small: 'small',
                    medium: 'normal',
                    large: 'medium'
                },
                onChangeEvent: null,
                config: {
                    onChange: this.handlerChange
                },
                dateFormat: dateFormat
            }
        },
        components: {
            vIcon
        },
        mounted(){
            this.config.defaultDate = this.value
            this.config.name = Math.random()
            this.config.mode = this.mode
            this.config.enableTime = this.enableTime
            this.config.maxDate = this.maxDate
            this.config.minDate = this.minDate
            this.config.inline = this.inline
            this.config.dateFormat = this.dateFormat
            this.config.time_24hr = this.time_24
            this.config.disable = this.disableDate
            this.config.enable = this.enableDate

            if (!this.flatPickr) {
                const $pickr = this.$refs.pickrElement
                this.flatPickr = new Flatpickr($pickr, this.config)
            }
        },
        watch: {
            value(val) {
                this.flatPickr && this.flatPickr.setDate(val, true)
            },

            currentValue(val){
                this.$emit('input', val)
                this.$emit('change', val)
            },

            config(newConfig) {
                this.flatPickr.config = Object.assign(this.flatPickr.config, newConfig)
                this.flatPickr.redraw()
                this.flatPickr.setDate(this.value, true)
            }
        },
        computed: {
            sizeClass(){
                return this.size ? `is-${this.size}` : null
            },

            stateClass(){
                return this.state ? `is-${this.state}` : null
            }
        },

        beforeDestroy() {
            if (this.flatPickr) {
                this.flatPickr.destroy()
                this.flatPickr = null
            }
        },

        methods: {
            openFlatpickr(){
                this.flatPickr.toggle()
            },

            handlerChange(...args){
                this.onChangeEvent && this.onChangeEvent(...args)
                this.$emit('change', ...args)
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../../../sass/variables/variables";
    .flatpickr-calendar{
        &.open{
            z-index: $calendar-index;
        }
        .flatpickr-day.disabled, .flatpickr-day.disabled:hover, .flatpickr-day.notAllowed, .flatpickr-day.notAllowed.prevMonthDay, .flatpickr-day.notAllowed.nextMonthDay{
            cursor: not-allowed;
            pointer-events: initial;
        }
    }
</style>
