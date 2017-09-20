<!--
    Created by linfengluo@gmail.com on 2017/9/15.
-->
<template>
    <table cellpadding="0"
           cellspacing="0"
           border="0"
           class="table vb-table"
           :class="{
                'is-bordered': border,
                'is-striped': stripe,
                'is-fullwidth': fullwidth,
                'is-narrow': narrow
           }"
    >
        <slot></slot>
        <vTableHeader :columns="columns" :checkable="checkable" @changeSelectedAll="toggleSelectAll"></vTableHeader>
        <vTableBody :columns="columns" :tableData="tableData" :checkable="checkable" :rowKey="rowKey"></vTableBody>
    </table>
</template>

<script>
    import vTableHeader from './header.vue'
    import vTableBody from './body.vue'

    export default {
        name: 'table',
        componentName: 'table',
        props: {
            tableData: {
                type: Array,
                default(){
                    return []
                }
            },
            checkable: {
                type: Boolean,
                default: false
            },
            rowKey: String,
            border: {
                type: Boolean,
                default: false
            },
            stripe: {
                type: Boolean,
                default: false
            },
            fullwidth: {
                type: Boolean,
                default: true
            },
            narrow: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                columns: [],
                selectedKeys: [],
                selectedData: []
            }
        },
        components: {
            vTableHeader,
            vTableBody
        },
        watch: {
            selectedKeys: {
                handler(val){
                    this.$emit('selectChange', val, this.selectedData)
                },
                deep: true
            }
        },
        computed: {
            isSelectAll(){
                return this.selectedKeys.length === this.tableData.length
            }
        },
        methods: {
            pushColumn(column){
                this.columns.push(column)
            },

            /*
            * 切换全选
            * */
            toggleSelectAll(val){
                val ? this.selectedAllData() : this.removeAllSelected()
            },

            /*
            * 全选，选择所有数据
            * */
            selectedAllData(){
                let keys = []
                for (let i = 0, length = this.tableData.length; i < length; i++){
                    let key = this.rowKey ? this.tableData[i][this.rowKey] : i
                    keys.push(key)
                }
                this.selectedKeys = keys
                this.selectedData = JSON.parse(JSON.stringify(this.tableData))
            },

            /*
            * 移除所有已选择数据
            * */
            removeAllSelected(){
                if (this.isSelectAll) {
                    this.selectedKeys = []
                    this.selectedData = []
                }
            },

            /*
            * 切换选择（单条数据）
            * params [string] val rowKey 或者 index
            * */
            changeSelected(val){
                val ? this.insertSelected(val) : this.removeUnSelected(val)
            },

            insertSelected(key, data){
                let index = this.selectedKeys.indexOf(key)
                if (index <= -1) {
                    this.selectedKeys.push(key)
                    this.selectedData.push(data)
                }
            },

            removeUnSelected(key){
                let index = this.selectedKeys.indexOf(key)
                if (index > -1) {
                    this.selectedKeys.splice(index, 1)
                    this.selectedData.splice(index, 1)
                }
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
.vb-table{

    &.table{
        th, td{
            vertical-align: middle;
        }
    }

    .vb-checkbox{
        margin: 4px 0 0 5px;
    }

    .checkbox__wrapper{
        width: 48px;
    }
}
</style>
