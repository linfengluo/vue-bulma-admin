<!--
    Created by linfengluo@gmail.com on 2017/9/7.
-->
<template>
    <div class="box" :style="getStyleWidth(width)">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            width: {
                type: [String, Number],
                default: 0
            }
        }
    }
</script>
