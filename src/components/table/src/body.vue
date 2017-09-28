<!--
    Created by linfengluo@gmail.com on 2017/9/18.
-->
<template>
    <tbody>
        <template v-for="(item, index) in tableData">
            <vTr :item="item" :index="index" :columns="columns" :checkable="checkable"></vTr>
        </template>
    </tbody>
</template>

<script>
    import vTr from './tr'

    export default {
        name: 'vb-tableBody',
        componentName: 'vb-tableBody',
        props: {
            columns: {
                type: Array,
                default(){
                    return []
                }
            },
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
            rowKey: {
                type: String,
                default: ''
            }
        },
        components: {
            vTr
        }
    }
</script>

