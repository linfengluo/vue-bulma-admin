<!--
    Created by linfengluo@gmail.com on 2017/10/13.
-->
<template>
    <ul class="vb-pagination__page is-clearfix">
        <li class="page__item is-pulled-left"
            @click="handlerPageSub"
            :class="{
                'disabled': currentPage === 1
            }"
        >
            <i class="fa fa-angle-left" aria-hidden="true"></i>
        </li>
        <li class="page__item is-pulled-left"
            :class="{
                'active': 1 === currentPage
            }"
            @click="handlerClick(1)"
        >
            1
        </li>
        <li class="page__item is-pulled-left page__item--more"
            @click="jumpLess"
            v-show="currentPage > 4 && pageNum > 7"
        >
            <span>…</span>
            <i class="fa fa-angle-double-left" aria-hidden="true"></i>
        </li>
        <li class="page__item is-pulled-left"
            v-for="page in pagers"
            :key="page"
            :class="{
                'active': page === currentPage
            }"
            @click="handlerClick(page)"
        >
            {{page}}
        </li>
        <li class="page__item is-pulled-left page__item--more"
            @click="jumpMore"
            v-show="currentPage < pageNum - 3 && pageNum > 7"
        >
            <span>…</span>
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </li>
        <li class="page__item is-pulled-left"
            :class="{
                'active': pageNum === currentPage
            }"
            v-show="pageNum != 1"
            @click="handlerClick(pageNum)"
        >
            {{pageNum}}
        </li>
        <li class="page__item is-pulled-left"
            @click="handlerPageAdd"
            :class="{
                'disabled': currentPage === pageNum
            }"
        >
            <i class="fa fa-angle-right" aria-hidden="true"></i>
        </li>
    </ul>
</template>

<script>
    import PanigationMixins from './mixins'
    export default {
        name: 'vb-pagination-pager',
        componentName: 'vb-pagination-pager',

        data() {
            return {}
        },
        components: {},
        mixins: [PanigationMixins],
        created(){
        },
        mounted(){
        },
        watch: {},
        computed: {
            pagers(){
                let pagers = []

                if (this.pageNum > 7) {
                    if (this.currentPage <= 3) {
                        pagers = [2, 3, 4, 5]
                    } else if (this.currentPage > 3 && this.currentPage < this.pageNum - 2) {
                        for (let page = this.currentPage - 2; page <= this.currentPage + 2; page++) {
                            pagers.push(page)
                        }
                    } else if (this.currentPage >= this.pageNum - 2) {
                        for (let page = this.pageNum - 4; page < this.pageNum; page++) {
                            pagers.push(page)
                        }
                    }
                } else {
                    for (let page = 2; page <= this.pageNum - 1; page++) {
                        pagers.push(page)
                    }
                }

                return pagers
            }
        },
        methods: {
            handlerClick(page){
                this.currentPage = page
            },

            jumpMore(){
                let morePage = this.currentPage + 5
                this.currentPage = morePage < this.pageNum ? morePage : this.pageNum
            },

            jumpLess(){
                let morePage = this.currentPage - 5
                this.currentPage = morePage > 0 ? morePage : 1
            },

            handlerPageSub(){
                let nextPage = this.currentPage - 1
                if (nextPage > 0) {
                    this.currentPage--
                }
            },

            handlerPageAdd(){
                let nextPage = this.currentPage + 1
                if (nextPage <= this.pageNum) {
                    this.currentPage++
                }
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../../sass/variables/variables";
    @import "base";
    .vb-pagination{

        &__page{
            display: inline-block;
            border: 1px solid $border;
            border-radius: $radius;
            vertical-align: middle;

            .page__item{
                position: relative;
                display: inline-block;
                min-width: $paginationItemWidth;
                height: $paginationItemHeight;
                line-height: $paginationItemHeight;
                text-align: center;
                cursor: pointer;
                /*transition: all .2s ease-in-out;*/
                user-select: none;

                &--more{
                    i{
                        display: none;
                    }
                    &:hover{
                        i{
                            display: block;
                        }
                        span{
                            display: none;
                        }
                    }
                }


                &:hover{
                    color: $primary;
                }

                &:not(:last-child){
                    border-right: 1px solid $border;
                }

                &.active{
                    cursor: default;
                    background-color: $primary;
                    border-color: $primary;
                    color: #ffffff;

                    &:hover{
                        color: #fff5f7;
                    }
                }

                &.disabled{
                    color: $grey-lighter;
                    cursor: not-allowed;
                }

                i{
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 21px;
                    height: 23px;
                    margin: auto;
                }
            }
        }
    }
</style>
