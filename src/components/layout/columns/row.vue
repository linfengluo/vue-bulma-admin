<!--
    Created by linfengluo@gmail.com on 2017/9/8.
-->
<template>
    <div class="columns"
         :class="{
            'is-desktop': platform === 'desktop',
            'is-mobile': platform === 'mobile',
            'is-tablet': platform === 'tablet',
            'is-gapless': gapless,
            'is-multiline': multiline
         }"
    >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            platform: {
                type: String,
                default: ''
            },
            multiline: {
                type: Boolean,
                default: false
            },
            gapless: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
