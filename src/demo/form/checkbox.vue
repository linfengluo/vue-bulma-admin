<!--
    Created by linfengluo@gmail.com on 2017/9/12.
-->
<template>
    <vContent>
        <vContentHeader>
            <vTitle level="3">checkBox</vTitle>
            <vBreadcrumb slot="right">
                <vBreadcrumbItem>Form</vBreadcrumbItem>
                <vBreadcrumbItem>CheckBox</vBreadcrumbItem>
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
                    <vRow>
                        <vCol>
                            <vCheckBox v-model="select1" >正常</vCheckBox>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <span>select1的值为： {{select1}}</span>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vCheckBox v-model="select2" :disabled="true">禁用状态</vCheckBox>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vCheckBox v-model="select3" :checked="true" :disabled="true">选中且禁用状态</vCheckBox>
                        </vCol>
                    </vRow>

                </vCol>
                <vCol >
                    <p>单独使用可以表示两种状态之间的切换,值为 true 或 false</p>
                    <p>通过 disabled 属性指定是否禁用 checkbox 组件</p>
                    <p>通过 checked 属性指定选中状态</p>
                </vCol>

            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vCheckBox v-model="select1" &gt;select1&lt;/vCheckBox&gt;
&lt;vCheckBox v-model="select2" :disabled="true"&gt;select2&lt;/vCheckBox&gt;
&lt;vCheckBox v-model="select3" :checked="true" :disabled="true"&gt;select3&lt;/vCheckBox&gt;
                </code><code class="javascript">
&lt;script&gt;
import {vCheckBox, vCheckBoxGroup} from '../../components/form/checkBox/main'
export default {
    data() {
        return {
            select1: false,
            select2: false,
            select3: false
        }
    },
    components: {
        vCheckBox,
        vCheckBoxGroup
    }
}

&lt;/script&gt;
            </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">多选</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vCheckBoxGroup v-model="select4">
                        <vCheckBox label="china">中国</vCheckBox>
                        <vCheckBox label="usa" :checked="true">美国</vCheckBox>
                        <vCheckBox label="riben">日本</vCheckBox>
                    </vCheckBoxGroup>
                    <vRow>
                        <vCol size="5">已选择： {{select4}}</vCol>
                    </vRow>
                </vCol>
                <vCol >
                    多个checkbox绑定到同一个数组；
                    <p>label 属性绑定选中时的值；</p>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vCheckBoxGroup v-model="select4"&gt;
    &lt;vCheckBox label="china"&gt;中国&lt;/vCheckBox&gt;
    &lt;vCheckBox label="usa" :checked="true"&gt;美国&lt;/vCheckBox&gt;
    &lt;vCheckBox label="riben"&gt;日本&lt;/vCheckBox&gt;
&lt;/vCheckBoxGroup&gt;
                </code>
            </template>
        </vCodePanel>


        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">限制数量</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vCheckBoxGroup v-model="select5" :max="2">
                        <vCheckBox label="china">中国</vCheckBox>
                        <vCheckBox label="usa">美国</vCheckBox>
                        <vCheckBox label="riben">日本</vCheckBox>
                    </vCheckBoxGroup>
                    <vRow>
                        <vCol size="5">已选择： {{select5}}</vCol>
                    </vRow>
                </vCol>
                <vCol >
                    可以通过 max 属性 设置最大选择数量
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vCheckBoxGroup v-model="select5" :max="2"&gt;
    &lt;vCheckBox label="china"&gt;中国&lt;/vCheckBox&gt;
    &lt;vCheckBox label="usa" &gt;美国&lt;/vCheckBox&gt;
    &lt;vCheckBox label="riben"&gt;日本&lt;/vCheckBox&gt;
&lt;/vCheckBoxGroup&gt;
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
    import {vCheckBox, vCheckBoxGroup} from '../../components/checkBox/index'
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
            vContent,
            vTitle,
            vContentHeader,
            vBreadcrumb,
            vBreadcrumbItem,
            vCodePanel,
            vRow,
            vCol,
            vCheckBox,
            vCheckBoxGroup
        }
    }
</script>

