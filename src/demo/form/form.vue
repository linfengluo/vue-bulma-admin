<!--
    Created by linfengluo@gmail.com on 2017/9/22.
-->
<template>
    <vContent>
        <vContentHeader>
            <vTitle level="3">Form</vTitle>
            <vBreadcrumb slot="right">
                <vBreadcrumbItem>Form</vBreadcrumbItem>
                <vBreadcrumbItem>Form</vBreadcrumbItem>
            </vBreadcrumb>
        </vContentHeader>
        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">基本用法</vTitle>
                <p>包括各种表单项</p>
            </vCol>
        </vRow>

        <vCodePanel>
            <vRow>
                <vCol :size="7">
                    <vForm>
                        <vFormItem label="活动名称">
                            <vInput v-model="formData1.name"></vInput>
                        </vFormItem>
                        <vFormItem label="活动区域">
                            <vSelectGroup v-model="formData1.area">
                                <vSelectItem value="0">区域一</vSelectItem>
                                <vSelectItem value="1">区域二</vSelectItem>
                                <vSelectItem value="2">区域三</vSelectItem>
                            </vSelectGroup>
                        </vFormItem>
                        <vFormItem label="活动日期">
                            <vDatepicker v-model="formData1.date" :fullwidth="true"></vDatepicker>
                        </vFormItem>
                        <vFormItem label="活动提醒">
                            <vSwitch v-model="formData1.notice"></vSwitch>
                        </vFormItem>
                        <vFormItem label="活动性质">
                            <vCheckBoxGroup v-model="formData1.nature">
                                <vCheckBox label="聚会">聚会</vCheckBox>
                                <vCheckBox label="开会">开会</vCheckBox>
                                <vCheckBox label="团建">团建</vCheckBox>
                                <vCheckBox label="吹水">吹水</vCheckBox>
                            </vCheckBoxGroup>
                        </vFormItem>
                        <vFormItem label="有美女">
                            <vRadio v-model="formData1.hasGirl" name="girl" label="0">想太多</vRadio>
                            <vRadio v-model="formData1.hasGirl" name="girl" label="1">必须有</vRadio>
                        </vFormItem>
                        <vFormItem label="活动说明">
                            <vTextarea v-model="formData1.intor"></vTextarea>
                        </vFormItem>

                    </vForm>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vForm&gt;
    &lt;vFormItem label="活动名称"&gt;
        &lt;vInput v-model="formData1.name"&gt;&lt;/vInput&gt;
    &lt;/vFormItem&gt;
    &lt;vFormItem label="活动区域"&gt;
        &lt;vSelectGroup v-model="formData1.area"&gt;
            &lt;vSelectItem value="0"&gt;区域一&lt;/vSelectItem&gt;
            &lt;vSelectItem value="1"&gt;区域二&lt;/vSelectItem&gt;
            &lt;vSelectItem value="2"&gt;区域三&lt;/vSelectItem&gt;
        &lt;/vSelectGroup&gt;
    &lt;/vFormItem&gt;
    &lt;vFormItem label="活动日期"&gt;
        &lt;vDatepicker v-model="formData1.date"&gt;&lt;/vDatepicker&gt;
    &lt;/vFormItem&gt;
    &lt;vFormItem label="活动提醒"&gt;
        &lt;vSwitch v-model="formData1.notice"&gt;&lt;/vSwitch&gt;
    &lt;/vFormItem&gt;
    &lt;vFormItem label="活动性质"&gt;
        &lt;vCheckBoxGroup v-model="formData1.nature"&gt;
            &lt;vCheckBox label="聚会"&gt;聚会&lt;/vCheckBox&gt;
            &lt;vCheckBox label="开会"&gt;开会&lt;/vCheckBox&gt;
            &lt;vCheckBox label="团建"&gt;团建&lt;/vCheckBox&gt;
            &lt;vCheckBox label="吹水"&gt;吹水&lt;/vCheckBox&gt;
        &lt;/vCheckBoxGroup&gt;
    &lt;/vFormItem&gt;
    &lt;vFormItem label="有美女"&gt;
        &lt;vRadio v-model="formData1.hasGirl" name="girl" label="0"&gt;想太多&lt;/vRadio&gt;
        &lt;vRadio v-model="formData1.hasGirl" name="girl" label="1"&gt;必须有&lt;/vRadio&gt;
    &lt;/vFormItem&gt;
    &lt;vFormItem label="活动说明"&gt;
        &lt;vTextarea v-model="formData1.intor"&gt;&lt;/vTextarea&gt;
    &lt;/vFormItem&gt;
&lt;/vForm&gt;
                </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">行内表单</vTitle>
                <p>当垂直方向空间受限且表单较简单时，可以在一行内放置表单。</p>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol>
                    <vForm :inline="true">
                        <vFormItem label="活动名称">
                            <vInput v-model="formData2.name"></vInput>
                        </vFormItem>
                        <vFormItem label="活动区域">
                            <vSelectGroup v-model="formData2.area">
                                <vSelectItem value="0">区域一</vSelectItem>
                                <vSelectItem value="1">区域二</vSelectItem>
                                <vSelectItem value="2">区域三</vSelectItem>
                            </vSelectGroup>
                        </vFormItem>
                        <vFormItem>
                            <vButton state="primary">button</vButton>
                        </vFormItem>
                    </vForm>
                </vCol>
            </vRow>
        </vCodePanel>


        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">Align 对齐</vTitle>
                <p>对齐方式</p>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol>
                    <vRadioGroup v-model="align">
                        <vRadioBtn name="align" label="left">左对齐</vRadioBtn>
                        <vRadioBtn name="align" label="right">右对齐</vRadioBtn>
                        <vRadioBtn name="align" label="centered">居中对齐</vRadioBtn>
                        <vRadioBtn name="align" label="top">上对齐</vRadioBtn>
                    </vRadioGroup>
                </vCol>
            </vRow>
            <vRow>
                <vCol :size="7">
                    <vForm :labelAlign="align" labelWidth="80">
                        <vFormItem label="名称">
                            <vInput v-model="formData3.name"></vInput>
                        </vFormItem>
                        <vFormItem label="活动说明">
                            <vTextarea v-model="formData3.intor"></vTextarea>
                        </vFormItem>
                    </vForm>
                </vCol>
            </vRow>
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
    import vInput from '../../components/input'
    import {vCheckBox, vCheckBoxGroup} from '../../components/checkBox'
    import {vRadio, vRadioGroup, vRadioBtn} from '../../components/radio'
    import {vSelectItem, vSelectGroup} from '../../components/selecter'
    import vDatepicker from '../../components/datepicker'
    import vSwitch from '../../components/switch'
    import vTextarea from '../../components/textarea'
    import {vButton} from '../../components/button'
    export default {
        data() {
            return {
                align: 'right',
                formData1: {
                    area: '',
                    name: '',
                    date: '',
                    notice: true,
                    nature: [],
                    hasGirl: '1',
                    intor: ''
                },
                formData2: {
                    area: '',
                    name: ''
                },
                formData3: {
                    intor: '',
                    name: ''
                }
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
            vInput,
            vCheckBox,
            vCheckBoxGroup,
            vRadio,
            vRadioBtn,
            vRadioGroup,
            vSelectGroup,
            vSelectItem,
            vDatepicker,
            vSwitch,
            vTextarea,
            vButton
        },
        mixins: [],
        created(){
        },
        mounted(){
        },
        watch: {},
        computed: {},
        methods: {}
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
