<!--
    Created by linfengluo@gmail.com on 2017/9/25.
-->
<template>
    <vb-content>
        <vb-contentHeader>
            <vb-title level="3">datepicker</vb-title>
            <vb-breadcrumbGroup slot="right">
                <vb-breadcrumb>Form</vb-breadcrumb>
                <vb-breadcrumb>Datepicker</vb-breadcrumb>
            </vb-breadcrumbGroup>
        </vb-contentHeader>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">基本用法</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-datepicker v-model="date1" :fullwidth="true" placeholder="only Date"></vb-datepicker>
                    <vb-datepicker v-model="date2" :fullwidth="true" placeholder="Date and Time" :enableTime="true"></vb-datepicker>
                    <vb-datepicker v-model="date13" :fullwidth="true" placeholder="格式化：YYYY年MM月DD日" format="YYYY年MM月DD日"></vb-datepicker>
                    <vb-datepicker v-model="date4" :fullwidth="true" :disabled="true" placeholder="disabled"></vb-datepicker>
                    <vb-datepicker v-model="date5" :fullwidth="true" :inline="true" placeholder="inline"></vb-datepicker>
                </vb-col>
                <vb-col>
                    <p>enableTime: [Boolean]是否可选择时间</p>
                    <p>disabled: [Boolean]是否可点击</p>
                    <p>inline: [Boolean]是否一直显示日历</p>
                    <p>format: [String]格式化--年(YYYY)，月(MM)，日(DD)，小时(HH)，分(mm)，秒(ss)</p>
                    <p>disabled: [Boolean]是否可选择</p>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-datepicker v-model="date1" :fullwidth="true" placeholder="only Date"&gt;&lt;/vb-datepicker&gt;
&lt;vb-datepicker v-model="date2" :fullwidth="true" placeholder="Date and Time" :enableTime="true"&gt;&lt;/vb-datepicker&gt;
&lt;vb-datepicker v-model="date13" :fullwidth="true" placeholder="格式化：YYYY年MM月DD日" format="YYYY年MM月DD日"&gt;&lt;/vb-datepicker&gt;
&lt;vb-datepicker v-model="date4" :fullwidth="true" :disabled="true" placeholder="disabled"&gt;&lt;/vb-datepicker&gt;
&lt;vb-datepicker v-model="date5" :fullwidth="true" :inline="true" placeholder="inline"&gt;&lt;/vb-datepicker&gt;
                </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">Mode 类型</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-datepicker v-model="date6" mode="single" :fullwidth="true" placeholder="single"></vb-datepicker>
                    <vb-datepicker v-model="date7" mode="multiple" :fullwidth="true" placeholder="multiple"></vb-datepicker>
                    <vb-datepicker v-model="date8" mode="range" :fullwidth="true" placeholder="range"></vb-datepicker>
                </vb-col>
                <vb-col>
                    <p>mode: 日期选择类型</p>
                    <p>可选择的值有：single（单一日期）、multiple（多选）、range（范围）</p>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
    &lt;vb-datepicker v-model="date6" mode="single" :fullwidth="true" placeholder="single"&gt;&lt;/vb-datepicker&gt;
    &lt;vb-datepicker v-model="date7" mode="multiple" :fullwidth="true" placeholder="multiple"&gt;&lt;/vb-datepicker&gt;
    &lt;vb-datepicker v-model="date8" mode="range" :fullwidth="true" placeholder="range"&gt;&lt;/vb-datepicker&gt;
                </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">Limit 限制</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-datepicker v-model="date14" :fullwidth="true" placeholder="maxDate： 2017-11-11" maxDate="2017-11-11"></vb-datepicker>
                    <vb-datepicker v-model="date15" :fullwidth="true" placeholder="minDate： 2017-09-15" minDate="2017-09-15"></vb-datepicker>
                    <vb-datepicker v-model="date16" :fullwidth="true" placeholder="disableDate: Array[function]" :disableDate="disableDate1"></vb-datepicker>
                    <vb-datepicker v-model="date17" :fullwidth="true" placeholder="disableDate: Array[date]" :disableDate="disableDate2"></vb-datepicker>
                    <vb-datepicker v-model="date18" :fullwidth="true" placeholder="disableDate: Array[object]" :disableDate="disableDate3"></vb-datepicker>
                    <vb-datepicker v-model="date19" :fullwidth="true" placeholder="enableDate: Array[function]" :enableDate="enableDate"></vb-datepicker>
                </vb-col>
                <vb-col>
                    <p>maxDate/minDate： [String, Number, Date]最大日期/最小日期</p>
                    <p>disableDate： [Array] 不可选择的日期</p>
                    <p>enableDate： [Array]可以选择的日期</p>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-datepicker v-model="date14" :fullwidth="true" placeholder="maxDate： 2017-11-11" maxDate="2017-11-11"&gt;&lt;/vb-datepicker&gt;
&lt;vb-datepicker v-model="date15" :fullwidth="true" placeholder="minDate： 2017-09-15" minDate="2017-09-15"&gt;&lt;/vb-datepicker&gt;
&lt;vb-datepicker v-model="date16" :fullwidth="true" placeholder="disableDate: Array[function]" :disableDate="disableDate1"&gt;&lt;/vb-datepicker&gt;
&lt;vb-datepicker v-model="date17" :fullwidth="true" placeholder="disableDate: Array[date]" :disableDate="disableDate2"&gt;&lt;/vb-datepicker&gt;
&lt;vb-datepicker v-model="date18" :fullwidth="true" placeholder="disableDate: Array[object]" :disableDate="disableDate3"&gt;&lt;/vb-datepicker&gt;
&lt;vb-datepicker v-model="date19" :fullwidth="true" placeholder="enableDate: Array[function]" :enableDate="enableDate"&gt;&lt;/vb-datepicker&gt;
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

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">Size 大小</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-datepicker v-model="date20" :fullwidth="true" placeholder="small" size="small"></vb-datepicker>
                    <vb-datepicker v-model="date21" :fullwidth="true" placeholder="normal"></vb-datepicker>
                    <vb-datepicker v-model="date22" :fullwidth="true" placeholder="medium" size="medium"></vb-datepicker>
                    <vb-datepicker v-model="date23" :fullwidth="true" placeholder="large" size="large"></vb-datepicker>
                </vb-col>
                <vb-col >
                    通过 size 属性指定输入框的尺寸
                    可选择的值： small | medium | large
                </vb-col>
            </vb-row>
            <template slot="code">
                <code class="html">
&lt;vb-datepicker v-model="date20" :fullwidth="true" placeholder="small" size="small"&gt;&lt;/vb-datepicker&gt;
&lt;vb-datepicker v-model="date21" :fullwidth="true" placeholder="normal"&gt;&lt;/vb-datepicker&gt;
&lt;vb-datepicker v-model="date22" :fullwidth="true" placeholder="medium" size="medium"&gt;&lt;/vb-datepicker&gt;
&lt;vb-datepicker v-model="date23" :fullwidth="true" placeholder="large" size="large"&gt;&lt;/vb-datepicker&gt;
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
            vCodePanel
        }
    }
</script>

