<!--
    Created by linfengluo@gmail.com on 2017/9/11.
-->
<template>
    <a class="button"
       :class="[styleClass, sizeClass, stateClass]"
       @click="handleClick"
       :disabled="disabled"
    >
        <vIcon :name="leftIcon"
               v-if="leftIcon !== ''"
               :size="iconSize[size]"
        >
        </vIcon>
        <span v-if="icon === ''">
            <slot></slot>
        </span>
        <vIcon :name="icon"
               v-else
               :size="iconSize[size]"
        >
        </vIcon>
        <vIcon :name="rightIcon"
               v-if="rightIcon !== ''"
               :size="iconSize[size]"
        >
        </vIcon>
    </a>
</template>
<script>
    import vIcon from '../icon/icon.vue'
    export default {
        name: 'button',
        componentName: 'button',
        props: {
            styles: String,
            state: String,
            outlined: {
                type: Boolean,
                default: false
            },
            inverted: {
                type: Boolean,
                default: false
            },
            linked: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            icon: {
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
            size: {
                type: String,
                default: 'normal'
            }
        },
        data() {
            return {
                iconSize: {
                    normal: 'normal',
                    medium: 'normal',
                    small: 'small',
                    large: 'medium'
                }
            }
        },
        components: {
            vIcon
        },
        computed: {
            sizeClass(){
                return this.size === 'normal' ? null : `is-${this.size}`
            },

            stateClass(){
                return this.state ? `is-${this.state}` : null
            },

            styleClass(){
                return this.styles ? `is-${this.state}` : null
            }
        },
        methods: {
            handleClick(event){
                this.$emit('click', event)
            }
        }
    }
</script>
