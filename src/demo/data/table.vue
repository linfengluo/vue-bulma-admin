<!--
    Created by linfengluo@gmail.com on 2017/9/18.
-->
<template>
    <vContent>
        <vTable :tableData="tableData" :stripe="true" :checkable="true" @selectChange="handlerChange">
            <vTableCol label="姓名" prop='name' width="200"></vTableCol>
            <vTableCol label="时间" prop='date'></vTableCol>
            <vTableCol label="地址" prop='address'>
                <template scope="row">
                    <div>{{row.address}}</div>
                </template>
            </vTableCol>
        </vTable>
    </vContent>
</template>

<script>
    import vContent from '../../components/layout/content/content.vue'
    import {vTable, vTableCol} from '../../components/table/main'
    import {vButton} from '../../elements/main'

    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎1',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎2',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎3',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎4',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        components: {
            vTable,
            vContent,
            vTableCol,
            vButton
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
            handlerChange(keys, datas){
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
