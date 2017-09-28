<!--
    Created by linfengluo@gmail.com on 2017/9/25.
-->
<template>
    <vb-content>
        <vb-contentHeader>
            <vb-title level="3">textarea</vb-title>
            <vb-breadcrumbGroup slot="right">
                <vb-breadcrumb>Form</vb-breadcrumb>
                <vb-breadcrumb>Textarea</vb-breadcrumb>
            </vb-breadcrumbGroup>
        </vb-contentHeader>
        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">基本用法</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col >
                    <vb-textarea v-model="text1"></vb-textarea>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col >
                    <vb-textarea v-model="text2" :disabled="true" placeholder="disabled input"></vb-textarea>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col >
                    <vb-textarea v-model="text3" :readOnly="true" placeholder="readOnly"></vb-textarea>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col >
                    <vb-textarea v-model="text4" :rows="5" placeholder="rows = 5"></vb-textarea>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col >
                    <p>disabled （Boolean）: 是否可输入</p>
                    <p>readOnly （Boolean）: 是否只读</p>
                    <p>rows （String, Number）: 行数</p>
                    <p>placeholder （String）: placeholder</p>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-textarea v-model="text1"&gt;&lt;/vb-textarea&gt;
&lt;vb-textarea v-model="text2" :disabled="true" placeholder="disabled input"&gt;&lt;/vb-textarea&gt;
&lt;vb-textarea v-model="text3" :readOnly="true" placeholder="readOnly"&gt;&lt;/vb-textarea&gt;
&lt;vb-textarea v-model="text4" :rows="5" placeholder="rows = 5"&gt;&lt;/vb-textarea&gt;
                </code><code class="javascript">
&lt;script&gt;
    export default {
        data() {
            return {
                text1: '',
                text2: '',
                text3: '',
                text4: ''
            }
        }
    }
&lt;/script&gt;
                </code>
            </template>
        </vCodePanel>


        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">color 颜色</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col >
                    <vb-textarea v-model="text6" color="primary" placeholder="color = primary"></vb-textarea>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col >
                    <vb-textarea v-model="text7" color="info" placeholder="color = info"></vb-textarea>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col >
                    <vb-textarea v-model="text8" color="warning" placeholder="color = warning"></vb-textarea>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col >
                    <vb-textarea v-model="text9" color="danger" placeholder="color = danger"></vb-textarea>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col >
                    color （String）: 颜色，可选值primary、info、warning、danger
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-textarea v-model="text6" color="primary" placeholder="color = primary"&gt;&lt;/vb-textarea&gt;
&lt;vb-textarea v-model="text7" color="info" placeholder="color = info"&gt;&lt;/vb-textarea&gt;
&lt;vb-textarea v-model="text8" color="warning" placeholder="color = warning"&gt;&lt;/vb-textarea&gt;
&lt;vb-textarea v-model="text9" color="danger" placeholder="color = danger"&gt;&lt;/vb-textarea&gt;
                </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">size 大小</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col >
                    <vb-textarea v-model="text10" size="small" placeholder="size = small"></vb-textarea>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col >
                    <vb-textarea v-model="text11" placeholder="default"></vb-textarea>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col >
                    <vb-textarea v-model="text12" size="medium" placeholder="size = medium"></vb-textarea>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col >
                    <vb-textarea v-model="text13" size="large" placeholder="size = large"></vb-textarea>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col >
                    size （String）: 大小，small、medium、large
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-textarea v-model="text10" size="small" placeholder="size = small"&gt;&lt;/vb-textarea&gt;
&lt;vb-textarea v-model="text11" placeholder="default"&gt;&lt;/vb-textarea&gt;
&lt;vb-textarea v-model="text12" size="medium" placeholder="size = medium"&gt;&lt;/vb-textarea&gt;
&lt;vb-textarea v-model="text13" size="large" placeholder="size = large"&gt;&lt;/vb-textarea&gt;
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
            vCodePanel
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
