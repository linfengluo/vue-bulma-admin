<!--
    Created by linfengluo@gmail.com on 2017/9/14.
-->
<template>
    <vb-content>
        <vb-contentHeader>
            <vb-title level="3">button</vb-title>
            <vb-breadcrumbGroup slot="right">
                <vb-breadcrumb>Elemnts</vb-breadcrumb>
                <vb-breadcrumb>Button</vb-breadcrumb>
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
                            <vb-button>button</vb-button>
                            <vb-button :disabled="true">disabled</vb-button>
                        </vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    <p>通过 disabled 属性指定是否禁用 checkbox 组件</p>
                </vb-col>

            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-button&gt;button&lt;/vb-button&gt;
&lt;vb-button :disabled="true"&gt;disabled&lt;/vb-button&gt;
                </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">state 状态</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-row>
                        <vb-col>
                            <vb-button state="primary">primary</vb-button>
                            <vb-button state="info">info</vb-button>
                            <vb-button state="success">success</vb-button>
                            <vb-button state="warning">warning</vb-button>
                            <vb-button state="danger">danger</vb-button>
                        </vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    <p>通过 state 属性指定是button 状态</p>
                    <p>可选择值：primary | info | success | warning | danger </p>
                </vb-col>

            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-button state="primary"&gt;primary&lt;/vb-button&gt;
&lt;vb-button state="info"&gt;info&lt;/vb-button&gt;
&lt;vb-button state="success"&gt;success&lt;/vb-button&gt;
&lt;vb-button state="warning"&gt;warning&lt;/vb-button&gt;
&lt;vb-button state="danger"&gt;danger&lt;/vb-button&gt;
                </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">style 样式</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-row>
                        <vb-col>
                            <vb-button styles='white'>white</vb-button>
                            <vb-button styles='light'>light</vb-button>
                            <vb-button styles='dark'>dark</vb-button>
                            <vb-button styles='black'>black</vb-button>
                            <vb-button styles='link'>link</vb-button>

                        </vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    <p>通过 style 属性指定是button 样式</p>
                    <p>可选择值：white | light | dark | black | link </p>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-button styles='white'&gt;white&lt;/vb-button&gt;
&lt;vb-button styles='light'&gt;light&lt;/vb-button&gt;
&lt;vb-button styles='dark'&gt;dark&lt;/vb-button&gt;
&lt;vb-button styles='black'&gt;black&lt;/vb-button&gt;
&lt;vb-button styles='link'&gt;link&lt;/vb-button&gt;
                </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">Outlined || Inverted</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-row>
                        <vb-col>
                            <vb-button :outlined="true">Outlined</vb-button>
                            <vb-button :outlined="true" state="info">Outlined</vb-button>
                            <vb-button :outlined="true" state="danger">Outlined</vb-button>

                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col class="is-primary">
                            <vb-button :inverted="true">Inverted</vb-button>
                            <vb-button :inverted="true" state="info">Inverted</vb-button>
                            <vb-button :inverted="true" state="danger">Inverted</vb-button>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col class="is-primary">
                            <vb-button :inverted="true" :outlined="true">button</vb-button>
                            <vb-button :inverted="true" :outlined="true" state="info">button</vb-button>
                            <vb-button :inverted="true" :outlined="true" state="danger">button</vb-button>
                        </vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    <p>通过 outlined 属性指定边框颜色</p>
                    <p>通过 inverted 属性设定是否反转颜色</p>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-button :outlined="true"&gt;Outlined&lt;/vb-button&gt;
&lt;vb-button :outlined="true" state="info"&gt;Outlined&lt;/vb-button&gt;
&lt;vb-button :outlined="true" state="danger"&gt;Outlined&lt;/vb-button&gt;

&lt;vb-button :inverted="true"&gt;Inverted&lt;/vb-button&gt;
&lt;vb-button :inverted="true" state="info"&gt;Inverted&lt;/vb-button&gt;
&lt;vb-button :inverted="true" state="danger"&gt;Inverted&lt;/vb-button&gt;

