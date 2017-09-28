<!--
    Created by linfengluo@gmail.com on 2017/9/11.
-->
<template>
    <option :value="value" :disabled="disabled">
         <span v-if="$slots.default || label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </option>
</template>

<script>
    export default {
        name: 'vb-selecterItem',
        componentName: 'vb-selecterItem',
        props: {
            value: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: 'options'
            },
            disabled: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

