<!--
    Created by linfengluo@gmail.com on 2017/9/11.
-->
<template>
    <a class="button"
       :class="{
            'is-white': styles === 'white',
            'is-light': styles === 'light',
            'is-dark': styles === 'dark',
            'is-black': styles === 'black',
            'is-link': styles === 'link',
            'is-primary': state === 'primary',
            'is-info': state === 'info',
            'is-success': state === 'success',
            'is-warning': state === 'warning',
            'is-danger': state === 'danger',
            'is-outlined': outlined,
            'is-inverted': inverted,
            'is-loading': loading,
            'is-small': size === 'small',
            'is-medium': size === 'medium',
            'is-large': size === 'large',
       }"
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
    import vIcon from '../icon.vue'
    export default {
        name: 'button',
        componentName: 'button',
        props: {
            styles: {
                type: String,
                default: ''
            },
            state: {
                type: String,
                default: ''
            },
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
        mixins: [],
        created(){
        },
        mounted(){
        },
        watch: {},
        computed: {},
        methods: {
            handleClick(event){
                this.$emit('click', event)
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
