<!--
    Created by linfengluo@gmail.com on 2017/10/12.
-->
<template>
    <div class="vb-pagination is-clearfix" :class="[alignClass]">
        <div class="vb-pagination--inner">
            <Total v-if="showTotal" :total="total"></Total>
            <Pager @change="handlerPagerClick"></Pager>
            <SizeSelect v-if="showSizes" :sizeOptions="sizeOptions" @sizeChange="handlerSizeChange"></SizeSelect>
            <Jumper v-if="showJumper" @change="handlerPagerClick"></Jumper>
        </div>
    </div>
</template>

<script>
    import Pager from './pager.vue'
    import Jumper from './jumper.vue'
    import Total from './total.vue'
    import SizeSelect from './sizeSelect.vue'
    export default {
        name: 'vb-pagination',
        componentName: 'vb-pagination',
        props: {
            total: {
                type: Number,
                default: 0
            },
            pageSize: {
                type: Number,
                default: 50
            },
            current: {
                type: Number,
                default: 1
            },
            sizeOptions: {
                type: Array,
                default(){
                    return [20, 50, 100, 500]
                }
            },
            layout: {
                type: String,
                default: 'pager'
            },
            align: {
                type: String,
                default: 'center'
            },
            showSizes: Boolean,
            showJumper: Boolean,
            showTotal: Boolean
        },
        data() {
            let size = this.pageSize ? this.pageSize : this.sizeOptions[0]
            let sizeIndex = this.pageSize ? this.sizeOptions.indexOf(this.pageSize) : 0

            return {
                currentPage: this.current,
                currentSize: size,
                currentSizeIndex: sizeIndex
            }
        },
        mounted(){
            this.currentPage = this.pageNum < this.currentPage ? this.pageNum : this.currentPage
        },
        components: {
            Pager,
            Jumper,
            Total,
            SizeSelect
        },
        watch: {
            pageNum(val){
                if (val < this.currentPage) {
                    this.currentPage = val
                }
            }
        },
        computed: {
            pageNum(){
                return Number(this.total) === 0 ? 1 : Math.ceil(this.total / this.currentSize)
            },

            alignClass(){
                return `vb-pagination--${this.align}`
            }
        },
        methods: {
            handlerPagerClick(page){
                this.currentPage = page
                this.$emit('handlerPageChange', page)
            },

            handlerSizeChange(size){
                this.currentSize = size
                if (this.pageNum < this.currentPage) {
                    this.currentPage = this.pageNum
                }
                this.$emit('handlerSizeChange', size, this.currentPage)
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../../sass/variables/variables";
    @import "base";
.vb-pagination{
    &--inner{
        display: inline-block;
    }

    &--left {
        text-align: left;
    }

    &--right{
        text-align: right;
    }

    &--center{
        text-align: center;
    }
}
</style>
