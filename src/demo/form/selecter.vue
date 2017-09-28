<!--
    Created by linfengluo@gmail.com on 2017/9/13.
-->
<template>
    <vb-content>
        <vb-contentHeader>
            <vb-title level="3">selecter</vb-title>
            <vb-breadcrumbGroup slot="right">
                <vb-breadcrumb>Form</vb-breadcrumb>
                <vb-breadcrumb>Selecter</vb-breadcrumb>
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
                            <vb-selecter v-model="select1">
                                <vb-selecterItem value="option1">option1</vb-selecterItem>
                                <vb-selecterItem value="option2">option2</vb-selecterItem>
                                <vb-selecterItem value="option3">option3</vb-selecterItem>
                            </vb-selecter>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-selecter v-model="select15" :disabled="true">
                                <vb-selecterItem value="option1">option1</vb-selecterItem>
                                <vb-selecterItem value="option2">option2</vb-selecterItem>
                                <vb-selecterItem value="option3">option3</vb-selecterItem>
                            </vb-selecter>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-selecter v-model="select16">
                                <vb-selecterItem value="option1" :disabled="true">option1</vb-selecterItem>
                                <vb-selecterItem value="option2">option2</vb-selecterItem>
                                <vb-selecterItem value="option3">option3</vb-selecterItem>
                            </vb-selecter>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-selecter v-model="select17" :width="150">
                                <vb-selecterItem value="option1">option1</vb-selecterItem>
                                <vb-selecterItem value="option2">option2</vb-selecterItem>
                                <vb-selecterItem value="option3">option3</vb-selecterItem>
                            </vb-selecter>
                        </vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    通过 value 属性绑定选择的值
                    <p>通过 disabled 属性决定是否禁用 selecter 或 option</p>
                    <p>通过 width 属性决定宽度</p>
                </vb-col>

            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-selecter v-model="select1"&gt;
    &lt;vb-selecterItem value="option1"&gt;option1&lt;/vb-selecterItem&gt;
    &lt;vb-selecterItem value="option2"&gt;option2&lt;/vb-selecterItem&gt;
    &lt;vb-selecterItem value="option3"&gt;option3&lt;/vb-selecterItem&gt;
&lt;/vb-selecter&gt;
&lt;vb-selecter v-model="select15" :disabled="true"&gt;
    &lt;vb-selecterItem value="option1"&gt;option1&lt;/vb-selecterItem&gt;
    &lt;vb-selecterItem value="option2"&gt;option2&lt;/vb-selecterItem&gt;
    &lt;vb-selecterItem value="option3"&gt;option3&lt;/vb-selecterItem&gt;
&lt;/vb-selecter&gt;
&lt;vb-selecter v-model="select16"&gt;
    &lt;vb-selecterItem value="option1" :disabled="true"&gt;option1&lt;/vb-selecterItem&gt;
    &lt;vb-selecterItem value="option2"&gt;option2&lt;/vb-selecterItem&gt;
    &lt;vb-selecterItem value="option3"&gt;option3&lt;/vb-selecterItem&gt;
&lt;/vb-selecter&gt;
&lt;vb-selecter v-model="select17" :width="150"&gt;
    &lt;vb-selecterItem value="option1"&gt;option1&lt;/vb-selecterItem&gt;
    &lt;vb-selecterItem value="option2"&gt;option2&lt;/vb-selecterItem&gt;
    &lt;vb-selecterItem value="option3"&gt;option3&lt;/vb-selecterItem&gt;
&lt;/vb-selecter&gt;

                </code><code class="javascript">
&lt;script&gt;
import {vb-selecter, vb-selecterItem} from '../../components/form/selecter/main'
export default {
    data() {
        return {
            select1: '',
        }
    },
    componnets: {
        vb-selecter,
        vb-selecterItem
    }
}
&lt;/script&gt;
                        </code>
            </template>
        </vCodePanel>
        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">Color 颜色</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-row>
                        <vb-col>
                            <vb-selecter v-model="select2" color="primary">
                                <vb-selecterItem value="option1">option1</vb-selecterItem>
                                <vb-selecterItem value="option2">option2</vb-selecterItem>
                                <vb-selecterItem value="option3">option3</vb-selecterItem>
                            </vb-selecter>
                        </vb-col>
                    </vb-row>

                    <vb-row>
                        <vb-col>
                            <vb-selecter v-model="select3" color="info">
                                <vb-selecterItem value="option1">option1</vb-selecterItem>
                                <vb-selecterItem value="option2">option2</vb-selecterItem>
                                <vb-selecterItem value="option3">option3</vb-selecterItem>
                            </vb-selecter>

                        </vb-col>
                    </vb-row>

                    <vb-row>
                        <vb-col>
                            <vb-selecter v-model="select4" color="success">
                                <vb-selecterItem value="option1">option1</vb-selecterItem>
                                <vb-selecterItem value="option2">option2</vb-selecterItem>
                                <vb-selecterItem value="option3">option3</vb-selecterItem>
                            </vb-selecter>

                        </vb-col>
                    </vb-row>

                    <vb-row>
                        <vb-col>

                            <vb-selecter v-model="select5" color="warning">
                                <vb-selecterItem value="option1">option1</vb-selecterItem>
                                <vb-selecterItem value="option2">option2</vb-selecterItem>
                                <vb-selecterItem value="option3">option3</vb-selecterItem>
                            </vb-selecter>

                        </vb-col>
                    </vb-row>

                    <vb-row>
                        <vb-col>
                            <vb-selecter v-model="select6" color="danger">
                                <vb-selecterItem value="option1">option1</vb-selecterItem>
                                <vb-selecterItem value="option2">option2</vb-selecterItem>
                                <vb-selecterItem value="option3">option3</vb-selecterItem>
                            </vb-selecter>
                        </vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    通过 color 属性选择颜色
                    <p>可选择的值： primary | info | success | warning | danger</p>
                </vb-col>

            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-selecter v-model="select2" color="primary"&gt;
    &lt;vb-selecterItem value="option1"&gt;option1&lt;/vb-selecterItem&gt;
    &lt;vb-selecterItem value="option2"&gt;option2&lt;/vb-selecterItem&gt;
    &lt;vb-selecterItem value="option3"&gt;option3&lt;/vb-selecterItem&gt;
