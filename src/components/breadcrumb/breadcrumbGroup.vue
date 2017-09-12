<!--
    Created by linfengluo@gmail.com on 2017/9/8.
-->
<template>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <slot></slot>
    </nav>
</template>

<script>
    export default {
        props: {
            separator: {
                type: String,
                default: '/'
            }
        },
        data() {
            return {}
        },
        components: {},
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
