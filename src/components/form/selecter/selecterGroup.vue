<!--
    Created by linfengluo@gmail.com on 2017/9/11.
-->
<template>
    <div class="select"
         :class="{
            'is-primary': color === 'primary',
            'is-info': color === 'info',
            'is-success': color === 'success',
            'is-warning': color === 'warning',
            'is-danger': color === 'danger',
            'is-small': size === 'small',
            'is-medium': size === 'medium',
            'is-large': size === 'large',
            'is-loading': state === 'loading'
         }"
    >
        <select v-model="selfModel"
                @change="handlerChange"
                :placeholder="placeholder"
                :class="{
                    'is-focused': state === 'focused',
                    'is-hovered': state === 'hovered'
                }"
          >
            <slot></slot>
        </select>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
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
            multiple: {
                type: Boolean,
                default: false
            },
            icon: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: '请选择'
            }
        },
        data() {
            return {
                selfModel: this.value
            }
        },
        created(){
            if (this.value === ''){
                this.selfModel = this.$slots.default[0].componentOptions.propsData.value
                this.$emit('input', this.selfModel)
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
