<!--
    Created by linfengluo@gmail.com on 2017/9/8.
-->
<template>
    <div :class="'column ' + sizeClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'vb-col',
        componentName: 'vb-col',
        props: {
            size: {
                type: [String, Number],
                default: ''
            }
        },

        computed: {
            sizeClass(){
                return this.size === '' ? '' : 'is-' + this.size
            }
        }
    }
</script>