&lt;vb-button :inverted="true" :outlined="true"&gt;button&lt;/vb-button&gt;
&lt;vb-button :inverted="true" :outlined="true" state="info"&gt;button&lt;/vb-button&gt;
&lt;vb-button :inverted="true" :outlined="true" state="danger"&gt;button&lt;/vb-button&gt;
                </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">icon 图标</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-row>
                        <vb-col>
                            <vb-button icon="android"></vb-button>
                            <vb-button icon="apple"></vb-button>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-button leftIcon="android">android</vb-button>
                            <vb-button rightIcon="apple">apple</vb-button>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-button leftIcon="android" state="primary">leftIcon</vb-button>
                            <vb-button rightIcon="apple" state="danger">rightIcon</vb-button>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-button >diyIcon
                                <i class="fa fa-angellist" aria-hidden="true"></i>
                            </vb-button>
                        </vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    <p>可选择 icon 属性，存在 icon 属性即使用纯ICON按钮</p>
                    <p>leftIcon 、 rightIcon 为左边或右边的Icon </p>
                    <p>在文字旁边使用i标签，可以使用自定义图标。</p>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-button icon="android"&gt;&lt;/vb-button&gt;
&lt;vb-button icon="apple"&gt;&lt;/vb-button&gt;
&lt;vb-button leftIcon="android"&gt;android&lt;/vb-button&gt;
&lt;vb-button rightIcon="apple"&gt;apple&lt;/vb-button&gt;
&lt;vb-button leftIcon="android" state="primary"&gt;leftIcon&lt;/vb-button&gt;
&lt;vb-button rightIcon="apple" state="danger"&gt;rightIcon&lt;/vb-button&gt;
&lt;vb-button &gt;diyIcon
    &lt;i class="fa fa-angellist" aria-hidden="true"&gt;&lt;/i&gt;
&lt;/vb-button&gt;
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
                <vb-col size="7">
                    <vb-row>
                        <vb-col>
                            <vb-button size="small">small</vb-button>
                            <vb-button >normal</vb-button>
                            <vb-button size="medium">medium</vb-button>
                            <vb-button size="large">large</vb-button>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-button icon="android" size="small"></vb-button>
                            <vb-button icon="android"></vb-button>
                            <vb-button icon="android" size="medium"></vb-button>
                            <vb-button icon="android" size="large"></vb-button>
                        </vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    <p>通过 size 属性指定是button 大小</p>
                    <p>可选择值：small | medium | large </p>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-button size="small"&gt;small&lt;/vb-button&gt;
&lt;vb-button &gt;normal&lt;/vb-button&gt;
&lt;vb-button size="medium"&gt;medium&lt;/vb-button&gt;
&lt;vb-button size="large"&gt;large&lt;/vb-button&gt;

&lt;vb-button icon="android" size="small"&gt;&lt;/vb-button&gt;
&lt;vb-button icon="android"&gt;&lt;/vb-button&gt;
&lt;vb-button icon="android" size="medium"&gt;&lt;/vb-button&gt;
&lt;vb-button icon="android" size="large"&gt;&lt;/vb-button&gt;
                </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">group 按钮组</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-row>
                        <vb-col>
                            <vb-buttonGroup>
                                <vb-button icon="android"></vb-button>
                                <vb-button icon="apple"></vb-button>
                            </vb-buttonGroup>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-buttonGroup>
                                <vb-button>android</vb-button>
                                <vb-button>apple</vb-button>
                            </vb-buttonGroup>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-buttonGroup>
                                <vb-button leftIcon="android" >android</vb-button>
                                <vb-button leftIcon="apple" state="primary">apple</vb-button>
                            </vb-buttonGroup>
                        </vb-col>
                    </vb-row>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-buttonGroup&gt;
    &lt;vb-button icon="android"&gt;&lt;/vb-button&gt;
    &lt;vb-button icon="apple"&gt;&lt;/vb-button&gt;
&lt;/vb-buttonGroup&gt;
&lt;vb-buttonGroup&gt;
    &lt;vb-button&gt;android&lt;/vb-button&gt;
    &lt;vb-button&gt;apple&lt;/vb-button&gt;
&lt;/vb-buttonGroup&gt;
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
    @import "../../sass/variables/variables";
.column{
    .is-primary{
        background-color: $primary;
    }

}
</style>


