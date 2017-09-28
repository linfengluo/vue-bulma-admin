<!--
    Created by linfengluo@gmail.com on 2017/9/22.
-->
<template>
    <vb-content>
        <vb-contentHeader>
            <vb-title level="3">Form</vb-title>
            <vb-breadcrumbGroup slot="right">
                <vb-breadcrumb>Form</vb-breadcrumb>
                <vb-breadcrumb>Form</vb-breadcrumb>
            </vb-breadcrumbGroup>
        </vb-contentHeader>
        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">基本用法</vb-title>
                <p>包括各种表单项</p>
            </vb-col>
        </vb-row>

        <vCodePanel>
            <vb-row>
                <vb-col :size="7">
                    <vb-form>
                        <vb-formItem label="活动名称">
                            <vb-input v-model="formData1.name"></vb-input>
                        </vb-formItem>
                        <vb-formItem label="活动区域">
                            <vb-selecter v-model="formData1.area">
                                <vb-selecterItem value="0">区域一</vb-selecterItem>
                                <vb-selecterItem value="1">区域二</vb-selecterItem>
                                <vb-selecterItem value="2">区域三</vb-selecterItem>
                            </vb-selecter>
                        </vb-formItem>
                        <vb-formItem label="活动日期">
                            <vb-datepicker v-model="formData1.date" :fullwidth="true"></vb-datepicker>
                        </vb-formItem>
                        <vb-formItem label="活动提醒">
                            <vb-switch v-model="formData1.notice"></vb-switch>
                        </vb-formItem>
                        <vb-formItem label="活动性质">
                            <vb-checkboxGroup v-model="formData1.nature">
                                <vb-checkbox label="聚会">聚会</vb-checkbox>
                                <vb-checkbox label="开会">开会</vb-checkbox>
                                <vb-checkbox label="团建">团建</vb-checkbox>
                                <vb-checkbox label="吹水">吹水</vb-checkbox>
                            </vb-checkboxGroup>
                        </vb-formItem>
                        <vb-formItem label="有美女">
                            <vb-radio v-model="formData1.hasGirl" name="girl" label="0">想太多</vb-radio>
                            <vb-radio v-model="formData1.hasGirl" name="girl" label="1">必须有</vb-radio>
                        </vb-formItem>
                        <vb-formItem label="活动说明">
                            <vb-textarea v-model="formData1.intor"></vb-textarea>
                        </vb-formItem>
                    </vb-form>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-form&gt;
    &lt;vb-formItem label="活动名称"&gt;
        &lt;vb-input v-model="formData1.name"&gt;&lt;/vb-input&gt;
    &lt;/vb-formItem&gt;
    &lt;vb-formItem label="活动区域"&gt;
        &lt;vb-selecter v-model="formData1.area"&gt;
            &lt;vb-selecterItem value="0"&gt;区域一&lt;/vb-selecterItem&gt;
            &lt;vb-selecterItem value="1"&gt;区域二&lt;/vb-selecterItem&gt;
            &lt;vb-selecterItem value="2"&gt;区域三&lt;/vb-selecterItem&gt;
        &lt;/vb-selecter&gt;
    &lt;/vb-formItem&gt;
    &lt;vb-formItem label="活动日期"&gt;
        &lt;vb-datepicker v-model="formData1.date" :fullwidth="true"&gt;&lt;/vb-datepicker&gt;
    &lt;/vb-formItem&gt;
    &lt;vb-formItem label="活动提醒"&gt;
        &lt;vb-switch v-model="formData1.notice"&gt;&lt;/vb-switch&gt;
    &lt;/vb-formItem&gt;
    &lt;vb-formItem label="活动性质"&gt;
        &lt;vb-checkboxGroup v-model="formData1.nature"&gt;
            &lt;vb-checkbox label="聚会"&gt;聚会&lt;/vb-checkbox&gt;
            &lt;vb-checkbox label="开会"&gt;开会&lt;/vb-checkbox&gt;
            &lt;vb-checkbox label="团建"&gt;团建&lt;/vb-checkbox&gt;
            &lt;vb-checkbox label="吹水"&gt;吹水&lt;/vb-checkbox&gt;
        &lt;/vb-checkboxGroup&gt;
    &lt;/vb-formItem&gt;
    &lt;vb-formItem label="有美女"&gt;
        &lt;vb-radio v-model="formData1.hasGirl" name="girl" label="0"&gt;想太多&lt;/vb-radio&gt;
        &lt;vb-radio v-model="formData1.hasGirl" name="girl" label="1"&gt;必须有&lt;/vb-radio&gt;
    &lt;/vb-formItem&gt;
    &lt;vb-formItem label="活动说明"&gt;
        &lt;vb-textarea v-model="formData1.intor"&gt;&lt;/vb-textarea&gt;
    &lt;/vb-formItem&gt;
