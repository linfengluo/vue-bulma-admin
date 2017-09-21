<!--
    Created by linfengluo@gmail.com on 2017/9/14.
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
                <vTitle level="4" :isMargin="true">基本使用</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vRow>
                        <vCol>
                            <vSwitch v-model="selected" width="100"></vSwitch>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vSwitch v-model="selected1" :disabled="true"></vSwitch>
                        </vCol>
                    </vRow>
                </vCol>
                <vCol >
                    通过 disabled 属性指定是否禁用 switch 组件
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vSwitch v-model="selected"&gt;&lt;/vSwitch&gt;
&lt;vSwitch v-model="selected1" :disabled="true"&gt;&lt;/vSwitch&gt;
                </code><code class="javascript">
&lt;script&gt;
import vSwitch from '../../components/form/switch/switch.vue'
export default {
    data() {
        return {
            selected: false,
        }
    },
    components: {
        vSwitch
    }
}

&lt;/script&gt;
            </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">Color 颜色</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vRow>
                        <vCol>
                            <vSwitch v-model="selected5" offColor="red" onColor="#3273DC"></vSwitch>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vSwitch v-model="selected4" onColor="#FFDD57"></vSwitch>
                        </vCol>
                    </vRow>
                </vCol>
                <vCol >
                    <p>通过 onColor 和 offColor 属性设置开关颜色</p>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vSwitch v-model="selected5" offColor="red" onColor="#3273DC"&gt;&lt;/vSwitch&gt;
&lt;vSwitch v-model="selected4" onColor="#FFDD57"&gt;&lt;/vSwitch&gt;
                </code>
            </template>
        </vCodePanel>

        <vRow>
            <vCol>
                <vTitle level="4" :isMargin="true">扩展</vTitle>
            </vCol>
        </vRow>
        <vCodePanel>
            <vRow>
                <vCol size="7">
                    <vRow>
                        <vCol>
                            <vSwitch v-model="selected2" onText="On" offText="Off"></vSwitch>
                        </vCol>
                    </vRow>
                    <vRow>
                        <vCol>
                            <vSwitch v-model="selected3" onText="On" offText="Off" onValue="1" offValue="0"></vSwitch>
                        </vCol>
                    </vRow>
                </vCol>
                <vCol >
                    通过 onText, offText 属性设置开关的文字描述
                    <p>设置 onValue 和 offValue 属性，接受Boolean, String或Number类型的值</p>
                </vCol>
            </vRow>
            <template slot="code" >
                <code class="html">
&lt;vSwitch v-model="selected" onText="On" offText="Off"&gt;&lt;/vSwitch&gt;
&lt;vSwitch v-model="selected1" :disabled="true" onText="On" offText="Off" onValue="1" offValue="0"&gt;&lt;/vSwitch&gt;
                </code><code class="javascript">
&lt;script&gt;
import vSwitch from '../../components/form/switch/switch.vue'
export default {
    data() {
        return {
            selected2: false,
            selected3: '1'
        }
    },
    components: {
        vSwitch
    }
}
&lt;/script&gt;
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
    import vSwitch from '../../components/form/switch/switch.vue'
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
            vContent,
            vTitle,
            vContentHeader,
            vBreadcrumb,
            vBreadcrumbItem,
            vCodePanel,
            vRow,
            vCol,
            vSwitch
        }
    }
</script>
