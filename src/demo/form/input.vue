<!--
    Created by linfengluo@gmail.com on 2017/9/7.
-->
<template>
    <vb-content>
        <vb-contentHeader>
            <vb-title level="3">input</vb-title>
            <vb-breadcrumbGroup slot="right">
                <vb-breadcrumb>Form</vb-breadcrumb>
                <vb-breadcrumb>Input</vb-breadcrumb>
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
                    <vb-input v-model="input0" placeholder="normal"></vb-input>
                    <vb-input v-model="input12" state="danger" placeholder="state = danger"></vb-input>
                    <vb-input v-model="input14" state="success" placeholder="state = success"></vb-input>
                    <vb-input v-model="input1" :disabled="true" placeholder="disabled"></vb-input>
                </vb-col>
                <vb-col >
                    通过 disabled 属性指定是否禁用 input 组件
                    通过 state 属性指定输入框状态
                </vb-col>

            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-input v-model="input0"&gt;&lt;/vb-input&gt;
&lt;vb-input v-model="input12" state="danger"&gt;&lt;/vb-input&gt;
&lt;vb-input v-model="input14" state="success"&gt;&lt;/vb-input&gt;
&lt;vb-input v-model="input1" :disabled="true"&gt;&lt;/vb-input&gt;
                </code><code class="javascript">
&lt;script&gt;
// 之后的demo将忽略下面JS
import {vb-input} from '../../components/form/main'
export default {
    data() {
        return {
            input0: '',
            input1: '',
            input12: '',
            input14: ''
        }
    },
    components:{
        vb-input
    }
}
&lt;/script&gt;
                </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">带Icon Input</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-input v-model="input2" leftIcon="envelope"></vb-input>
                    <vb-input v-model="input3" rightIcon="check"></vb-input>
                    <vb-input v-model="input4" leftIcon="envelope" rightIcon="check"></vb-input>
                </vb-col>
                <vb-col >
                    可以通过 leftIcon 属性 或 rightIcon 属性 在 input 组件增加显示图标
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-input v-model="input2" leftIcon="envelope"&gt;&lt;/vb-input&gt;
&lt;vb-input v-model="input3" rightIcon="check"&gt;&lt;/vb-input&gt;
&lt;vb-input v-model="input4" leftIcon="envelope" rightIcon="check"&gt;&lt;/vb-input&gt;
                </code>
            </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">自定义 Input</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-input v-model="input5" :hasAddons="true">
                        <div class="control" slot="prepend">
                            <span class="button is-static">
                                https://
                            </span>
                        </div>
                    </vb-input>
                    <vb-input v-model="input6" :hasAddons="true">
                        <div class="control" slot="append">
                            <span class="button is-static">
                                .com
                            </span>
                        </div>
                    </vb-input>
                    <vb-input v-model="input7" :hasAddons="true">
                        <div class="control" slot="append">
                            <vb-button state="primary">search</vb-button>
                        </div>
                    </vb-input>

                </vb-col>
                <vb-col >
                    <p>通过 hasAddons 属性指定是否启用自定义元素。</p>
                    <p>可通过 slot 来指定在 input 中前置或者后置内容。</p>
                    <p>append ： 后置</p>
                    <p>prepend： 前置</p>
                </vb-col>
            </vb-row>

            <template slot="code" >
                <code class="html">
&lt;vb-input v-model="input5" :hasAddons="true"&gt;
    &lt;div class="control" slot="prepend"&gt;
        &lt;span class="button is-static"&gt;
            https://
        &lt;/span&gt;
    &lt;/div&gt;
&lt;/vb-input&gt;
&lt;vb-input v-model="input6" :hasAddons="true"&gt;
    &lt;div class="control" slot="append"&gt;
        &lt;span class="button is-static"&gt;
            .com
        &lt;/span&gt;
    &lt;/div&gt;
&lt;/vb-input&gt;
&lt;vb-input v-model="input7" :hasAddons="true"&gt;
    &lt;div class="control" slot="append"&gt;
        &lt;vb-button state="primary"&gt;search&lt;/&gt;
    &lt;/div&gt;
&lt;/vb-input&gt;
                </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">大小</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-input v-model="input8" size="small" placeholder="size = small"></vb-input>
                    <vb-input v-model="input9" placeholder="size = normal"></vb-input>
                    <vb-input v-model="input10" size="medium" placeholder="size = medium"></vb-input>
                    <vb-input v-model="input11" size="large" placeholder="size = large"></vb-input>
                </vb-col>
                <vb-col >
                    通过 size 属性指定输入框的尺寸
                    可选择的值： small | medium | large
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-input v-model="input8" size="small"&gt;&lt;/vb-input&gt;
&lt;vb-input v-model="input9"&gt;&lt;/vb-input&gt;
&lt;vb-input v-model="input10" size="medium"&gt;&lt;/vb-input&gt;
&lt;vb-input v-model="input11" size="large"&gt;&lt;/vb-input&gt;
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
                input0: '',
                input1: '',
                input2: '',
                input3: '',
                input4: '',
                input5: '',
                input6: '',
                input7: '',
                input8: '',
                input9: '',
                input10: '',
                input11: '',
                input12: '',
                input13: '',
                input14: ''
            }
        },
        components: {
            vCodePanel
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
