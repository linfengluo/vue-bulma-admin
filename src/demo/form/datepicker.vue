<!--
    Created by linfengluo@gmail.com on 2017/9/25.
-->
<template>
    <vContent>
        <vContentHeader>
            <vTitle level="3">datepicker</vTitle>
            <vBreadcrumb slot="right">
                <vBreadcrumbItem>Form</vBreadcrumbItem>
                <vBreadcrumbItem>Datepicker</vBreadcrumbItem>
            </vBreadcrumb>
        </vContentHeader>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">基本用法</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vDatePicker v-model="date1" :fullwidth="true" placeholder="only Date"></vDatePicker>
                    <vDatePicker v-model="date2" :fullwidth="true" placeholder="Date and Time" :enableTime="true"></vDatePicker>
                    <vDatePicker v-model="date13" :fullwidth="true" placeholder="格式化：YYYY年MM月DD日" format="YYYY年MM月DD日"></vDatePicker>
                    <vDatePicker v-model="date4" :fullwidth="true" :disabled="true" placeholder="disabled"></vDatePicker>
                    <vDatePicker v-model="date5" :fullwidth="true" :inline="true" placeholder="inline"></vDatePicker>
                </vCol>
                <vCol>
                    <p>enableTime: [Boolean]是否可选择时间</p>
                    <p>disabled: [Boolean]是否可点击</p>
                    <p>inline: [Boolean]是否一直显示日历</p>
                    <p>format: [String]格式化--年(YYYY)，月(MM)，日(DD)，小时(HH)，分(mm)，秒(ss)</p>
                    <p>disabled: [Boolean]是否可选择</p>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vDatePicker v-model="date1" :fullwidth="true" placeholder="only Date"&gt;&lt;/vDatePicker&gt;
&lt;vDatePicker v-model="date2" :fullwidth="true" placeholder="Date and Time" :enableTime="true"&gt;&lt;/vDatePicker&gt;
&lt;vDatePicker v-model="date13" :fullwidth="true" placeholder="格式化：YYYY年MM月DD日" format="YYYY年MM月DD日"&gt;&lt;/vDatePicker&gt;
&lt;vDatePicker v-model="date4" :fullwidth="true" :disabled="true" placeholder="disabled"&gt;&lt;/vDatePicker&gt;
&lt;vDatePicker v-model="date5" :fullwidth="true" :inline="true" placeholder="inline"&gt;&lt;/vDatePicker&gt;
                </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">Mode 类型</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vDatePicker v-model="date6" mode="single" :fullwidth="true" placeholder="single"></vDatePicker>
                    <vDatePicker v-model="date7" mode="multiple" :fullwidth="true" placeholder="multiple"></vDatePicker>
                    <vDatePicker v-model="date8" mode="range" :fullwidth="true" placeholder="range"></vDatePicker>
                </vCol>
                <vCol>
                    <p>mode: 日期选择类型</p>
                    <p>可选择的值有：single（单一日期）、multiple（多选）、range（范围）</p>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
    &lt;vDatePicker v-model="date6" mode="single" :fullwidth="true" placeholder="single"&gt;&lt;/vDatePicker&gt;
    &lt;vDatePicker v-model="date7" mode="multiple" :fullwidth="true" placeholder="multiple"&gt;&lt;/vDatePicker&gt;
    &lt;vDatePicker v-model="date8" mode="range" :fullwidth="true" placeholder="range"&gt;&lt;/vDatePicker&gt;
                </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">Limit 限制</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vDatePicker v-model="date14" :fullwidth="true" placeholder="maxDate： 2017-11-11" maxDate="2017-11-11"></vDatePicker>
                    <vDatePicker v-model="date15" :fullwidth="true" placeholder="minDate： 2017-09-15" minDate="2017-09-15"></vDatePicker>
                    <vDatePicker v-model="date16" :fullwidth="true" placeholder="disableDate: Array[function]" :disableDate="disableDate1"></vDatePicker>
                    <vDatePicker v-model="date17" :fullwidth="true" placeholder="disableDate: Array[date]" :disableDate="disableDate2"></vDatePicker>
                    <vDatePicker v-model="date18" :fullwidth="true" placeholder="disableDate: Array[object]" :disableDate="disableDate3"></vDatePicker>
                    <vDatePicker v-model="date19" :fullwidth="true" placeholder="enableDate: Array[function]" :enableDate="enableDate"></vDatePicker>
                </vCol>
                <vCol>
                    <p>maxDate/minDate： [String, Number, Date]最大日期/最小日期</p>
                    <p>disableDate： [Array] 不可选择的日期</p>
                    <p>enableDate： [Array]可以选择的日期</p>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vDatePicker v-model="date14" :fullwidth="true" placeholder="maxDate： 2017-11-11" maxDate="2017-11-11"&gt;&lt;/vDatePicker&gt;
