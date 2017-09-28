<!--
    Created by linfengluo@gmail.com on 2017/9/21.
-->
<template>
    <vb-content>
        <vb-contentHeader>
            <vb-title level="3">notify</vb-title>
            <vb-breadcrumbGroup slot="right">
                <vb-breadcrumb>Notice</vb-breadcrumb>
                <vb-breadcrumb>Notify</vb-breadcrumb>
            </vb-breadcrumbGroup>
        </vb-contentHeader>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">基本用法</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col&gt;
                    <vb-row>
                        <vb-col>
                            <vb-button @click="openNotice1">自动关闭</vb-button>
                            <vb-button @click="openNotice2">不会自动关闭</vb-button>
                            <vb-button @click="openNotice3">没有标题</vb-button>
                        </vb-col>
                    </vb-row>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-button @click="openNotice1"&gt;自动关闭&lt;/vb-button&gt;
&lt;vb-button @click="openNotice2"&gt;不会自动关闭&lt;/vb-button&gt;
&lt;vb-button @click="openNotice3"&gt;没有标题&lt;/vb-button&gt;
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

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">State 状态</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    <vb-row>
                        <vb-col>
                            <vb-button @click="openNotice4">default</vb-button>
                            <vb-button @click="openNotice13" state="light">light</vb-button>
                            <vb-button @click="openNotice5" state="info">info</vb-button>
                            <vb-button @click="openNotice14" state="primary">primary</vb-button>
                            <vb-button @click="openNotice6" state="warning">warning</vb-button>
                            <vb-button @click="openNotice7" state="success">success</vb-button>
                            <vb-button @click="openNotice8" state="danger">danger</vb-button>
                        </vb-col>
                    </vb-row>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-button @click="openNotice4"&gt;default&lt;/vb-button&gt;
&lt;vb-button @click="openNotice13" state="light"&gt;light&lt;/vb-button&gt;
&lt;vb-button @click="openNotice5" state="info"&gt;info&lt;/vb-button&gt;
&lt;vb-button @click="openNotice14" state="primary"&gt;primary&lt;/vb-button&gt;
&lt;vb-button @click="openNotice6" state="warning"&gt;warning&lt;/vb-button&gt;
&lt;vb-button @click="openNotice7" state="success"&gt;success&lt;/vb-button&gt;
&lt;vb-button @click="openNotice8" state="danger"&gt;danger&lt;/vb-button&gt;
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
    },

    openNotice13(){
        this.$notify.light({
            title: 'light 提示',
            message: '这是一条提示信息'
        })
    },

    openNotice14(){
        this.$notify.primary({
            title: 'primary 提示',
            message: '这是一条提示信息'
        })
    }
}
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
                <vb-col>
                    <vb-row>
                        <vb-col>
                            <vb-button @click="openNotice9">small</vb-button>
                            <vb-button @click="openNotice10">default</vb-button>
                            <vb-button @click="openNotice11">medium</vb-button>
                            <vb-button @click="openNotice12">large</vb-button>
                        </vb-col>
                    </vb-row>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-button @click="openNotice9"&gt;small&lt;/vb-button&gt;
&lt;vb-button @click="openNotice10"&gt;default&lt;/vb-button&gt;
&lt;vb-button @click="openNotice11"&gt;medium&lt;/vb-button&gt;
&lt;vb-button @click="openNotice12"&gt;large&lt;/vb-button&gt;
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

    </vb-content>
</template>

<script>
    import vCodePanel from '../../components/codePanel/codePanel.vue'

    export default {
        components: {
            vCodePanel
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

            openNotice13(){
                this.$notify.light({
                    title: 'light 提示',
                    message: '这是一条提示信息'
                })
            },

            openNotice14(){
                this.$notify.primary({
                    title: 'primary 提示',
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
