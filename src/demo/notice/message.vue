<!--
    Created by linfengluo@gmail.com on 2017/9/21.
-->
<template>
    <vContent>
        <vContentHeader>
            <vTitle level="3">message</vTitle>
            <vBreadcrumb slot="right">
                <vBreadcrumbItem>Notice</vBreadcrumbItem>
                <vBreadcrumbItem>Message</vBreadcrumbItem>
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
                        <vButton @click="openMessage1">自动关闭</vButton>
                        <vButton @click="openMessage2">不会自动关闭</vButton>
                        <vButton @click="openMessage18" >不可手动关闭</vButton>
                    </vCol>
                </vRow>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vButton @click="openMessage1"&gt;自动关闭&lt;/vButton&gt;
&lt;vButton @click="openMessage2"&gt;不会自动关闭&lt;/vButton&gt;
&lt;vButton @click="openMessage18"&gt;不可手动关闭&lt;/vButton&gt;
                </code><code class="javascript">
&lt;script&gt;
export default {
    methods: {
        openMessage1(){
            this.$message.open({
                title: '提示',
                message: '这是一条提示信息'
            })
        },

        openMessage2(){
            this.$message.open({
                title: '提示',
                message: '这是一条不会自动关闭提示信息',
                duration: 0
            })
        },

        openMessage18(){
            this.$message.open({
                title: '提示',
                message: '不可手动关闭',
                closeable: false
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
                            <vButton @click="openMessage4">default</vButton>
                            <vButton @click="openMessage19" state="light">light</vButton>
                            <vButton @click="openMessage5" state="info">info</vButton>
                            <vButton @click="openMessage20" state="primary">primary</vButton>
                            <vButton @click="openMessage6" state="warning">warning</vButton>
                            <vButton @click="openMessage7" state="success">success</vButton>
                            <vButton @click="openMessage8" state="danger">danger</vButton>
                        </vCol>
                    </vRow>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vButton @click="openMessage4"&gt;default&lt;/vButton&gt;
&lt;vButton @click="openMessage19" state="light"&gt;light&lt;/vButton&gt;
&lt;vButton @click="openMessage5" state="info"&gt;info&lt;/vButton&gt;
&lt;vButton @click="openMessage20" state="primary"&gt;primary&lt;/vButton&gt;
&lt;vButton @click="openMessage6" state="warning"&gt;warning&lt;/vButton&gt;
&lt;vButton @click="openMessage7" state="success"&gt;success&lt;/vButton&gt;
&lt;vButton @click="openMessage8" state="danger"&gt;danger&lt;/vButton&gt;
                </code><code class="javascript">
methods: {
    openMessage4(){
        this.$message.open({
            title: '提示',
            message: '这是一条提示信息'
        })
    },
    openMessage5(){
        this.$message.info({
            title: 'info提示',
            message: '这是一条提示信息'
        })
    },
    openMessage6(){
        this.$message.warning({
            title: 'warning提示',
            message: '这是一条提示信息'
        })
    },
    openMessage7(){
        this.$message.success({
            title: 'success提示',
            message: '这是一条提示信息'
        })
    },
    openMessage8(){
        this.$message.danger({
            title: 'danger提示',
            message: '这是一条提示信息'
        })
    },
    openMessage19(){
        this.$message.light({
            title: 'light提示',
            message: '这是一条提示信息'
        })
    },

    openMessage20(){
        this.$message.primary({
            title: 'primary提示',
            message: '这是一条提示信息'
        })
    },
}
            </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">disable Title 没有标题</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol>
                    <vRow>
                        <vCol>
                            <vButton @click="openMessage13">default</vButton>
                            <vButton @click="openMessage21" state="light">light</vButton>
                            <vButton @click="openMessage14" state="info">info</vButton>
                            <vButton @click="openMessage22" state="primary">primary</vButton>
                            <vButton @click="openMessage15" state="warning">warning</vButton>
                            <vButton @click="openMessage16" state="success">success</vButton>
                            <vButton @click="openMessage17" state="danger">danger</vButton>
                        </vCol>
                    </vRow>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vButton @click="openMessage13"&gt;default&lt;/vButton&gt;
&lt;vButton @click="openMessage21" state="light"&gt;light&lt;/vButton&gt;
&lt;vButton @click="openMessage14" state="info"&gt;info&lt;/vButton&gt;
&lt;vButton @click="openMessage22" state="primary"&gt;primary&lt;/vButton&gt;
&lt;vButton @click="openMessage15" state="warning"&gt;warning&lt;/vButton&gt;
&lt;vButton @click="openMessage16" state="success"&gt;success&lt;/vButton&gt;
&lt;vButton @click="openMessage17" state="danger"&gt;danger&lt;/vButton&gt;
                </code><code class="javascript">
openMessage13(){
    this.$message.open({
        message: '这是一条提示信息'
    })
},
openMessage14(){
    this.$message.info({
        message: '这是一条提示信息'
    })
},
openMessage15(){
    this.$message.warning({
        message: '这是一条提示信息'
    })
},
openMessage16(){
    this.$message.success({
        message: '这是一条提示信息'
    })
},
openMessage17(){
    this.$message.danger({
        message: '这是一条提示信息'
    })
}
openMessage21(){
    this.$message.light({
        message: '这是一条提示信息'
    })
},

openMessage22(){
    this.$message.primary({
        message: '这是一条提示信息'
    })
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
                            <vButton @click="openMessage9">small</vButton>
                            <vButton @click="openMessage10">default</vButton>
                            <vButton @click="openMessage11">medium</vButton>
                            <vButton @click="openMessage12">large</vButton>
                        </vCol>
                    </vRow>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vButton @click="openMessage9"&gt;small&lt;/vButton&gt;
&lt;vButton @click="openMessage10"&gt;default&lt;/vButton&gt;
&lt;vButton @click="openMessage11"&gt;medium&lt;/vButton&gt;
&lt;vButton @click="openMessage12"&gt;large&lt;/vButton&gt;
                </code><code class="javascript">
methods: {
    openMessage9(){
        this.$message.open({
            title: '提示',
            size: 'small',
            message: '这是一条提示信息'
        })
    },
    openMessage10(){
        this.$message.open({
            title: '提示',
            message: '这是一条提示信息'
        })
    },
    openMessage11(){
        this.$message.open({
            title: '提示',
            size: 'medium',
            message: '这是一条提示信息'
        })
    },
    openMessage12(){
        this.$message.open({
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
            openMessage1(){
                this.$message.open({
                    title: '提示',
                    message: '这是一条提示信息'
                })
            },

            openMessage2(){
                this.$message.open({
                    title: '提示',
                    message: '这是一条不会自动关闭提示信息',
                    duration: 0
                })
            },
            openMessage3(){
                this.$message.open({
                    message: '这是一条提示信息'
                })
            },

            openMessage4(){
                this.$message.open({
                    title: '提示',
                    message: '这是一条提示信息'
                })
            },
            openMessage5(){
                this.$message.info({
                    title: 'info提示',
                    message: '这是一条提示信息'
                })
            },
            openMessage6(){
                this.$message.warning({
                    title: 'warning提示',
                    message: '这是一条提示信息'
                })
            },
            openMessage7(){
                this.$message.success({
                    title: 'success提示',
                    message: '这是一条提示信息'
                })
            },
            openMessage8(){
                this.$message.danger({
                    title: 'danger提示',
                    message: '这是一条提示信息'
                })
            },
            openMessage19(){
                this.$message.light({
                    title: 'light提示',
                    message: '这是一条提示信息'
                })
            },

            openMessage20(){
                this.$message.primary({
                    title: 'primary提示',
                    message: '这是一条提示信息'
                })
            },

            openMessage9(){
                this.$message.open({
                    title: '提示',
                    size: 'small',
                    message: '这是一条提示信息'
                })
            },
            openMessage10(){
                this.$message.open({
                    title: '提示',
                    message: '这是一条提示信息'
                })
            },
            openMessage11(){
                this.$message.open({
                    title: '提示',
                    size: 'medium',
                    message: '这是一条提示信息'
                })
            },
            openMessage12(){
                this.$message.open({
                    title: '提示',
                    size: 'large',
                    message: '这是一条提示信息'
                })
            },
            openMessage13(){
                this.$message.open({
                    message: '这是一条提示信息'
                })
            },
            openMessage14(){
                this.$message.info({
                    message: '这是一条提示信息'
                })
            },
            openMessage15(){
                this.$message.warning({
                    message: '这是一条提示信息'
                })
            },
            openMessage16(){
                this.$message.success({
                    message: '这是一条提示信息'
                })
            },
            openMessage17(){
                this.$message.danger({
                    message: '这是一条提示信息'
                })
            },

            openMessage21(){
                this.$message.light({
                    message: '这是一条提示信息'
                })
            },

            openMessage22(){
                this.$message.primary({
                    message: '这是一条提示信息'
                })
            },
            openMessage18(){
                this.$message.open({
                    title: '提示',
                    message: '不可手动关闭',
                    closeable: false
                })
            }
        }
    }
</script>
