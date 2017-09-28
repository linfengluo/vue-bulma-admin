<!--
    Created by linfengluo@gmail.com on 2017/9/13.
-->
<template>
    <vb-content>
        <vb-contentHeader>
            <vb-title level="3">radio</vb-title>
            <vb-breadcrumbGroup slot="right">
                <vb-breadcrumb>Form</vb-breadcrumb>
                <vb-breadcrumb>Radio</vb-breadcrumb>
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
                            <vb-radio v-model="select1" name="test" label="1">北大</vb-radio>
                            <vb-radio v-model="select1" name="test" label="2">清华</vb-radio>
                        </vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    <p>使用 Radio 组件，label属性的值为选中的值</p>
                    <p>通过 name 属性指定 原生 name 属性</p>
                </vb-col>

            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-radio v-model="select1" name="test" label="1"&gt;select1&lt;/vb-radio&gt;
&lt;vb-radio v-model="select1" name="test" label="2"&gt;select1&lt;/vb-radio&gt;
                </code><code class="javascript">
&lt;script&gt;
import {vb-radio, vb-radioGroup} from '../../components/form/radio/main'
export default {
    data() {
        return {
            select1: '1'
        }
    },
    components: {
        vb-radio,
        vb-radioGroup
    }
}

&lt;/script&gt;
            </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">禁用状态</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-row>
                        <vb-col>
                            <vb-radio v-model="select1" label="1" :disabled="true">北大</vb-radio>
                            <vb-radio v-model="select1" label="2">清华</vb-radio>
                        </vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    <p>通过 disabled 属性设置禁用状态</p>
                </vb-col>

            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-radio v-model="select1" name="test" label="1" :disabled="true"&gt;select1&lt;/vb-radio&gt;
&lt;vb-radio v-model="select1" name="test" label="2"&gt;select1&lt;/vb-radio&gt;
                </code><code class="javascript">
&lt;script&gt;
import {vb-radio, vb-radioGroup} from '../../components/form/radio/main'
export default {
    data() {
        return {
        select1: '1'
        }
    },
    components: {
        vb-radio,
        vb-radioGroup
    }
}

&lt;/script&gt;
            </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">单选组</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-row>
                        <vb-col>
                            <vb-radioGroup v-model="select2">
                                <vb-radio label="1">北大</vb-radio>
                                <vb-radio label="2">清华</vb-radio>
                                <vb-radio label="3">蓝翔</vb-radio>
                                <vb-radio label="4" :disabled="true">禁用</vb-radio>
                            </vb-radioGroup>
                        </vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    <p>label属性的值为选中的值</p>
                    <p>通过 disabled 属性设置禁用状态</p>
                </vb-col>

            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-radioGroup v-model="select2"&gt;
    &lt;vb-radio label="1"&gt;北大&lt;/vb-radio&gt;
    &lt;vb-radio label="2"&gt;清华&lt;/vb-radio&gt;
    &lt;vb-radio label="3"&gt;蓝翔&lt;/vb-radio&gt;
    &lt;vb-radio label="4" :disabled="true"&gt;禁用&lt;/vb-radio&gt;
&lt;/vb-radioGroup&gt;
                </code>
            </template>
        </vCodePanel>
        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">单选按钮</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-row>
                        <vb-col>
                            <vb-radioGroup v-model="select2">
                                <vb-radioBtn label="1">北大</vb-radioBtn>
                                <vb-radioBtn label="2">清华</vb-radioBtn>
                                <vb-radioBtn label="3">蓝翔</vb-radioBtn>
                                <vb-radioBtn label="4" :disabled="true">禁用</vb-radioBtn>
                            </vb-radioGroup>
                        </vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    <p>import vb-radioBtn; 使用方法与radio一致</p>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-radioGroup v-model="select2"&gt;
    &lt;vb-radioBtn label="1"&gt;北大&lt;/vb-radioBtn&gt;
    &lt;vb-radioBtn label="2"&gt;清华&lt;/vb-radioBtn&gt;
    &lt;vb-radioBtn label="3"&gt;蓝翔&lt;/vb-radioBtn&gt;
    &lt;vb-radioBtn label="4" :disabled="true"&gt;禁用&lt;/vb-radioBtn&gt;
&lt;/vb-radioGroup&gt;
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
                select1: '1',
                select2: '2',
                select3: '',
                select4: [],
                select5: []
            }
        },
        components: {
            vCodePanel
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>

