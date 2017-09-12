<!--
    Created by linfengluo@gmail.com on 2017/9/11.
-->
<template>
    <option :value="value">
        <span v-text="label"></span>
    </option>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: 'options'
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

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
