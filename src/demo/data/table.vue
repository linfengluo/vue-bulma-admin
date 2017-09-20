<!--
    Created by linfengluo@gmail.com on 2017/9/18.
-->
<template>
    <vContent>
        <vContentHeader>
            <vTitle level="3">table</vTitle>
            <vBreadcrumb slot="right">
                <vBreadcrumbItem>data</vBreadcrumbItem>
                <vBreadcrumbItem>Table</vBreadcrumbItem>
            </vBreadcrumb>
        </vContentHeader>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">基本用法</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol>
                    <vTable :tableData="tableData">
                        <vTableCol label="姓名" prop='name' width="200"></vTableCol>
                        <vTableCol label="时间" prop='date' ></vTableCol>
                        <vTableCol label="地址" prop='address'></vTableCol>
                    </vTable>
                </vCol>
            </vRow>
            <vRow>
                <vCol>
                    tableData: 表格数据（Array）
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vTable :tableData="tableData"&gt;
    &lt;vTableCol label="姓名" prop='name' width="200"&gt;&lt;/vTableCol&gt;
    &lt;vTableCol label="时间" prop='date' &gt;&lt;/vTableCol&gt;
    &lt;vTableCol label="地址" prop='address'&gt;&lt;/vTableCol&gt;
&lt;/vTable&gt;
                </code><code class="javascript">
&lt;script&gt;
import {vTable, vTableCol} from '../../components/table/main'
export default {
    data() {
        return {
            tableData: [
                {
                    date: '2017-09-01',
                    name: '第一行',
                    address: '我家住在黄土高坡'
                }, {
                    date: '2017-09-02',
                    name: '第二行',
                    address: '我家住在黄土高坡'
                }, {
                    date: '2017-09-03',
                    name: '第三行',
                    address: '我家住在黄土高坡'
                }, {
                    date: '2017-09-04',
                    name: '第四行',
                    address: '我家住在黄土高坡'
                }
            ],
        }
    },
    components: {
        vTable,
        vTableCol
    }
}

&lt;/script&gt;
                </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">style 样式</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol>
                    窄边：<vSwitch v-model="narrow"></vSwitch>
                </vCol>
                <vCol>
                    斑纹：<vSwitch v-model="stripe"></vSwitch>
                </vCol>
                <vCol>
                    边框：<vSwitch v-model="border"></vSwitch>
                </vCol>
                <vCol>
                    fullwidth：<vSwitch v-model="fullWidth"></vSwitch>
                </vCol>
                <vCol>
                    checkbox: <vSwitch v-model="checkable"></vSwitch>
                </vCol>
                <vCol>
                    index: <vSwitch v-model="showIndex"></vSwitch>
                </vCol>
            </vRow>
            <vRow>
                <vCol>
                    <vTable :tableData="tableData"
                            :narrow="narrow"
                            :border="border"
                            :stripe="stripe"
                            :fullwidth="fullWidth"
                            :checkable="checkable"
                            :showIndex="showIndex">
                        <vTableCol label="姓名" prop='name' width="200"></vTableCol>
                        <vTableCol label="时间" prop='date' ></vTableCol>
                        <vTableCol label="地址" prop='address'></vTableCol>
                    </vTable>
                </vCol>
            </vRow>
            <vRow>
                <vCol>
                    narrow、border、stripe、fullwidth、checkable、showIndex：(Boolean)可选值为 true 或 false
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vTable :tableData="tableData" :narrow="narrow" :border="border" :stripe="stripe" :fullwidth="fullWidth"&gt;
    &lt;vTableCol label="姓名" prop='name' width="200"&gt;&lt;/vTableCol&gt;
    &lt;vTableCol label="时间" prop='date' &gt;&lt;/vTableCol&gt;
    &lt;vTableCol label="地址" prop='address'&gt;&lt;/vTableCol&gt;
