<!--
    Created by linfengluo@gmail.com on 2017/9/11.
-->
<template>
    <div class="select"
         :class="[{
            'is-primary': color === 'primary',
            'is-info': color === 'info',
            'is-success': color === 'success',
            'is-warning': color === 'warning',
            'is-danger': color === 'danger',
            'is-small': size === 'small',
            'is-medium': size === 'medium',
            'is-large': size === 'large',
            'is-loading': state === 'loading',
            'is-fullwidth': !width && fullwidth
         }, propClass]"
    >
        <select v-model="selfModel"
                @change="handlerChange"
                :disabled="disabled"
                :class="{
                    'is-focused': state === 'focused',
                    'is-hovered': state === 'hovered'
                }"
                :style="getStyleWidth(fullwidth ? 0 : width)"
          >
            <slot></slot>
        </select>
    </div>
</template>

<script>
    import GlobalMixins from '../../../mixins/global'
    export default {
        name: 'vb-selecter',
        componentName: 'vb-selecter',
        props: {
            value: {
                type: [String, Number],
                default: ''
            },
            color: {
                type: String,
                default: 'normal'
            },
            state: {
                type: String,
                default: 'normal'
            },
            size: {
                type: String,
                default: 'normal'
            },
            icon: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            width: [String, Number],
            propClass: {
                type: String,
                default: ''
            },
            fullwidth: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                selfModel: this.value
            }
        },
        mixins: [GlobalMixins],
        created(){
            if (this.value === '' && !this.disabled) {
                let index = 0
                let option = this.$slots.default[index]
                while (option) {
                    index++
                    if (typeof option.componentOptions === 'undefined' || option.componentOptions.propsData.disabled) {
                        option = this.$slots.default[index]
                    } else {
                        this.selfModel = option.componentOptions.propsData.value
                        this.$emit('input', this.selfModel)
                        return true
                    }
                }
            }
        },

        watch: {
            value(val){
                if (val !== this.selfModel) {
                    this.selfModel = val
                }
            }
        },
        methods: {
            handlerChange(){
                this.$emit('change', this.selfModel)
                this.$emit('input', this.selfModel)
            }
        }
    }
</script>
