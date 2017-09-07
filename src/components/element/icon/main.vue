<!--
    Created by linfengluo@gmail.com on 2017/9/4.
-->
<template>
    <span class="icon"
        :class="{
            'is-small': size === 'small',
            'is-medium': size === 'medium',
            'is-large': size === 'large'
        }"
    >
        <i :class="'fa fa-' + name"></i>
    </span>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                default: 'bug'
            },
            size: {
                type: String,
                default: 'normal'
            }
        }
    }
</script>