&lt;/vb-form&gt;
                </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">行内表单</vb-title>
                <p>当垂直方向空间受限且表单较简单时，可以在一行内放置表单。</p>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    <vb-form :inline="true">
                        <vb-formItem label="活动名称">
                            <vb-input v-model="formData2.name"></vb-input>
                        </vb-formItem>
                        <vb-formItem label="活动区域">
                            <vb-selecter v-model="formData2.area">
                                <vb-selecterItem value="0">区域一</vb-selecterItem>
                                <vb-selecterItem value="1">区域二</vb-selecterItem>
                                <vb-selecterItem value="2">区域三</vb-selecterItem>
                            </vb-selecter>
                        </vb-formItem>
                        <vb-formItem>
                            <vb-button state="primary">button</vb-button>
                        </vb-formItem>
                    </vb-form>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    inline: [Boolean]是否行内表单
                </vb-col>
            </vb-row>
            <template slot="code">
                <code class="html">
&lt;vb-form :inline="true"&gt;
    &lt;vb-formItem label="活动名称"&gt;
        &lt;vb-input v-model="formData2.name"&gt;&lt;/vb-input&gt;
    &lt;/vb-formItem&gt;
    &lt;vb-formItem label="活动区域"&gt;
        &lt;vb-selecter v-model="formData2.area"&gt;
            &lt;vb-selecterItem value="0"&gt;区域一&lt;/vb-selecterItem&gt;
            &lt;vb-selecterItem value="1"&gt;区域二&lt;/vb-selecterItem&gt;
            &lt;vb-selecterItem value="2"&gt;区域三&lt;/vb-selecterItem&gt;
        &lt;/vb-selecter&gt;
    &lt;/vb-formItem&gt;
    &lt;vb-formItem&gt;
        &lt;vb-button state="primary"&gt;button&lt;/vb-button&gt;
    &lt;/vb-formItem&gt;
&lt;/vb-form&gt;
                </code>
            </template>
        </vCodePanel>


        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">Align 对齐</vb-title>
                <p>对齐方式</p>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    <vb-radioGroup v-model="align">
                        <vb-radioBtn name="align" label="left">左对齐</vb-radioBtn>
                        <vb-radioBtn name="align" label="right">右对齐</vb-radioBtn>
                        <vb-radioBtn name="align" label="centered">居中对齐</vb-radioBtn>
                        <vb-radioBtn name="align" label="top">上对齐</vb-radioBtn>
                    </vb-radioGroup>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col :size="7">
                    <vb-form :labelAlign="align" labelWidth="80">
                        <vb-formItem label="名称">
                            <vb-input v-model="formData3.name"></vb-input>
                        </vb-formItem>
                        <vb-formItem label="活动说明">
                            <vb-textarea v-model="formData3.intor"></vb-textarea>
                        </vb-formItem>
                    </vb-form>
                </vb-col>
                <vb-col>
                    通过 labelAlign 属性指定label的对齐方式
                    可选择的值： left | right | centered | top
                </vb-col>
            </vb-row>
            <template slot="code">
                <code class="html">
&lt;vb-form labelAlign="right" labelWidth="80"&gt;
    &lt;vb-formItem label="名称"&gt;
        &lt;vb-input v-model="formData3.name"&gt;&lt;/vb-input&gt;
    &lt;/vb-formItem&gt;
    &lt;vb-formItem label="活动说明"&gt;
        &lt;vb-textarea v-model="formData3.intor"&gt;&lt;/vb-textarea&gt;
    &lt;/vb-formItem&gt;
&lt;/vb-form&gt;
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
            vCodePanel
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
