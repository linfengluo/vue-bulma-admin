<!--
    Created by linfengluo@gmail.com on 2017/10/12.
-->
<template>
    <vb-content>
        <vb-contentHeader>
            <vb-title level="3">pagination</vb-title>
            <vb-breadcrumbGroup slot="right">
                <vb-breadcrumb>Data</vb-breadcrumb>
                <vb-breadcrumb>Pagination</vb-breadcrumb>
            </vb-breadcrumbGroup>
        </vb-contentHeader>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">基本用法</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    <vb-pagination :total="200" showTotal></vb-pagination>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    <vb-pagination :total="1000" showTotal></vb-pagination>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    <vb-pagination :total="1000" showTotal :pageSize="300"></vb-pagination>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    <p>通过 total 属性指定条数； pageSize 指定每页条数(默认50)； current 指定当前页数；</p>
                    <p>align 指定方向； sizeOptions 指定可选分页</p>
                </vb-col>
            </vb-row>
            <template slot="code">
                <code class="html" v-text="demo1"></code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">layout 功能</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    <vb-pagination :total="1000" showTotal></vb-pagination>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    <vb-pagination :total="1000" showTotal showSizes ></vb-pagination>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    <vb-pagination :total="1000" showTotal showSizes showJumper></vb-pagination>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    <p>showTotal 是否显示 条数</p>
                    <p>showJumper 是否显示 跳转功能</p>
                    <p>showSizes 是否显示 分页数量选择； 此时sizeOptions 为整形数组，可指定可选分页，默认值： [20, 50, 500, 500]</p>
                </vb-col>
            </vb-row>
            <template slot="code">
                <code class="html" v-text="demo2"></code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">align 方向</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    <vb-pagination :total="500" showTotal align="left"></vb-pagination>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    <vb-pagination :total="500" showTotal></vb-pagination>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    <vb-pagination :total="500" showTotal align="right"></vb-pagination>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    <p>通过 align 属性指定分页的浮动</p>
                    <p>align 的可选值为： left | center(默认) | right</p>
                </vb-col>
            </vb-row>
            <template slot="code">
                <code class="html" v-text="demo3"></code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">Event 事件</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>

            <vb-row>
                <vb-col>
                    <vb-pagination :total="1000"
                                   :current="50"
                                   showTotal
                                   showSizes
                                   @handlerPageChange="handlerPageChange"
                                   @handlerSizeChange="handlerSizeChange">
                    </vb-pagination>
                </vb-col>
            </vb-row>

            <vb-row>
                <vb-col>
                    <p>handlerSizeChange : pageSize 改变时会触发, 回调参数： size, page</p>
                    <p>handlerPageChange : page 改变是会触发, 回调参数： page</p>
                </vb-col>
            </vb-row>
            <template slot="code">
                <code class="html" v-text="demo4"></code>
            </template>
        </vCodePanel>
    </vb-content>
</template>

<script>
    import vCodePanel from '../../components/codePanel/codePanel.vue'

    export default {
        data() {
            return {
                demo1: `<vb-pagination :total="200" showTotal></vb-pagination>
<vb-pagination :total="1000" showTotal></vb-pagination>
<vb-pagination :total="1000" showTotal :pageSize="300"></vb-pagination>`,
                demo2: `<vb-pagination :total="1000" showTotal></vb-pagination>
<vb-pagination :total="1000" showTotal showSizes ></vb-pagination>
<vb-pagination :total="1000" showTotal showSizes showJumper></vb-pagination>`,
                demo3: `<vb-pagination :total="500" showTotal align="left"></vb-pagination>
<vb-pagination :total="500" showTotal></vb-pagination>
<vb-pagination :total="500" showTotal align="right"></vb-pagination>`,
                demo4: `<vb-pagination :total="1000"
:current="50"
showTotal
showSizes
@handlerPageChange="handlerPageChange"
@handlerSizeChange="handlerSizeChange">
</vb-pagination>
`
            }
        },
        components: {
            vCodePanel
        },
        mixins: [],
        created(){
        },
        mounted(){
        },
        watch: {},
        computed: {
        },
        methods: {
            handlerSizeChange(size, page){
                console.log(`每页 ${size} 条`)
                console.log(`第 ${page} 页`)
            },

            handlerPageChange(page){
                console.log(`第 ${page} 页`)
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
