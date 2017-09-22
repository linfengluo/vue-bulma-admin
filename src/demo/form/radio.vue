<!--
    Created by linfengluo@gmail.com on 2017/9/13.
-->
<template>
    <vContent>
        <vContentHeader>
            <vTitle level="3">radio</vTitle>
            <vBreadcrumb slot="right">
                <vBreadcrumbItem>Form</vBreadcrumbItem>
                <vBreadcrumbItem>Radio</vBreadcrumbItem>
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
                            <vRadio v-model="select1" name="test" label="1">北大</vRadio>
                            <vRadio v-model="select1" name="test" label="2">清华</vRadio>
                        </vCol>
                    </vRow>
                </vCol>
                <vCol >
                    <p>使用 Radio 组件，label属性的值为选中的值</p>
                    <p>通过 name 属性指定 原生 name 属性</p>
                </vCol>

            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vRadio v-model="select1" name="test" label="1"&gt;select1&lt;/vRadio&gt;
&lt;vRadio v-model="select1" name="test" label="2"&gt;select1&lt;/vRadio&gt;
                </code><code class="javascript">
&lt;script&gt;
import {vRadio, vRadioGroup} from '../../components/form/radio/main'
export default {
    data() {
        return {
            select1: '1'
        }
    },
    components: {
        vRadio,
        vRadioGroup
    }
}

&lt;/script&gt;
            </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">禁用状态</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vRow>
                        <vCol>
                            <vRadio v-model="select1" label="1" :disabled="true">北大</vRadio>
                            <vRadio v-model="select1" label="2">清华</vRadio>
                        </vCol>
                    </vRow>
                </vCol>
                <vCol >
                    <p>通过 disabled 属性设置禁用状态</p>
                </vCol>

            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vRadio v-model="select1" name="test" label="1" :disabled="true"&gt;select1&lt;/vRadio&gt;
&lt;vRadio v-model="select1" name="test" label="2"&gt;select1&lt;/vRadio&gt;
                </code><code class="javascript">
&lt;script&gt;
import {vRadio, vRadioGroup} from '../../components/form/radio/main'
export default {
    data() {
        return {
        select1: '1'
        }
    },
    components: {
        vRadio,
        vRadioGroup
    }
}

&lt;/script&gt;
            </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">单选组</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vRow>
                        <vCol>
                            <vRadioGroup v-model="select2">
                                <vRadio label="1">北大</vRadio>
                                <vRadio label="2">清华</vRadio>
                                <vRadio label="3">蓝翔</vRadio>
                                <vRadio label="4" :disabled="true">禁用</vRadio>
                            </vRadioGroup>
                        </vCol>
                    </vRow>
                </vCol>
                <vCol >
                    <p>label属性的值为选中的值</p>
                    <p>通过 disabled 属性设置禁用状态</p>
                </vCol>

            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vRadioGroup v-model="select2"&gt;
    &lt;vRadio label="1"&gt;北大&lt;/vRadio&gt;
    &lt;vRadio label="2"&gt;清华&lt;/vRadio&gt;
    &lt;vRadio label="3"&gt;蓝翔&lt;/vRadio&gt;
    &lt;vRadio label="4" :disabled="true"&gt;禁用&lt;/vRadio&gt;
&lt;/vRadioGroup&gt;
                </code>
            </template>
        </vCodePanel>
        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">单选按钮</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vRow>
                        <vCol>
                            <vRadioGroup v-model="select2">
                                <vRadioBtn label="1">北大</vRadioBtn>
                                <vRadioBtn label="2">清华</vRadioBtn>
                                <vRadioBtn label="3">蓝翔</vRadioBtn>
                                <vRadioBtn label="4" :disabled="true">禁用</vRadioBtn>
                            </vRadioGroup>
                        </vCol>
                    </vRow>
                </vCol>
                <vCol >
                    <p>import vRadioBtn; 使用方法与radio一致</p>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vRadioGroup v-model="select2"&gt;
    &lt;vRadioBtn label="1"&gt;北大&lt;/vRadioBtn&gt;
    &lt;vRadioBtn label="2"&gt;清华&lt;/vRadioBtn&gt;
    &lt;vRadioBtn label="3"&gt;蓝翔&lt;/vRadioBtn&gt;
    &lt;vRadioBtn label="4" :disabled="true"&gt;禁用&lt;/vRadioBtn&gt;
&lt;/vRadioGroup&gt;
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
    import {vRadio, vRadioGroup, vRadioBtn} from '../../components/radio/index'
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
            vContent,
            vTitle,
            vContentHeader,
            vBreadcrumb,
            vBreadcrumbItem,
            vCodePanel,
            vRow,
            vCol,
            vRadio,
            vRadioBtn,
            vRadioGroup
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

