<!--
    Created by linfengluo@gmail.com on 2017/9/14.
-->
<template>
    <vContent>
        <vContentHeader>
            <vTitle level="3">button</vTitle>
            <vBreadcrumb slot="right">
                <vBreadcrumbItem>Elemnts</vBreadcrumbItem>
                <vBreadcrumbItem>Button</vBreadcrumbItem>
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
                            <vButton>button</vButton>
                            <vButton :disabled="true">disabled</vButton>
                        </vCol>
                    </vRow>
                </vCol>
                <vCol >
                    <p>通过 disabled 属性指定是否禁用 checkbox 组件</p>
                </vCol>

            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vButton&gt;button&lt;/vButton&gt;
&lt;vButton :disabled="true"&gt;disabled&lt;/vButton&gt;
                </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">state 状态</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vRow>
                        <vCol>
                            <vButton state="primary">primary</vButton>
                            <vButton state="info">info</vButton>
                            <vButton state="success">success</vButton>
                            <vButton state="warning">warning</vButton>
                            <vButton state="danger">danger</vButton>
                        </vCol>
                    </vRow>
                </vCol>
                <vCol >
                    <p>通过 state 属性指定是button 状态</p>
                    <p>可选择值：primary | info | success | warning | danger </p>
                </vCol>

            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vButton state="primary"&gt;primary&lt;/vButton&gt;
&lt;vButton state="info"&gt;info&lt;/vButton&gt;
&lt;vButton state="success"&gt;success&lt;/vButton&gt;
&lt;vButton state="warning"&gt;warning&lt;/vButton&gt;
&lt;vButton state="danger"&gt;danger&lt;/vButton&gt;
                </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">style 样式</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vRow>
                        <vCol>
                            <vButton styles='white'>white</vButton>
                            <vButton styles='light'>light</vButton>
                            <vButton styles='dark'>dark</vButton>
                            <vButton styles='black'>black</vButton>
                            <vButton styles='link'>link</vButton>

                        </vCol>
                    </vRow>
                </vCol>
                <vCol >
                    <p>通过 style 属性指定是button 样式</p>
                    <p>可选择值：white | light | dark | black | link </p>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vButton styles='white'&gt;white&lt;/vButton&gt;
&lt;vButton styles='light'&gt;light&lt;/vButton&gt;
&lt;vButton styles='dark'&gt;dark&lt;/vButton&gt;
&lt;vButton styles='black'&gt;black&lt;/vButton&gt;
&lt;vButton styles='link'&gt;link&lt;/vButton&gt;
                </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">Outlined || Inverted</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vRow>
                        <vCol>
                            <vButton :outlined="true">Outlined</vButton>
                            <vButton :outlined="true" state="info">Outlined</vButton>
                            <vButton :outlined="true" state="danger">Outlined</vButton>

                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol class="is-primary">
                            <vButton :inverted="true">Inverted</vButton>
                            <vButton :inverted="true" state="info">Inverted</vButton>
                            <vButton :inverted="true" state="danger">Inverted</vButton>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol class="is-primary">
                            <vButton :inverted="true" :outlined="true">button</vButton>
                            <vButton :inverted="true" :outlined="true" state="info">button</vButton>
                            <vButton :inverted="true" :outlined="true" state="danger">button</vButton>
                        </vCol>
                    </vRow>
                </vCol>
                <vCol >
                    <p>通过 outlined 属性指定边框颜色</p>
                    <p>通过 inverted 属性设定是否反转颜色</p>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vButton :outlined="true"&gt;Outlined&lt;/vButton&gt;
&lt;vButton :outlined="true" state="info"&gt;Outlined&lt;/vButton&gt;
&lt;vButton :outlined="true" state="danger"&gt;Outlined&lt;/vButton&gt;

&lt;vButton :inverted="true"&gt;Inverted&lt;/vButton&gt;
&lt;vButton :inverted="true" state="info"&gt;Inverted&lt;/vButton&gt;
&lt;vButton :inverted="true" state="danger"&gt;Inverted&lt;/vButton&gt;

