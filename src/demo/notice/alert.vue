<!--
    Created by linfengluo@gmail.com on 2017/9/22.
-->
<template>
    <vb-content>
        <vb-contentHeader>
            <vb-title level="3">vb-alert</vb-title>
            <vb-breadcrumbGroup slot="right">
                <vb-breadcrumb>Notify</vb-breadcrumb>
                <vb-breadcrumb>vb-alert</vb-breadcrumb>
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
                    <vb-alert title="default" message="default message">default</vb-alert>
                    <vb-alert title="light" message="light message" type="light">light</vb-alert>
                    <vb-alert title="primary" message="primary message" type="primary">primary</vb-alert>
                    <vb-alert title="Info" message="info message" type="info">Info</vb-alert>
                    <vb-alert title="Success" message="success message" type="success">Success</vb-alert>
                    <vb-alert title="Warning" message="warning message" type="warning">Warning</vb-alert>
                    <vb-alert title="Danger" message="danger message" type="danger">Danger</vb-alert>
                    <vb-alert title="不可关闭" message="danger message" type="danger" :closeable="false">不可关闭</vb-alert>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-alert title="default" message="default message"&gt;default&lt;/vb-alert&gt;
&lt;vb-alert title="light" message="light message" type="light"&gt;light&lt;/vb-alert&gt;
&lt;vb-alert title="primary" message="primary message" type="primary"&gt;primary&lt;/vb-alert&gt;
&lt;vb-alert title="Info" message="info message" type="info"&gt;Info&lt;/vb-alert&gt;
&lt;vb-alert title="Success" message="success message" type="success"&gt;Success&lt;/vb-alert&gt;
&lt;vb-alert title="Warning" message="warning message" type="warning"&gt;Warning&lt;/vb-alert&gt;
&lt;vb-alert title="Danger" message="danger message" type="danger"&gt;Danger&lt;/vb-alert&gt;
&lt;vb-alert title="不可关闭" message="danger message" type="danger" :closeable="false"&gt;不可关闭&lt;/vb-alert&gt;
                </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">header 大小</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    <vb-alert message="default message">default</vb-alert>
                    <vb-alert message="light message" type="light">light</vb-alert>
                    <vb-alert message="primary message" type="primary">primary</vb-alert>
                    <vb-alert message="info message" type="info">Info</vb-alert>
                    <vb-alert message="success message" type="success">Success</vb-alert>
                    <vb-alert message="warning message" type="warning">Warning</vb-alert>
                    <vb-alert message="danger message" type="danger">Danger</vb-alert>
                </vb-col>

            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-alert message="default message"&gt;default&lt;/vb-alert&gt;
&lt;vb-alert message="light message" type="light"&gt;light&lt;/vb-alert&gt;
&lt;vb-alert message="primary message" type="primary"&gt;primary&lt;/vb-alert&gt;
&lt;vb-alert message="info message" type="info"&gt;Info&lt;/vb-alert&gt;
&lt;vb-alert message="success message" type="success"&gt;Success&lt;/vb-alert&gt;
&lt;vb-alert message="warning message" type="warning"&gt;Warning&lt;/vb-alert&gt;
&lt;vb-alert message="danger message" type="danger"&gt;Danger&lt;/vb-alert&gt;
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
                <vb-col>
                    <vb-alert title="primary" message="primary message" type="primary" size="small">primary</vb-alert>
                    <vb-alert title="primary" message="primary message" type="primary">primary</vb-alert>
                    <vb-alert title="primary" message="primary message" type="primary" size="medium">primary</vb-alert>
                    <vb-alert title="primary" message="primary message" type="primary" size="large">primary</vb-alert>
                </vb-col>

            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-alert title="primary" message="primary message" type="primary" size="small"&gt;primary&lt;/vb-alert&gt;
&lt;vb-alert title="primary" message="primary message" type="primary"&gt;primary&lt;/vb-alert&gt;
&lt;vb-alert title="primary" message="primary message" type="primary" size="medium"&gt;primary&lt;/vb-alert&gt;
&lt;vb-alert title="primary" message="primary message" type="primary" size="large"&gt;primary&lt;/vb-alert&gt;
                </code>
            </template>
        </vCodePanel>
    </vb-content>
</template>

<script>
    import vCodePanel from '../../components/codePanel/codePanel.vue'
    export default {
        components: {
            vCodePanel
        }
    }
</script>