&lt;/vTable&gt;
                </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">event 事件</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol>
                    <vTable :tableData="tableData"
                            :clickable="true"
                            :checkable="true"
                            rowKey="name"
                            @headlerClick="headlerClick"
                            @selectChange="headlerSelect">
                        <vTableCol label="姓名" prop='name' width="200"></vTableCol>
                        <vTableCol label="时间" prop='date' ></vTableCol>
                        <vTableCol label="地址" prop='address'></vTableCol>
                    </vTable>
                </vCol>
            </vRow>
            <vRow>
                <vCol>
                    <p>clickKey: {{clickKey}}</p>
                    <p>selectedKeys: {{selectedKeys}}</p>
                </vCol>
            </vRow>
            <vRow>
                <vCol>
                </vCol>
            </vRow>
            <vRow>
                <vCol>
                    <p>clickable: 是否可点击</p>
                    <p>checkable: 是否可多选</p>
                    <p>rowKey: 选择的字段（默认index）</p>
                    <p>selectChange: 多选回调 return 选中的keys和行数据</p>
                    <p>headlerClick 点击回调 return 点击的key和行数据</p>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vTable :tableData="tableData"
    :clickable="true"
    :checkable="true"
    rowKey="name"
    @headlerClick="headlerClick"
    @selectChange="headlerSelect"&gt;
    &lt;vTableCol label="姓名" prop='name' width="200"&gt;&lt;/vTableCol&gt;
    &lt;vTableCol label="时间" prop='date' &gt;&lt;/vTableCol&gt;
    &lt;vTableCol label="地址" prop='address'&gt;&lt;/vTableCol&gt;
&lt;/vTable&gt;
                </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">diy 自定义</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol>
                    <vTable :tableData="tableData">
                        <vTableCol label="姓名" prop='name' width="200"></vTableCol>
                        <vTableCol label="时间" prop='date' ></vTableCol>
                        <vTableCol label="地址" prop='address'></vTableCol>
                        <vTableCol label="操作">
                            <template scope="row">
                                <vButton state="info" @click="showItem(row)">选择</vButton>
                            </template>
                        </vTableCol>
                    </vTable>
                </vCol>
            </vRow>
            <vRow>
                <vCol>
                    seelctedData: {{showItemData}}
                </vCol>
            </vRow>
            <vRow>
                <vCol>
                    通过 template 自定义模板，通过scope 获取行数据
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vTable :tableData="tableData"&gt;
    &lt;vTableCol label="姓名" prop='name' width="200"&gt;&lt;/vTableCol&gt;
    &lt;vTableCol label="时间" prop='date' &gt;&lt;/vTableCol&gt;
    &lt;vTableCol label="地址" prop='address'&gt;&lt;/vTableCol&gt;
    &lt;vTableCol label="操作"&gt;
        &lt;template scope="row"&gt;
            &lt;vButton state="info" @click="showItem(row)"&gt;选择&lt;/vButton&gt;
        &lt;/template&gt;
    &lt;/vTableCol&gt;
&lt;/vTable&gt;
                </code>
            </template>
        </vCodePanel>

    </vContent>
</template>

<script>
    import vContent from '../../components/layout/content/content.vue'
    import vContentHeader from '../../components/layout/content/header.vue'
    import {vBreadcrumb, vBreadcrumbItem} from '../../components/breadcrumb/main'
    import vCodePanel from '../../components/codePanel/codePanel.vue'
    import {vRow, vCol} from '../../components/layout/columns/main'
    import {vTitle, vButton} from '../../elements/main'
    import {vTable, vTableCol} from '../../components/table/main'
    import vSwitch from '../../components/form/switch/switch.vue'

    export default {
        data() {
            return {
                tableData: [{
                    date: '2017-09-01',
                    name: '第一行',
                    address: '我家住在黄土高坡'
                }, {
                    date: '2017-09-02',
                    name: '第二行',
                    address: '我家住在黄土高坡'
                }, {
                    date: '2017-09-03',
                    name: '第三行',
                    address: '我家住在黄土高坡'
                }, {
                    date: '2017-09-04',
                    name: '第四行',
                    address: '我家住在黄土高坡'
                }],

                border: false,
                fullWidth: true,
                stripe: false,
                narrow: false,
                showIndex: false,
                checkable: false,
                clickKey: '',
                selectedKeys: [],
                showItemData: {}
            }
        },
        components: {
            vTable,
            vTitle,
            vContentHeader,
            vBreadcrumb,
            vBreadcrumbItem,
            vCodePanel,
            vRow,
            vCol,
            vContent,
            vTableCol,
            vButton,
            vSwitch
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
            headlerClick(key, datas){
                this.clickKey = key
            },

            headlerSelect(keys, datas){
                this.selectedKeys = keys
            },

            showItem(data){
                this.showItemData = data
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
