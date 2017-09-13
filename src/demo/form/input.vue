<!--
    Created by linfengluo@gmail.com on 2017/9/7.
-->
<template>
    <vContent>
        <vContentHeader>
            <vTitle level="3">input</vTitle>
            <vBreadcrumb slot="right">
                <vBreadcrumbItem>Form</vBreadcrumbItem>
                <vBreadcrumbItem>Input</vBreadcrumbItem>
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
                    <vInput v-model="input0"></vInput>
                    <vInput v-model="input12" state="danger"></vInput>
                    <vInput v-model="input14" state="success"></vInput>
                    <vInput v-model="input1" :disabled="true"></vInput>
                </vCol>
                <vCol >
                    通过 disabled 属性指定是否禁用 input 组件
                    通过 state 属性指定输入框状态
                </vCol>

            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vInput v-model="input0"&gt;&lt;/vInput&gt;
&lt;vInput v-model="input12" state="danger"&gt;&lt;/vInput&gt;
&lt;vInput v-model="input14" state="success"&gt;&lt;/vInput&gt;
&lt;vInput v-model="input1" :disabled="true"&gt;&lt;/vInput&gt;
                </code><code class="javascript">
&lt;script&gt;
// 之后的demo将忽略下面JS
import {vInput} from '../../components/form/main'
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
        vInput
    }
}
&lt;/script&gt;
                </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">带Icon Input</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vInput v-model="input2" leftIcon="envelope"></vInput>
                    <vInput v-model="input3" rightIcon="check"></vInput>
                    <vInput v-model="input4" leftIcon="envelope" rightIcon="check"></vInput>
                </vCol>
                <vCol >
                    可以通过 leftIcon 属性 或 rightIcon 属性 在 input 组件增加显示图标
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vInput v-model="input2" leftIcon="envelope"&gt;&lt;/vInput&gt;
&lt;vInput v-model="input3" rightIcon="check"&gt;&lt;/vInput&gt;
&lt;vInput v-model="input4" leftIcon="envelope" rightIcon="check"&gt;&lt;/vInput&gt;
                </code>
            </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">自定义 Input</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vInput v-model="input5" :hasAddons="true">
                        <div class="control" slot="prepend">
                            <span class="button is-static">
                                https://
                            </span>
                        </div>
                    </vInput>
                    <vInput v-model="input6" :hasAddons="true">
                        <div class="control" slot="append">
                            <span class="button is-static">
                                .com
                            </span>
                        </div>
                    </vInput>
                    <vInput v-model="input7" :hasAddons="true">
                        <div class="control" slot="append">
                            <vButton state="primary">search</vButton>
                        </div>
                    </vInput>

                </vCol>
                <vCol >
                    <p>通过 hasAddons 属性指定是否启用自定义元素。</p>
                    <p>可通过 slot 来指定在 input 中前置或者后置内容。</p>
                    <p>append ： 后置</p>
                    <p>prepend： 前置</p>
                </vCol>
            </vRow>

            <template slot="code" >
                <code class="html">
&lt;vInput v-model="input5" :hasAddons="true"&gt;
    &lt;div class="control" slot="prepend"&gt;
        &lt;span class="button is-static"&gt;
            https://
        &lt;/span&gt;
    &lt;/div&gt;
&lt;/vInput&gt;
&lt;vInput v-model="input6" :hasAddons="true"&gt;
    &lt;div class="control" slot="append"&gt;
        &lt;span class="button is-static"&gt;
            .com
        &lt;/span&gt;
    &lt;/div&gt;
&lt;/vInput&gt;
&lt;vInput v-model="input7" :hasAddons="true"&gt;
    &lt;div class="control" slot="append"&gt;
        &lt;vButton state="primary"&gt;search&lt;/vButton&gt;
    &lt;/div&gt;
&lt;/vInput&gt;
                </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">大小</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vInput v-model="input8" size="small"></vInput>
                    <vInput v-model="input9"></vInput>
                    <vInput v-model="input10" size="medium"></vInput>
                    <vInput v-model="input11" size="large"></vInput>
                </vCol>
                <vCol >
                    通过 size 属性指定输入框的尺寸
                    可选择的值： small | medium | large
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vInput v-model="input8" size="small"&gt;&lt;/vInput&gt;
&lt;vInput v-model="input9"&gt;&lt;/vInput&gt;
&lt;vInput v-model="input10" size="medium"&gt;&lt;/vInput&gt;
&lt;vInput v-model="input11" size="large"&gt;&lt;/vInput&gt;
                </code>
            </template>
        </vCodePanel>
    </vContent>
</template>

<script>
    import vContent from '../../components/layout/content/content.vue'
    import vContentHeader from '../../components/layout/content/header.vue'
    import {vBreadcrumb, vBreadcrumbItem} from '../../components/breadcrumb/main'
    import vCodePanel from '../../components/codePanel/codePanel.vue'
    import {vRow, vCol} from '../../components/layout/columns/main'
    import {vBox, vTitle, vButton} from '../../elements/main'
    import {vInput} from '../../components/form/main'

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
            vInput,
            vContent,
            vTitle,
            vBox,
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
