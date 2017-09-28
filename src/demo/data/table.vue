<!--
    Created by linfengluo@gmail.com on 2017/9/18.
-->
<template>
    <vb-content>
        <vb-contentHeader>
            <vb-title level="3">table</vb-title>
            <vb-breadcrumbGroup slot="right">
                <vb-breadcrumb>data</vb-breadcrumb>
                <vb-breadcrumb>Table</vb-breadcrumb>
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
                    <vb-table :tableData="tableData">
                        <vb-tableCol label="姓名" prop='name' width="200"></vb-tableCol>
                        <vb-tableCol label="时间" prop='date' ></vb-tableCol>
                        <vb-tableCol label="地址" prop='address'></vb-tableCol>
                    </vb-table>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    tableData: 表格数据（Array）
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-table :tableData="tableData"&gt;
    &lt;vb-tableCol label="姓名" prop='name' width="200"&gt;&lt;/vb-tableCol&gt;
    &lt;vb-tableCol label="时间" prop='date' &gt;&lt;/vb-tableCol&gt;
    &lt;vb-tableCol label="地址" prop='address'&gt;&lt;/vb-tableCol&gt;
&lt;/vb-table&gt;
                </code><code class="javascript">
&lt;script&gt;
import {vb-table, vb-tableCol} from '../../components/table/main'
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
        vb-table,
        vb-tableCol
    }
}

&lt;/script&gt;
                </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">style 样式</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    窄边：<vb-switch v-model="narrow"></vb-switch>
                </vb-col>
                <vb-col>
                    斑纹：<vb-switch v-model="stripe"></vb-switch>
                </vb-col>
                <vb-col>
                    边框：<vb-switch v-model="border"></vb-switch>
                </vb-col>
                <vb-col>
                    fullwidth：<vb-switch v-model="fullWidth"></vb-switch>
                </vb-col>
                <vb-col>
                    checkbox: <vb-switch v-model="checkable"></vb-switch>
                </vb-col>
                <vb-col>
                    index: <vb-switch v-model="showIndex"></vb-switch>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    <vb-table :tableData="tableData"
                            :narrow="narrow"
                            :border="border"
                            :stripe="stripe"
                            :fullwidth="fullWidth"
                            :checkable="checkable"
                            :showIndex="showIndex">
                        <vb-tableCol label="姓名" prop='name' width="200"></vb-tableCol>
                        <vb-tableCol label="时间" prop='date' ></vb-tableCol>
                        <vb-tableCol label="地址" prop='address'></vb-tableCol>
                    </vb-table>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    narrow、border、stripe、fullwidth、checkable、showIndex：(Boolean)可选值为 true 或 false
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-table :tableData="tableData" :narrow="narrow" :border="border" :stripe="stripe" :fullwidth="fullWidth"&gt;
    &lt;vb-tableCol label="姓名" prop='name' width="200"&gt;&lt;/vb-tableCol&gt;
    &lt;vb-tableCol label="时间" prop='date' &gt;&lt;/vb-tableCol&gt;
    &lt;vb-tableCol label="地址" prop='address'&gt;&lt;/vb-tableCol&gt;
&lt;/vb-table&gt;
                </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">event 事件</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    <vb-table :tableData="tableData"
                            :clickable="true"
                            :checkable="true"
                            rowKey="name"
                            @headlerClick="headlerClick"
                            @selectChange="headlerSelect">
                        <vb-tableCol label="姓名" prop='name' width="200"></vb-tableCol>
                        <vb-tableCol label="时间" prop='date' ></vb-tableCol>
                        <vb-tableCol label="地址" prop='address'></vb-tableCol>
                    </vb-table>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    <p>clickKey: {{clickKey}}</p>
                    <p>selectedKeys: {{selectedKeys}}</p>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    <p>clickable: 是否可点击</p>
                    <p>checkable: 是否可多选</p>
                    <p>rowKey: 选择的字段（默认index）</p>
                    <p>selectChange: 多选回调 return 选中的keys和行数据</p>
                    <p>headlerClick 点击回调 return 点击的key和行数据</p>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-table :tableData="tableData"
    :clickable="true"
    :checkable="true"
    rowKey="name"
    @headlerClick="headlerClick"
    @selectChange="headlerSelect"&gt;
    &lt;vb-tableCol label="姓名" prop='name' width="200"&gt;&lt;/vb-tableCol&gt;
    &lt;vb-tableCol label="时间" prop='date' &gt;&lt;/vb-tableCol&gt;
    &lt;vb-tableCol label="地址" prop='address'&gt;&lt;/vb-tableCol&gt;
&lt;/vb-table&gt;
                </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">diy 自定义</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    <vb-table :tableData="tableData">
                        <vb-tableCol label="姓名" prop='name' width="200"></vb-tableCol>
                        <vb-tableCol label="时间" prop='date' ></vb-tableCol>
                        <vb-tableCol label="地址" prop='address'></vb-tableCol>
                        <vb-tableCol label="操作">
                            <template scope="row">
                                <vb-button state="info" @click="showItem(row)">选择</vb-button>
                            </template>
                        </vb-tableCol>
                    </vb-table>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    seelctedData: {{showItemData}}
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    通过 template 自定义模板，通过scope 获取行数据
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-table :tableData="tableData"&gt;
    &lt;vb-tableCol label="姓名" prop='name' width="200"&gt;&lt;/vb-tableCol&gt;
    &lt;vb-tableCol label="时间" prop='date' &gt;&lt;/vb-tableCol&gt;
    &lt;vb-tableCol label="地址" prop='address'&gt;&lt;/vb-tableCol&gt;
    &lt;vb-tableCol label="操作"&gt;
        &lt;template scope="row"&gt;
            &lt;vb-button state="info" @click="showItem(row)"&gt;选择&lt;/vb-button&gt;
        &lt;/template&gt;
    &lt;/vb-tableCol&gt;
&lt;/vb-table&gt;
                </code>
            </template>
        </vCodePanel>

    </vb-content>
</template>

<script>
    import vCodePanel from '../../components/codePanel/codePanel.vue'

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
            vCodePanel
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
