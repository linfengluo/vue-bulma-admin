<!--
    Created by linfengluo@gmail.com on 2017/9/12.
-->
<template>
    <vb-content>
        <vb-contentHeader>
            <vb-title level="3">checkBox</vb-title>
            <vb-breadcrumbGroup slot="right">
                <vb-breadcrumb>Form</vb-breadcrumb>
                <vb-breadcrumb>CheckBox</vb-breadcrumb>
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
                    <vb-row>
                        <vb-col>
                            <vb-checkbox v-model="select1" >正常</vb-checkbox>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <span>select1的值为： {{select1}}</span>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-checkbox v-model="select2" :disabled="true">禁用状态</vb-checkbox>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-checkbox v-model="select3" :checked="true" :disabled="true">选中且禁用状态</vb-checkbox>
                        </vb-col>
                    </vb-row>

                </vb-col>
                <vb-col >
                    <p>单独使用可以表示两种状态之间的切换,值为 true 或 false</p>
                    <p>通过 disabled 属性指定是否禁用 checkbox 组件</p>
                    <p>通过 checked 属性指定选中状态</p>
                </vb-col>

            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-checkbox v-model="select1" &gt;select1&lt;/vb-checkbox&gt;
&lt;vb-checkbox v-model="select2" :disabled="true"&gt;select2&lt;/vb-checkbox&gt;
&lt;vb-checkbox v-model="select3" :checked="true" :disabled="true"&gt;select3&lt;/vb-checkbox&gt;
                </code><code class="javascript">
&lt;script&gt;
import {vb-checkbox, vb-checkboxGroup} from '../../components/form/checkBox/main'
export default {
    data() {
        return {
            select1: false,
            select2: false,
            select3: false
        }
    },
    components: {
        vb-checkbox,
        vb-checkboxGroup
    }
}

&lt;/script&gt;
            </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">多选</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-checkboxGroup v-model="select4">
                        <vb-checkbox label="china">中国</vb-checkbox>
                        <vb-checkbox label="usa" :checked="true">美国</vb-checkbox>
                        <vb-checkbox label="riben">日本</vb-checkbox>
                    </vb-checkboxGroup>
                    <vb-row>
                        <vb-col size="5">已选择： {{select4}}</vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    多个checkbox绑定到同一个数组；
                    <p>label 属性绑定选中时的值；</p>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-checkboxGroup v-model="select4"&gt;
    &lt;vb-checkbox label="china"&gt;中国&lt;/vb-checkbox&gt;
    &lt;vb-checkbox label="usa" :checked="true"&gt;美国&lt;/vb-checkbox&gt;
    &lt;vb-checkbox label="riben"&gt;日本&lt;/vb-checkbox&gt;
&lt;/vb-checkboxGroup&gt;
                </code>
            </template>
        </vCodePanel>


        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">限制数量</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-checkboxGroup v-model="select5" :max="2">
                        <vb-checkbox label="china">中国</vb-checkbox>
                        <vb-checkbox label="usa">美国</vb-checkbox>
                        <vb-checkbox label="riben">日本</vb-checkbox>
                    </vb-checkboxGroup>
                    <vb-row>
                        <vb-col size="5">已选择： {{select5}}</vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    可以通过 max 属性 设置最大选择数量
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-checkboxGroup v-model="select5" :max="2"&gt;
    &lt;vb-checkbox label="china"&gt;中国&lt;/vb-checkbox&gt;
    &lt;vb-checkbox label="usa" &gt;美国&lt;/vb-checkbox&gt;
    &lt;vb-checkbox label="riben"&gt;日本&lt;/vb-checkbox&gt;
&lt;/vb-checkboxGroup&gt;
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
                select1: false,
                select2: false,
                select3: false,
                select4: [],
                select5: []
            }
        },
        components: {
            vCodePanel
        }
    }
</script>

