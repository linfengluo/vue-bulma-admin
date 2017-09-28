<!--
    Created by linfengluo@gmail.com on 2017/9/21.
-->
<template>
    <vb-content>
        <vb-contentHeader>
            <vb-title level="3">message</vb-title>
            <vb-breadcrumbGroup slot="right">
                <vb-breadcrumb>Notice</vb-breadcrumb>
                <vb-breadcrumb>Message</vb-breadcrumb>
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
                        <vb-button @click="openMessage1">自动关闭</vb-button>
                        <vb-button @click="openMessage2">不会自动关闭</vb-button>
                        <vb-button @click="openMessage18" >不可手动关闭</vb-button>
                    </vb-col>
                </vb-row>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-button @click="openMessage1"&gt;自动关闭&lt;/vb-button&gt;
&lt;vb-button @click="openMessage2"&gt;不会自动关闭&lt;/vb-button&gt;
&lt;vb-button @click="openMessage18"&gt;不可手动关闭&lt;/vb-button&gt;
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
                            <vb-button @click="openMessage4">default</vb-button>
                            <vb-button @click="openMessage19" state="light">light</vb-button>
                            <vb-button @click="openMessage5" state="info">info</vb-button>
                            <vb-button @click="openMessage20" state="primary">primary</vb-button>
                            <vb-button @click="openMessage6" state="warning">warning</vb-button>
                            <vb-button @click="openMessage7" state="success">success</vb-button>
                            <vb-button @click="openMessage8" state="danger">danger</vb-button>
                        </vb-col>
                    </vb-row>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-button @click="openMessage4"&gt;default&lt;/vb-button&gt;
&lt;vb-button @click="openMessage19" state="light"&gt;light&lt;/vb-button&gt;
&lt;vb-button @click="openMessage5" state="info"&gt;info&lt;/vb-button&gt;
&lt;vb-button @click="openMessage20" state="primary"&gt;primary&lt;/vb-button&gt;
&lt;vb-button @click="openMessage6" state="warning"&gt;warning&lt;/vb-button&gt;
&lt;vb-button @click="openMessage7" state="success"&gt;success&lt;/vb-button&gt;
&lt;vb-button @click="openMessage8" state="danger"&gt;danger&lt;/vb-button&gt;
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

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">disable Title 没有标题</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col>
                    <vb-row>
                        <vb-col>
                            <vb-button @click="openMessage13">default</vb-button>
                            <vb-button @click="openMessage21" state="light">light</vb-button>
                            <vb-button @click="openMessage14" state="info">info</vb-button>
                            <vb-button @click="openMessage22" state="primary">primary</vb-button>
                            <vb-button @click="openMessage15" state="warning">warning</vb-button>
                            <vb-button @click="openMessage16" state="success">success</vb-button>
                            <vb-button @click="openMessage17" state="danger">danger</vb-button>
                        </vb-col>
                    </vb-row>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-button @click="openMessage13"&gt;default&lt;/vb-button&gt;
&lt;vb-button @click="openMessage21" state="light"&gt;light&lt;/vb-button&gt;
&lt;vb-button @click="openMessage14" state="info"&gt;info&lt;/vb-button&gt;
&lt;vb-button @click="openMessage22" state="primary"&gt;primary&lt;/vb-button&gt;
&lt;vb-button @click="openMessage15" state="warning"&gt;warning&lt;/vb-button&gt;
&lt;vb-button @click="openMessage16" state="success"&gt;success&lt;/vb-button&gt;
&lt;vb-button @click="openMessage17" state="danger"&gt;danger&lt;/vb-button&gt;
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
                            <vb-button @click="openMessage9">small</vb-button>
                            <vb-button @click="openMessage10">default</vb-button>
                            <vb-button @click="openMessage11">medium</vb-button>
                            <vb-button @click="openMessage12">large</vb-button>
                        </vb-col>
                    </vb-row>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-button @click="openMessage9"&gt;small&lt;/vb-button&gt;
&lt;vb-button @click="openMessage10"&gt;default&lt;/vb-button&gt;
&lt;vb-button @click="openMessage11"&gt;medium&lt;/vb-button&gt;
&lt;vb-button @click="openMessage12"&gt;large&lt;/vb-button&gt;
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
    </vb-content>
</template>

<script>
    import vCodePanel from '../../components/codePanel/codePanel.vue'
    export default {
        components: {
            vCodePanel
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
