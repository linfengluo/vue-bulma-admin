<!--
    Created by linfengluo@gmail.com on 2017/10/12.
-->
<template>
    <vb-content>
        <vb-contentHeader>
            <vb-title level="3">badge</vb-title>
            <vb-breadcrumbGroup slot="right">
                <vb-breadcrumb>data</vb-breadcrumb>
                <vb-breadcrumb>Badge</vb-breadcrumb>
            </vb-breadcrumbGroup>
        </vb-contentHeader>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">基本用法</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    <vb-badge value="20" class="margin">
                        <vb-button>测试</vb-button>
                    </vb-badge>
                    <vb-badge value="5">
                        <vb-button>测试</vb-button>
                    </vb-badge>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    <p>通过 value 属性指定是内容</p>
                </vb-col>
            </vb-row>
            <template slot="code">
                <code class="html" v-text="demo1"></code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">自定义内容</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    <vb-badge value="hot" class="margin">
                        <vb-button>测试</vb-button>
                    </vb-badge>
                    <vb-badge value="new">
                        <vb-button>测试</vb-button>
                    </vb-badge>
                </vb-col>
            </vb-row>
            <template slot="code">
                <code class="html" v-text="demo2"></code>
            </template>
        </vCodePanel>

        <vb-row>
        <vb-col>
            <vb-title level="4" :isMargin="true">小红点</vb-title>
        </vb-col>
    </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    <vb-badge value="hot" class="margin" :isDot="true">
                        <vb-button>测试</vb-button>
                    </vb-badge>
                    <vb-badge value="new" :isDot="true">
                        <span>测试</span>
                    </vb-badge>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    <p>通过 isDot 属性指定是否为小红点</p>
                </vb-col>
            </vb-row>
            <template slot="code">
                <code class="html" v-text="demo3"></code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">最大值</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    <vb-badge value="100" class="margin" :max="99">
                        <vb-button>测试</vb-button>
                    </vb-badge>
                    <vb-badge value="100" max="20">
                        <vb-button>测试</vb-button>
                    </vb-badge>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    <p>通过 max 属性指定是最大值</p>
                </vb-col>
            </vb-row>
            <template slot="code">
                <code class="html" v-text="demo4"></code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">状态</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    <vb-badge value="100" class="margin" state="primary">
                        <vb-button>测试</vb-button>
                    </vb-badge>
                    <vb-badge value="100" class="margin" state="danger">
                        <vb-button>测试</vb-button>
                    </vb-badge>
                    <vb-badge value="100" class="margin" state="success">
                        <vb-button>测试</vb-button>
                    </vb-badge>
                    <vb-badge value="100" class="margin" state="warning">
                        <vb-button>测试</vb-button>
                    </vb-badge>
                    <vb-badge value="100" class="margin" state="info">
                        <vb-button>测试</vb-button>
                    </vb-badge>
                </vb-col>
            </vb-row>
            <vb-row>
                <vb-col>
                    <p>通过 state 属性指定是状态</p>
                    <p>可选择值：primary | info | success | danger | warning</p>
                </vb-col>
            </vb-row>
            <template slot="code">
                <code class="html" v-text="demo5"></code>
            </template>
        </vCodePanel>
    </vb-content>
</template>

<script>
    import vCodePanel from '../../components/codePanel/codePanel.vue'
    export default {
        data() {
            return {
                demo1: `<vb-badge value="20" class="margin">
    <vb-button>测试</vb-button>
</vb-badge>
<vb-badge value="5">
    <vb-button>测试</vb-button>
</vb-badge>`,
                demo2: `<vb-badge value="hot" class="margin">
    <vb-button>测试</vb-button>
</vb-badge>
<vb-badge value="new">
    <vb-button>测试</vb-button>
</vb-badge>`,
                demo3: `<vb-badge value="hot" class="margin" :isDot="true">
    <vb-button>测试</vb-button>
</vb-badge>
<vb-badge value="new" :isDot="true">
    <span>测试</span>
</vb-badge>`,
                demo4: `<vb-badge value="100" class="margin" :max="99">
    <vb-button>测试</vb-button>
</vb-badge>
<vb-badge value="100" max="20">
    <vb-button>测试</vb-button>
</vb-badge>`,
                demo5: `<vb-badge value="100" class="margin" state="primary">
    <vb-button>测试</vb-button>
</vb-badge>
<vb-badge value="100" class="margin" state="danger">
    <vb-button>测试</vb-button>
</vb-badge>
<vb-badge value="100" class="margin" state="success">
    <vb-button>测试</vb-button>
</vb-badge>
<vb-badge value="100" class="margin" state="warning">
    <vb-button>测试</vb-button>
</vb-badge>
<vb-badge value="100" class="margin" state="info">
    <vb-button>测试</vb-button>
</vb-badge>`
            }
        },
        components: {
            vCodePanel
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
.margin{
    margin-right: 30px;
}
</style>
