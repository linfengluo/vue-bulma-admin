<!--
    Created by linfengluo@gmail.com on 2017/9/22.
-->
<template>
    <vContent>
        <vContentHeader>
            <vTitle level="3">alert</vTitle>
            <vBreadcrumb slot="right">
                <vBreadcrumbItem>Notify</vBreadcrumbItem>
                <vBreadcrumbItem>Alert</vBreadcrumbItem>
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
                    <Alert title="default" message="default message">default</Alert>
                    <Alert title="light" message="light message" type="light">light</Alert>
                    <Alert title="primary" message="primary message" type="primary">primary</Alert>
                    <Alert title="Info" message="info message" type="info">Info</Alert>
                    <Alert title="Success" message="success message" type="success">Success</Alert>
                    <Alert title="Warning" message="warning message" type="warning">Warning</Alert>
                    <Alert title="Danger" message="danger message" type="danger">Danger</Alert>
                    <Alert title="不可关闭" message="danger message" type="danger" :closeable="false">不可关闭</Alert>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;Alert title="default" message="default message"&gt;default&lt;/Alert&gt;
&lt;Alert title="light" message="light message" type="light"&gt;light&lt;/Alert&gt;
&lt;Alert title="primary" message="primary message" type="primary"&gt;primary&lt;/Alert&gt;
&lt;Alert title="Info" message="info message" type="info"&gt;Info&lt;/Alert&gt;
&lt;Alert title="Success" message="success message" type="success"&gt;Success&lt;/Alert&gt;
&lt;Alert title="Warning" message="warning message" type="warning"&gt;Warning&lt;/Alert&gt;
&lt;Alert title="Danger" message="danger message" type="danger"&gt;Danger&lt;/Alert&gt;
&lt;Alert title="不可关闭" message="danger message" type="danger" :closeable="false"&gt;不可关闭&lt;/Alert&gt;
                </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">header 大小</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol>
                    <Alert message="default message">default</Alert>
                    <Alert message="light message" type="light">light</Alert>
                    <Alert message="primary message" type="primary">primary</Alert>
                    <Alert message="info message" type="info">Info</Alert>
                    <Alert message="success message" type="success">Success</Alert>
                    <Alert message="warning message" type="warning">Warning</Alert>
                    <Alert message="danger message" type="danger">Danger</Alert>
                </vCol>

            </vRow>
            <template slot="code" >
                <code class="html">
&lt;Alert message="default message"&gt;default&lt;/Alert&gt;
&lt;Alert message="light message" type="light"&gt;light&lt;/Alert&gt;
&lt;Alert message="primary message" type="primary"&gt;primary&lt;/Alert&gt;
&lt;Alert message="info message" type="info"&gt;Info&lt;/Alert&gt;
&lt;Alert message="success message" type="success"&gt;Success&lt;/Alert&gt;
&lt;Alert message="warning message" type="warning"&gt;Warning&lt;/Alert&gt;
&lt;Alert message="danger message" type="danger"&gt;Danger&lt;/Alert&gt;
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
                <vCol>
                    <Alert title="primary" message="primary message" type="primary" size="small">primary</Alert>
                    <Alert title="primary" message="primary message" type="primary">primary</Alert>
                    <Alert title="primary" message="primary message" type="primary" size="medium">primary</Alert>
                    <Alert title="primary" message="primary message" type="primary" size="large">primary</Alert>
                </vCol>

            </vRow>
            <template slot="code" >
                <code class="html">
&lt;Alert title="primary" message="primary message" type="primary" size="small"&gt;primary&lt;/Alert&gt;
&lt;Alert title="primary" message="primary message" type="primary"&gt;primary&lt;/Alert&gt;
&lt;Alert title="primary" message="primary message" type="primary" size="medium"&gt;primary&lt;/Alert&gt;
&lt;Alert title="primary" message="primary message" type="primary" size="large"&gt;primary&lt;/Alert&gt;
                </code>
            </template>
        </vCodePanel>
    </vContent>
</template>

<script>
    import vContent from '../../components/layout/content/content.vue'
    import vContentHeader from '../../components/layout/content/header.vue'
    import {vBreadcrumb, vBreadcrumbItem} from '../../components/breadcrumb/index'
    import vCodePanel from '../../components/codePanel/codePanel.vue'
    import vTitle from '../../components/title'
    import {vRow, vCol} from '../../components/layout/columns/main'
    import Alert from '../../components/alert'
    export default {
        data() {
            return {}
        },
        components: {
            vContent,
            vTitle,
            vContentHeader,
            vBreadcrumb,
            vBreadcrumbItem,
            vCodePanel,
            vRow,
            vCol,
            Alert
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
