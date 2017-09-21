<!--
    Created by linfengluo@gmail.com on 2017/9/21.
-->
<template>
    <vContent>
        <vContentHeader>
            <vTitle level="3">notify</vTitle>
            <vBreadcrumb slot="right">
                <vBreadcrumbItem>Notice</vBreadcrumbItem>
                <vBreadcrumbItem>Notify</vBreadcrumbItem>
            </vBreadcrumb>
        </vContentHeader>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">基本用法</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol&gt;
                    <vRow>
                        <vCol>
                            <vButton @click="openNotice1">自动关闭</vButton>
                            <vButton @click="openNotice2">不会自动关闭</vButton>
                            <vButton @click="openNotice3">没有标题</vButton>
                        </vCol>
                    </vRow>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vButton @click="openNotice1"&gt;自动关闭&lt;/vButton&gt;
&lt;vButton @click="openNotice2"&gt;不会自动关闭&lt;/vButton&gt;
&lt;vButton @click="openNotice3"&gt;没有标题&lt;/vButton&gt;
                </code><code class="javascript">
&lt;script&gt;
export default {
    methods: {
        openNotice1(){
            this.$notify.open({
                title: '提示',
                message: '这是一条提示信息'
            })
        },

        openNotice2(){
            this.$notify.open({
                title: '提示',
                message: '这是一条不会自动关闭提示信息',
                duration: 0
            })
        },
        openNotice3(){
            this.$notify.open({
                message: '这是一条提示信息'
            })
        }
    }
}
&lt;/script&gt;
            </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">State 状态</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol>
                    <vRow>
                        <vCol>
                            <vButton @click="openNotice4">default</vButton>
                            <vButton @click="openNotice5" state="info">info</vButton>
                            <vButton @click="openNotice6" state="warning">warning</vButton>
                            <vButton @click="openNotice7" state="success">success</vButton>
                            <vButton @click="openNotice8" state="danger">danger</vButton>
                        </vCol>
                    </vRow>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vButton @click="openNotice4"&gt;default&lt;/vButton&gt;
&lt;vButton @click="openNotice5" state="info"&gt;info&lt;/vButton&gt;
&lt;vButton @click="openNotice6" state="warning"&gt;warning&lt;/vButton&gt;
&lt;vButton @click="openNotice7" state="success"&gt;success&lt;/vButton&gt;
&lt;vButton @click="openNotice8" state="danger"&gt;danger&lt;/vButton&gt;
                </code><code class="javascript">
methods: {
    openNotice4(){
        this.$notify.open({
            title: '提示',
            message: '这是一条提示信息'
        })
    },
    openNotice5(){
        this.$notify.info({
            title: 'info提示',
            message: '这是一条提示信息'
        })
    },
    openNotice6(){
        this.$notify.warning({
            title: 'warning提示',
            message: '这是一条提示信息'
        })
    },
    openNotice7(){
        this.$notify.success({
            title: 'success提示',
            message: '这是一条提示信息'
        })
    },
    openNotice8(){
        this.$notify.danger({
            title: 'danger提示',
            message: '这是一条提示信息'
        })
    }
}
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
                <vCol>
                    <vRow>
                        <vCol>
                            <vButton @click="openNotice9">small</vButton>
                            <vButton @click="openNotice10">default</vButton>
                            <vButton @click="openNotice11">medium</vButton>
                            <vButton @click="openNotice12">large</vButton>
                        </vCol>
                    </vRow>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vButton @click="openNotice9"&gt;small&lt;/vButton&gt;
&lt;vButton @click="openNotice10"&gt;default&lt;/vButton&gt;
&lt;vButton @click="openNotice11"&gt;medium&lt;/vButton&gt;
&lt;vButton @click="openNotice12"&gt;large&lt;/vButton&gt;
                </code><code class="javascript">
methods: {
    openNotice9(){
        this.$notify.open({
            title: '提示',
            size: 'small',
            message: '这是一条提示信息'
        })
    },
    openNotice10(){
        this.$notify.open({
            title: '提示',
            message: '这是一条提示信息'
        })
    },
    openNotice11(){
        this.$notify.open({
            title: '提示',
            size: 'medium',
            message: '这是一条提示信息'
        })
    },
    openNotice12(){
        this.$notify.open({
            title: '提示',
            size: 'large',
            message: '这是一条提示信息'
        })
    }
}
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
    import {vTitle} from '../../elements/main'
    import {vButton} from '../../elements/button/index'
    export default {
        components: {
            vContent,
            vTitle,
            vContentHeader,
            vBreadcrumb,
            vBreadcrumbItem,
            vCodePanel,
            vRow,
            vCol,
            vButton
        },
        methods: {
            openNotice1(){
                this.$notify.open({
                    title: '提示',
                    message: '这是一条提示信息'
                })
            },

            openNotice2(){
                this.$notify.open({
                    title: '提示',
                    message: '这是一条不会自动关闭提示信息',
                    duration: 0
                })
            },
            openNotice3(){
                this.$notify.open({
                    message: '这是一条提示信息'
                })
            },

            openNotice4(){
                this.$notify.open({
                    title: '提示',
                    message: '这是一条提示信息'
                })
            },
            openNotice5(){
                this.$notify.info({
                    title: 'info提示',
                    message: '这是一条提示信息'
                })
            },
            openNotice6(){
                this.$notify.warning({
                    title: 'warning提示',
                    message: '这是一条提示信息'
                })
            },
            openNotice7(){
                this.$notify.success({
                    title: 'success提示',
                    message: '这是一条提示信息'
                })
            },
            openNotice8(){
                this.$notify.danger({
                    title: 'danger提示',
                    message: '这是一条提示信息'
                })
            },

            openNotice9(){
                this.$notify.open({
                    title: '提示',
                    size: 'small',
                    message: '这是一条提示信息'
                })
            },
            openNotice10(){
                this.$notify.open({
                    title: '提示',
                    message: '这是一条提示信息'
                })
            },
            openNotice11(){
                this.$notify.open({
                    title: '提示',
                    size: 'medium',
                    message: '这是一条提示信息'
                })
            },
            openNotice12(){
                this.$notify.open({
                    title: '提示',
                    size: 'large',
                    message: '这是一条提示信息'
                })
            }
        }
    }
</script>
