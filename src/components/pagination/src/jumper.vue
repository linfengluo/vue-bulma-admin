<!--
    Created by linfengluo@gmail.com on 2017/10/13.
-->
<template>
    <div class="vb-pagination__jumper">
        <div class="jumper__wrap">
            <div class="jump__text">跳转</div>
            <div class="jumper__input">
                <vb-input v-model="localValue" size="small" @blur="handlerChange"></vb-input>
            </div>
            <div>页</div>
        </div>
    </div>
</template>
<script>
    import PanigationMixins from './mixins'
    import Input from '../../input'
    export default {
        data() {
            return {
                localValue: ''
            }
        },
        mixins: [PanigationMixins],
        components: {
            'vb-input': Input
        },
        mounted(){
            this.localValue = this.currentPage
        },
        watch: {
            currentPage(val){
                this.localValue = val
            }
        },
        methods: {
            handlerChange(){
                let value = Number(this.localValue)
                if (value <= this.pageNum && value > 0) {
                    this.currentPage = value
                } else {
                    this.currentPage = value > this.pageNum ? this.pageNum : 1
                }
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../../../sass/variables/variables";
    @import "base";
    .vb-pagination{
        &__jumper{
            margin-left: $space;
            display: inline-block;
            vertical-align: middle;
            line-height: $paginationItemHeight;

            .jumper{
                &__wrap{
                    width: 80px;
                    display: flex;
                    justify-content: space-between;
                }

                &__input{
                    flex: 0 0 $paginationItemWidth;

                    input{
                        width: $paginationItemWidth;
                        height: $paginationItemHeight;
                    }
                }
            }
        }
    }
</style>