&lt;vButton :inverted="true" :outlined="true"&gt;button&lt;/vButton&gt;
&lt;vButton :inverted="true" :outlined="true" state="info"&gt;button&lt;/vButton&gt;
&lt;vButton :inverted="true" :outlined="true" state="danger"&gt;button&lt;/vButton&gt;
                </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">icon 图标</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vRow>
                        <vCol>
                            <vButton icon="android"></vButton>
                            <vButton icon="apple"></vButton>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vButton leftIcon="android">android</vButton>
                            <vButton rightIcon="apple">apple</vButton>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vButton leftIcon="android" state="primary">leftIcon</vButton>
                            <vButton rightIcon="apple" state="danger">rightIcon</vButton>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vButton >diyIcon
                                <i class="fa fa-angellist" aria-hidden="true"></i>
                            </vButton>
                        </vCol>
                    </vRow>
                </vCol>
                <vCol >
                    <p>可选择 icon 属性，存在 icon 属性即使用纯ICON按钮</p>
                    <p>leftIcon 、 rightIcon 为左边或右边的Icon </p>
                    <p>在文字旁边使用i标签，可以使用自定义图标。</p>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vButton icon="android"&gt;&lt;/vButton&gt;
&lt;vButton icon="apple"&gt;&lt;/vButton&gt;
&lt;vButton leftIcon="android"&gt;android&lt;/vButton&gt;
&lt;vButton rightIcon="apple"&gt;apple&lt;/vButton&gt;
&lt;vButton leftIcon="android" state="primary"&gt;leftIcon&lt;/vButton&gt;
&lt;vButton rightIcon="apple" state="danger"&gt;rightIcon&lt;/vButton&gt;
&lt;vButton &gt;diyIcon
    &lt;i class="fa fa-angellist" aria-hidden="true"&gt;&lt;/i&gt;
&lt;/vButton&gt;
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
                <vCol size="7">
                    <vRow>
                        <vCol>
                            <vButton size="small">small</vButton>
                            <vButton >normal</vButton>
                            <vButton size="medium">medium</vButton>
                            <vButton size="large">large</vButton>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vButton icon="android" size="small"></vButton>
                            <vButton icon="android"></vButton>
                            <vButton icon="android" size="medium"></vButton>
                            <vButton icon="android" size="large"></vButton>
                        </vCol>
                    </vRow>
                </vCol>
                <vCol >
                    <p>通过 size 属性指定是button 大小</p>
                    <p>可选择值：small | medium | large </p>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vButton size="small"&gt;small&lt;/vButton&gt;
&lt;vButton &gt;normal&lt;/vButton&gt;
&lt;vButton size="medium"&gt;medium&lt;/vButton&gt;
&lt;vButton size="large"&gt;large&lt;/vButton&gt;

&lt;vButton icon="android" size="small"&gt;&lt;/vButton&gt;
&lt;vButton icon="android"&gt;&lt;/vButton&gt;
&lt;vButton icon="android" size="medium"&gt;&lt;/vButton&gt;
&lt;vButton icon="android" size="large"&gt;&lt;/vButton&gt;
                </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">group 按钮组</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vRow>
                        <vCol>
                            <vButtonGroup>
                                <vButton icon="android"></vButton>
                                <vButton icon="apple"></vButton>
                            </vButtonGroup>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vButtonGroup>
                                <vButton>android</vButton>
                                <vButton>apple</vButton>
                            </vButtonGroup>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vButtonGroup>
                                <vButton leftIcon="android" >android</vButton>
                                <vButton leftIcon="apple" state="primary">apple</vButton>
                            </vButtonGroup>
                        </vCol>
                    </vRow>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vButtonGroup&gt;
    &lt;vButton icon="android"&gt;&lt;/vButton&gt;
    &lt;vButton icon="apple"&gt;&lt;/vButton&gt;
&lt;/vButtonGroup&gt;
&lt;vButtonGroup&gt;
    &lt;vButton&gt;android&lt;/vButton&gt;
    &lt;vButton&gt;apple&lt;/vButton&gt;
&lt;/vButtonGroup&gt;
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
    import {vButton, vButtonGroup} from '../../components/button'
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
            vButton,
            vButtonGroup
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
    @import "../../sass/variables/variables";
.column{
    .is-primary{
        background-color: $primary;
    }

}
</style>


