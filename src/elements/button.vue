<!--
    Created by linfengluo@gmail.com on 2017/9/11.
-->
<template>
    <a class="button"
       :class="{
            'is-white': color === 'white',
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
       :disabled="disabled"
    >
        <vIcon name="leftIcon"
               v-if="leftIcon !== ''"
               :size="iconSize[size]"
        >
        </vIcon>

        <span>
            <slot></slot>
        </span>
        <vIcon name="rightIcon"
               v-if="rightIcon !== ''"
               :size="iconSize[size]"
        >
        </vIcon>

    </a>
</template>

<script>
    import vIcon from './icon.vue'
    export default {
        props: {
            color: {
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
            loading: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
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
        methods: {}
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
