<!--
    Created by linfengluo@gmail.com on 2017/9/11.
-->
<template>
    <vSelectGroup>
        <vSelectItem label="123" value="222"></vSelectItem>
        <vSelectItem label="1213" value="2212"></vSelectItem>
    </vSelectGroup>
</template>

<script>
    import vSelectItem from './selecterItem.vue'
    import vSelectGroup from './selecterGroup.vue'
    export default {
        data() {
            return {}
        },
        components: {
            vSelectItem,
            vSelectGroup
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