&lt;vDatePicker v-model="date15" :fullwidth="true" placeholder="minDate： 2017-09-15" minDate="2017-09-15"&gt;&lt;/vDatePicker&gt;
&lt;vDatePicker v-model="date16" :fullwidth="true" placeholder="disableDate: Array[function]" :disableDate="disableDate1"&gt;&lt;/vDatePicker&gt;
&lt;vDatePicker v-model="date17" :fullwidth="true" placeholder="disableDate: Array[date]" :disableDate="disableDate2"&gt;&lt;/vDatePicker&gt;
&lt;vDatePicker v-model="date18" :fullwidth="true" placeholder="disableDate: Array[object]" :disableDate="disableDate3"&gt;&lt;/vDatePicker&gt;
&lt;vDatePicker v-model="date19" :fullwidth="true" placeholder="enableDate: Array[function]" :enableDate="enableDate"&gt;&lt;/vDatePicker&gt;
                </code><code class="javascript">
&lt;script&gt;
    export default {
        data() {
            return {
                date14: '',
                date15: '',
                date16: '',
                date17: '',
                date18: '',
                date19: '',
                enableDate: [
                    function (date) {
                        return (date.getDay() === 5 || date.getDay() === 6)
                    }
                ],
                disableDate1: [
                    function (date) {
                        return (date.getDay() === 5 || date.getDay() === 6)
                    }
                ],
                disableDate2: ['2017-10-11', '2017-10-12', '2017-10-15'],
                disableDate3: [
                    {
                        from: '2017-09-15',
                        to: '2017-09-30'
                    },
                    {
                        from: '2017-10-15',
                        to: '2017-10-30'
                    }
                ]
            }
        }
    }
&lt;/script&gt;

                </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">Size 大小</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vDatePicker v-model="date20" :fullwidth="true" placeholder="small" size="small"></vDatePicker>
                    <vDatePicker v-model="date21" :fullwidth="true" placeholder="normal"></vDatePicker>
                    <vDatePicker v-model="date22" :fullwidth="true" placeholder="medium" size="medium"></vDatePicker>
                    <vDatePicker v-model="date23" :fullwidth="true" placeholder="large" size="large"></vDatePicker>
                </vCol>
                <vCol >
                    通过 size 属性指定输入框的尺寸
                    可选择的值： small | medium | large
                </vCol>
            </vRow>
            <template slot="code">
                <code class="html">
&lt;vDatePicker v-model="date20" :fullwidth="true" placeholder="small" size="small"&gt;&lt;/vDatePicker&gt;
&lt;vDatePicker v-model="date21" :fullwidth="true" placeholder="normal"&gt;&lt;/vDatePicker&gt;
&lt;vDatePicker v-model="date22" :fullwidth="true" placeholder="medium" size="medium"&gt;&lt;/vDatePicker&gt;
&lt;vDatePicker v-model="date23" :fullwidth="true" placeholder="large" size="large"&gt;&lt;/vDatePicker&gt;
                </code>
            </template>
        </vCodePanel>


    </vContent>
</template>

<script>
    import { vForm, vFormItem } from '../../components/form'
    import vContent from '../../components/layout/content/content.vue'
    import vContentHeader from '../../components/layout/content/header.vue'
    import {vBreadcrumb, vBreadcrumbItem} from '../../components/breadcrumb'
    import vCodePanel from '../../components/codePanel/codePanel.vue'
    import {vRow, vCol} from '../../components/layout/columns/main'
    import vTitle from '../../components/title'
    import vDatePicker from '../../components/datepicker'
    export default {

        data() {
            return {
                date1: '',
                date2: '',
                date3: '',
                date4: '',
                date5: '',
                date6: '',
                date7: '',
                date8: '',
                date9: '',
                date10: '',
                date11: '',
                date12: '',
                date13: '',
                date14: '',
                date15: '',
                date16: '',
                date17: '',
                date18: '',
                date19: '',
                date20: '',
                date21: '',
                date22: '',
                date23: '',
                enableDate: [
                    function (date) {
                        return (date.getDay() === 5 || date.getDay() === 6)
                    }
                ],
                disableDate1: [
                    function (date) {
                        return (date.getDay() === 5 || date.getDay() === 6)
                    }
                ],
                disableDate2: ['2017-10-11', '2017-10-12', '2017-10-15'],
                disableDate3: [
                    {
                        from: '2017-09-15',
                        to: '2017-09-30'
                    },
                    {
                        from: '2017-10-15',
                        to: '2017-10-30'
                    }
                ]
            }
        },
        components: {
            vForm,
            vFormItem,
            vContent,
            vTitle,
            vContentHeader,
            vBreadcrumb,
            vBreadcrumbItem,
            vCodePanel,
            vRow,
            vCol,
            vDatePicker
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
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
