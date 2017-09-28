<!--
    Created by linfengluo@gmail.com on 2017/9/25.
-->
<template>
    <vContent>
        <vContentHeader>
            <vTitle level="3">textarea</vTitle>
            <vBreadcrumb slot="right">
                <vBreadcrumbItem>Form</vBreadcrumbItem>
                <vBreadcrumbItem>Textarea</vBreadcrumbItem>
            </vBreadcrumb>
        </vContentHeader>
        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">基本用法</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol >
                    <vTextArea v-model="text1"></vTextArea>
                </vCol>
            </vRow>
            <vRow>
                <vCol >
                    <vTextArea v-model="text2" :disabled="true" placeholder="disabled input"></vTextArea>
                </vCol>
            </vRow>
            <vRow>
                <vCol >
                    <vTextArea v-model="text3" :readOnly="true" placeholder="readOnly"></vTextArea>
                </vCol>
            </vRow>
            <vRow>
                <vCol >
                    <vTextArea v-model="text4" :rows="5" placeholder="rows = 5"></vTextArea>
                </vCol>
            </vRow>
            <vRow>
                <vCol >
                    <p>disabled （Boolean）: 是否可输入</p>
                    <p>readOnly （Boolean）: 是否只读</p>
                    <p>rows （String, Number）: 行数</p>
                    <p>placeholder （String）: placeholder</p>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vTextArea v-model="text1"&gt;&lt;/vTextArea&gt;
&lt;vTextArea v-model="text2" :disabled="true" placeholder="disabled input"&gt;&lt;/vTextArea&gt;
&lt;vTextArea v-model="text3" :readOnly="true" placeholder="readOnly"&gt;&lt;/vTextArea&gt;
&lt;vTextArea v-model="text4" :rows="5" placeholder="rows = 5"&gt;&lt;/vTextArea&gt;
                </code><code class="javascript">
&lt;script&gt;
    import vTextArea from '../../components/textarea'

    export default {
        data() {
            return {
                text1: '',
                text2: '',
                text3: '',
                text4: ''
            }
        },
        components: {
            vTextArea
        }
    }
&lt;/script&gt;
                </code>
            </template>
        </vCodePanel>


        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">color 颜色</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol >
                    <vTextArea v-model="text6" color="primary" placeholder="color = primary"></vTextArea>
                </vCol>
            </vRow>
            <vRow>
                <vCol >
                    <vTextArea v-model="text7" color="info" placeholder="color = info"></vTextArea>
                </vCol>
            </vRow>
            <vRow>
                <vCol >
                    <vTextArea v-model="text8" color="warning" placeholder="color = warning"></vTextArea>
                </vCol>
            </vRow>
            <vRow>
                <vCol >
                    <vTextArea v-model="text9" color="danger" placeholder="color = danger"></vTextArea>
                </vCol>
            </vRow>
            <vRow>
                <vCol >
                    color （String）: 颜色，可选值primary、info、warning、danger
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vTextArea v-model="text6" color="primary" placeholder="color = primary"&gt;&lt;/vTextArea&gt;
&lt;vTextArea v-model="text7" color="info" placeholder="color = info"&gt;&lt;/vTextArea&gt;
&lt;vTextArea v-model="text8" color="warning" placeholder="color = warning"&gt;&lt;/vTextArea&gt;
&lt;vTextArea v-model="text9" color="danger" placeholder="color = danger"&gt;&lt;/vTextArea&gt;
                </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">size 大小</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol >
                    <vTextArea v-model="text10" size="small" placeholder="size = small"></vTextArea>
                </vCol>
            </vRow>
            <vRow>
                <vCol >
                    <vTextArea v-model="text11" placeholder="default"></vTextArea>
                </vCol>
            </vRow>
            <vRow>
                <vCol >
                    <vTextArea v-model="text12" size="medium" placeholder="size = medium"></vTextArea>
                </vCol>
            </vRow>
            <vRow>
                <vCol >
                    <vTextArea v-model="text13" size="large" placeholder="size = large"></vTextArea>
                </vCol>
            </vRow>
            <vRow>
                <vCol >
                    size （String）: 大小，small、medium、large
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vTextArea v-model="text10" size="small" placeholder="size = small"&gt;&lt;/vTextArea&gt;
&lt;vTextArea v-model="text11" placeholder="default"&gt;&lt;/vTextArea&gt;
&lt;vTextArea v-model="text12" size="medium" placeholder="size = medium"&gt;&lt;/vTextArea&gt;
&lt;vTextArea v-model="text13" size="large" placeholder="size = large"&gt;&lt;/vTextArea&gt;
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
    import {vRow, vCol} from '../../components/layout/columns/main'
    import vTitle from '../../components/title'
    import {vButton} from '../../components/button'
    import vTextArea from '../../components/textarea'

    export default {
        data() {
            return {
                text1: '',
                text2: '',
                text3: '',
                text4: '',
                text5: '',
                text6: '',
                text7: '',
                text8: '',
                text9: '',
                text10: '',
                text11: '',
                text12: '',
                text13: ''
            }
        },
        components: {
            vTextArea,
            vContent,
            vTitle,
            vContentHeader,
            vBreadcrumb,
            vBreadcrumbItem,
            vCodePanel,
            vRow,
            vCol,
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
