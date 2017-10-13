<!--
    Created by linfengluo@gmail.com on 2017/10/13.
-->
<template>
    <div class="vb-pagination__select">
        <vb-selecter v-model="localValue" @change="handlerChange">
            <vb-selecterItem v-for="size in sizeOptions" :value="size" :key="size">{{size}} 条/页</vb-selecterItem>
        </vb-selecter>
    </div>
</template>

<script>
    import {SelecterGroup, SelecterItem} from '../../selecter'
    import PaginationMixins from './mixins'
    export default {
        props: {
            sizeOptions: Array
        },
        data() {
            return {
                localValue: 0
            }
        },
        components: {
            'vb-selecter': SelecterGroup,
            'vb-selecterItem': SelecterItem
        },
        mixins: [PaginationMixins],
        created(){
        },
        mounted(){
            this.localValue = this.currentSize
        },
        watch: {},
        computed: {
            currentSize: {
                get(){
                    return this.parent.currentSize
                },

                set(val){
                    this.$emit('sizeChange', val)
                }
            }
        },
        methods: {
            handlerChange(val){
                this.currentSize = val
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../../sass/variables/variables";
.vb-pagination__select{
    margin-left: $space;
    display: inline-block;
    vertical-align: middle;
}
</style>
