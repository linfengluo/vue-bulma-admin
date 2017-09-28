<!--
    Created by linfengluo@gmail.com on 2017/9/14.
-->
<template>
    <vb-content>
        <vb-contentHeader>
            <vb-title level="3">radio</vb-title>
            <vb-breadcrumbGroup slot="right">
                <vb-breadcrumb>Form</vb-breadcrumb>
                <vb-breadcrumb>Radio</vb-breadcrumb>
            </vb-breadcrumbGroup>
        </vb-contentHeader>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">基本使用</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-row>
                        <vb-col>
                            <vb-switch v-model="selected" width="100"></vb-switch>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-switch v-model="selected1" :disabled="true"></vb-switch>
                        </vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    通过 disabled 属性指定是否禁用 switch 组件
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-switch v-model="selected"&gt;&lt;/vb-switch&gt;
&lt;vb-switch v-model="selected1" :disabled="true"&gt;&lt;/vb-switch&gt;
                </code><code class="javascript">
&lt;script&gt;
import vb-switch from '../../components/form/switch/switch.vue'
export default {
    data() {
        return {
            selected: false,
        }
    },
    components: {
        vb-switch
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
                            <vb-switch v-model="selected5" offColor="red" onColor="#3273DC"></vb-switch>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-switch v-model="selected4" onColor="#FFDD57"></vb-switch>
                        </vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    <p>通过 onColor 和 offColor 属性设置开关颜色</p>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-switch v-model="selected5" offColor="red" onColor="#3273DC"&gt;&lt;/vb-switch&gt;
&lt;vb-switch v-model="selected4" onColor="#FFDD57"&gt;&lt;/vb-switch&gt;
                </code>
            </template>
        </vCodePanel>

        <vb-row>
            <vb-col>
                <vb-title level="4" :isMargin="true">扩展</vb-title>
            </vb-col>
        </vb-row>
        <vCodePanel>
            <vb-row>
                <vb-col size="7">
                    <vb-row>
                        <vb-col>
                            <vb-switch v-model="selected2" onText="On" offText="Off"></vb-switch>
                        </vb-col>
                    </vb-row>
                    <vb-row>
                        <vb-col>
                            <vb-switch v-model="selected3" onText="On" offText="Off" onValue="1" offValue="0"></vb-switch>
                        </vb-col>
                    </vb-row>
                </vb-col>
                <vb-col >
                    通过 onText, offText 属性设置开关的文字描述
                    <p>设置 onValue 和 offValue 属性，接受Boolean, String或Number类型的值</p>
                </vb-col>
            </vb-row>
            <template slot="code" >
                <code class="html">
&lt;vb-switch v-model="selected" onText="On" offText="Off"&gt;&lt;/vb-switch&gt;
&lt;vb-switch v-model="selected1" :disabled="true" onText="On" offText="Off" onValue="1" offValue="0"&gt;&lt;/vb-switch&gt;
                </code><code class="javascript">
&lt;script&gt;
import vb-switch from '../../components/form/switch/switch.vue'
export default {
    data() {
        return {
            selected2: false,
            selected3: '1'
        }
    },
    components: {
        vb-switch
    }
}
&lt;/script&gt;
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
                selected: false,
                selected1: false,
                selected2: false,
                selected3: '1',
                selected4: true,
                selected5: false
            }
        },
        components: {
            vCodePanel
        }
    }
</script>
