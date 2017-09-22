<!--
    Created by linfengluo@gmail.com on 2017/9/13.
-->
<template>
    <vContent>
        <vContentHeader>
            <vTitle level="3">selecter</vTitle>
            <vBreadcrumb slot="right">
                <vBreadcrumbItem>Form</vBreadcrumbItem>
                <vBreadcrumbItem>Selecter</vBreadcrumbItem>
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
                            <vSelectGroup v-model="select1">
                                <vSelectItem value="option1">option1</vSelectItem>
                                <vSelectItem value="option2">option2</vSelectItem>
                                <vSelectItem value="option3">option3</vSelectItem>
                            </vSelectGroup>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vSelectGroup v-model="select15" :disabled="true">
                                <vSelectItem value="option1">option1</vSelectItem>
                                <vSelectItem value="option2">option2</vSelectItem>
                                <vSelectItem value="option3">option3</vSelectItem>
                            </vSelectGroup>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vSelectGroup v-model="select16">
                                <vSelectItem value="option1" :disabled="true">option1</vSelectItem>
                                <vSelectItem value="option2">option2</vSelectItem>
                                <vSelectItem value="option3">option3</vSelectItem>
                            </vSelectGroup>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vSelectGroup v-model="select17" :width="150">
                                <vSelectItem value="option1">option1</vSelectItem>
                                <vSelectItem value="option2">option2</vSelectItem>
                                <vSelectItem value="option3">option3</vSelectItem>
                            </vSelectGroup>
                        </vCol>
                    </vRow>
                </vCol>
                <vCol >
                    通过 value 属性绑定选择的值
                    <p>通过 disabled 属性决定是否禁用 selecter 或 option</p>
                    <p>通过 width 属性决定宽度</p>
                </vCol>

            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vSelectGroup v-model="select1"&gt;
    &lt;vSelectItem value="option1"&gt;option1&lt;/vSelectItem&gt;
    &lt;vSelectItem value="option2"&gt;option2&lt;/vSelectItem&gt;
    &lt;vSelectItem value="option3"&gt;option3&lt;/vSelectItem&gt;
&lt;/vSelectGroup&gt;
&lt;vSelectGroup v-model="select15" :disabled="true"&gt;
    &lt;vSelectItem value="option1"&gt;option1&lt;/vSelectItem&gt;
    &lt;vSelectItem value="option2"&gt;option2&lt;/vSelectItem&gt;
    &lt;vSelectItem value="option3"&gt;option3&lt;/vSelectItem&gt;
&lt;/vSelectGroup&gt;
&lt;vSelectGroup v-model="select16"&gt;
    &lt;vSelectItem value="option1" :disabled="true"&gt;option1&lt;/vSelectItem&gt;
    &lt;vSelectItem value="option2"&gt;option2&lt;/vSelectItem&gt;
    &lt;vSelectItem value="option3"&gt;option3&lt;/vSelectItem&gt;
&lt;/vSelectGroup&gt;
&lt;vSelectGroup v-model="select17" :width="150"&gt;
    &lt;vSelectItem value="option1"&gt;option1&lt;/vSelectItem&gt;
    &lt;vSelectItem value="option2"&gt;option2&lt;/vSelectItem&gt;
    &lt;vSelectItem value="option3"&gt;option3&lt;/vSelectItem&gt;
&lt;/vSelectGroup&gt;

                </code><code class="javascript">
&lt;script&gt;
import {vSelectGroup, vSelectItem} from '../../components/form/selecter/main'
export default {
    data() {
        return {
            select1: '',
        }
    },
    componnets: {
        vSelectGroup,
        vSelectItem
    }
}
&lt;/script&gt;
                        </code>
            </template>
        </vCodePanel>
        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">Color 颜色</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vRow>
                        <vCol>
                            <vSelectGroup v-model="select2" color="primary">
                                <vSelectItem value="option1">option1</vSelectItem>
                                <vSelectItem value="option2">option2</vSelectItem>
                                <vSelectItem value="option3">option3</vSelectItem>
                            </vSelectGroup>
                        </vCol>
                    </vRow>

                    <vRow>
                        <vCol>
                            <vSelectGroup v-model="select3" color="info">
                                <vSelectItem value="option1">option1</vSelectItem>
                                <vSelectItem value="option2">option2</vSelectItem>
                                <vSelectItem value="option3">option3</vSelectItem>
                            </vSelectGroup>

                        </vCol>
                    </vRow>

                    <vRow>
                        <vCol>
                            <vSelectGroup v-model="select4" color="success">
                                <vSelectItem value="option1">option1</vSelectItem>
                                <vSelectItem value="option2">option2</vSelectItem>
                                <vSelectItem value="option3">option3</vSelectItem>
                            </vSelectGroup>

                        </vCol>
                    </vRow>

                    <vRow>
                        <vCol>

                            <vSelectGroup v-model="select5" color="warning">
                                <vSelectItem value="option1">option1</vSelectItem>
                                <vSelectItem value="option2">option2</vSelectItem>
                                <vSelectItem value="option3">option3</vSelectItem>
                            </vSelectGroup>

                        </vCol>
                    </vRow>

                    <vRow>
                        <vCol>
                            <vSelectGroup v-model="select6" color="danger">
                                <vSelectItem value="option1">option1</vSelectItem>
                                <vSelectItem value="option2">option2</vSelectItem>
                                <vSelectItem value="option3">option3</vSelectItem>
                            </vSelectGroup>
                        </vCol>
                    </vRow>
                </vCol>
                <vCol >
                    通过 color 属性选择颜色
                    <p>可选择的值： primary | info | success | warning | danger</p>
                </vCol>

            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vSelectGroup v-model="select2" color="primary"&gt;
    &lt;vSelectItem value="option1"&gt;option1&lt;/vSelectItem&gt;
    &lt;vSelectItem value="option2"&gt;option2&lt;/vSelectItem&gt;
    &lt;vSelectItem value="option3"&gt;option3&lt;/vSelectItem&gt;