&lt;/vb-selecter&gt;
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
                <vb-col size="7">
                    <vb-row>
                        <vb-col>
                            <vb-selecter v-model="select7" size="small">
                                <vb-selecterItem value="option1">option1</vb-selecterItem>
                                <vb-selecterItem value="option2">option2</vb-selecterItem>
                                <vb-selecterItem value="option3">option3</vb-selecterItem>
                            </vb-selecter>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-selecter v-model="select8">
                                <vb-selecterItem value="option1">option1</vb-selecterItem>
                                <vb-selecterItem value="option2">option2</vb-selecterItem>
                                <vb-selecterItem value="option3">option3</vb-selecterItem>
                            </vb-selecter>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-selecter v-model="select9" size="medium">
                                <vb-selecterItem value="option1">option1</vb-selecterItem>
                                <vb-selecterItem value="option2">option2</vb-selecterItem>
                                <vb-selecterItem value="option3">option3</vb-selecterItem>
                            </vb-selecter>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-selecter v-model="select10" size="large">
                                <vb-selecterItem value="option1">option1</vb-selecterItem>
                                <vb-selecterItem value="option2">option2</vb-selecterItem>
                                <vb-selecterItem value="option3">option3</vb-selecterItem>
                            </vb-selecter>
                        </vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    通过 size 属性选择大小
                    <p>可选择的值： small | medium | large</p>
                </vb-col>

            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-selecter v-model="select7" size="small"&gt;
    &lt;vb-selecterItem value="option1"&gt;option1&lt;/vb-selecterItem&gt;
    &lt;vb-selecterItem value="option2"&gt;option2&lt;/vb-selecterItem&gt;
    &lt;vb-selecterItem value="option3"&gt;option3&lt;/vb-selecterItem&gt;
&lt;/vb-selecter&gt;
                </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">States 状态</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-row>
                        <vb-col>
                            <vb-selecter v-model="select11">
                                <vb-selecterItem value="option1">option1</vb-selecterItem>
                                <vb-selecterItem value="option2">option2</vb-selecterItem>
                                <vb-selecterItem value="option3">option3</vb-selecterItem>
                            </vb-selecter>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-selecter v-model="select12" state="hovered">
                                <vb-selecterItem value="option1">option1</vb-selecterItem>
                                <vb-selecterItem value="option2">option2</vb-selecterItem>
                                <vb-selecterItem value="option3">option3</vb-selecterItem>
                            </vb-selecter>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-selecter v-model="select13" state="focused">
                                <vb-selecterItem value="option1">option1</vb-selecterItem>
                                <vb-selecterItem value="option2">option2</vb-selecterItem>
                                <vb-selecterItem value="option3">option3</vb-selecterItem>
                            </vb-selecter>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-selecter v-model="select14" state="loading">
                                <vb-selecterItem value="option1">option1</vb-selecterItem>
                                <vb-selecterItem value="option2">option2</vb-selecterItem>
                                <vb-selecterItem value="option3">option3</vb-selecterItem>
                            </vb-selecter>
                        </vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    通过 state 属性选择状态
                    <p>可选择的值： hovered | focused | loading</p>
                </vb-col>

            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-selecter v-model="select7" state="loading"&gt;
    &lt;vb-selecterItem value="option1"&gt;option1&lt;/vb-selecterItem&gt;
    &lt;vb-selecterItem value="option2"&gt;option2&lt;/vb-selecterItem&gt;
    &lt;vb-selecterItem value="option3"&gt;option3&lt;/vb-selecterItem&gt;
&lt;/vb-selecter&gt;
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
                select15: 'option2',
                select16: '',
                select17: ''
            }
        },
        components: {
            vCodePanel
        }
    }
</script>