&lt;/vSelectGroup&gt;
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
                <vCol size="7">
                    <vRow>
                        <vCol>
                            <vSelectGroup v-model="select7" size="small">
                                <vSelectItem value="option1">option1</vSelectItem>
                                <vSelectItem value="option2">option2</vSelectItem>
                                <vSelectItem value="option3">option3</vSelectItem>
                            </vSelectGroup>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vSelectGroup v-model="select8">
                                <vSelectItem value="option1">option1</vSelectItem>
                                <vSelectItem value="option2">option2</vSelectItem>
                                <vSelectItem value="option3">option3</vSelectItem>
                            </vSelectGroup>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vSelectGroup v-model="select9" size="medium">
                                <vSelectItem value="option1">option1</vSelectItem>
                                <vSelectItem value="option2">option2</vSelectItem>
                                <vSelectItem value="option3">option3</vSelectItem>
                            </vSelectGroup>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vSelectGroup v-model="select10" size="large">
                                <vSelectItem value="option1">option1</vSelectItem>
                                <vSelectItem value="option2">option2</vSelectItem>
                                <vSelectItem value="option3">option3</vSelectItem>
                            </vSelectGroup>
                        </vCol>
                    </vRow>
                </vCol>
                <vCol >
                    通过 size 属性选择大小
                    <p>可选择的值： small | medium | large</p>
                </vCol>

            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vSelectGroup v-model="select7" size="small"&gt;
    &lt;vSelectItem value="option1"&gt;option1&lt;/vSelectItem&gt;
    &lt;vSelectItem value="option2"&gt;option2&lt;/vSelectItem&gt;
    &lt;vSelectItem value="option3"&gt;option3&lt;/vSelectItem&gt;
&lt;/vSelectGroup&gt;
                </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">States 状态</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vRow>
                        <vCol>
                            <vSelectGroup v-model="select11">
                                <vSelectItem value="option1">option1</vSelectItem>
                                <vSelectItem value="option2">option2</vSelectItem>
                                <vSelectItem value="option3">option3</vSelectItem>
                            </vSelectGroup>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vSelectGroup v-model="select12" state="hovered">
                                <vSelectItem value="option1">option1</vSelectItem>
                                <vSelectItem value="option2">option2</vSelectItem>
                                <vSelectItem value="option3">option3</vSelectItem>
                            </vSelectGroup>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vSelectGroup v-model="select13" state="focused">
                                <vSelectItem value="option1">option1</vSelectItem>
                                <vSelectItem value="option2">option2</vSelectItem>
                                <vSelectItem value="option3">option3</vSelectItem>
                            </vSelectGroup>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vSelectGroup v-model="select14" state="loading">
                                <vSelectItem value="option1">option1</vSelectItem>
                                <vSelectItem value="option2">option2</vSelectItem>
                                <vSelectItem value="option3">option3</vSelectItem>
                            </vSelectGroup>
                        </vCol>
                    </vRow>
                </vCol>
                <vCol >
                    通过 state 属性选择状态
                    <p>可选择的值： hovered | focused | loading</p>
                </vCol>

            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vSelectGroup v-model="select7" state="loading"&gt;
    &lt;vSelectItem value="option1"&gt;option1&lt;/vSelectItem&gt;
    &lt;vSelectItem value="option2"&gt;option2&lt;/vSelectItem&gt;
    &lt;vSelectItem value="option3"&gt;option3&lt;/vSelectItem&gt;
&lt;/vSelectGroup&gt;
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
    import {vSelectGroup, vSelectItem} from '../../components/selecter/index'
    export default {
        data() {
            return {
                select1: '',
                select2: '',
                select3: '',
                select4: '',
                select5: '',
                select6: '',
                select7: '',
                select8: '',
                select9: '',
                select10: '',
                select11: '',
                select12: '',
                select13: '',
                select14: '',
                select15: '',
                select16: '',
                select17: ''
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
            vSelectGroup,
            vSelectItem
        }
    }
</script>

