<!--
    Created by linfengluo@gmail.com on 2017/9/2.
-->
<template>
    <nav class="vb-menu" :style="'width: ' + width + 'px'">
        <template v-for="(menu, index) in menuConfig">
            <template v-if="menu.childern.length === 0">
                <vNavMenuItem :title="menu.title" :link="menu.link" :icon="menu.icon"></vNavMenuItem>
            </template>
            <vNavSubmenu :title="menu.title"
                         :icon="menu.icon"
                         v-if="menu.childern.length > 0"
                         :currentOpened="currentOpened"
                         :index="index">
                <template v-for="child in menu.childern">
                    <vNavMenuGroup :title="child.title"
                                   :currentOpened="currentOpened"
                                   :index="index">
                        <template v-for="item in child.menu">
                            <vNavMenuItem :title="item.title" :link="item.link" :icon="item.icon" :index="index"></vNavMenuItem>
                        </template>
                    </vNavMenuGroup>
                </template>
            </vNavSubmenu>
        </template>


    </nav>
</template>

<script>
    import vNavSubmenu from './navMenu-sub.vue'
    import vNavMenuGroup from './navMenu-group.vue'
    import vNavMenuItem from './navMenu-item.vue'
    import MenuMixins from './mixins'

    export default {
        name: 'vb-navmenu',
        componentName: 'vb-navmenu',
        props: {
            width: {
                type: [String, Number],
                default: '250'
            },
            title: {
                type: Boolean,
                default: true
            },
            menuConfig: {
                type: Array,
                default(){
                    return []
                }
            },
            openIndex: {
                type: [String, Number],
                default: -1
            },
            unique: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return {
                currentOpened: []
            }
        },
        components: {
            vNavSubmenu,
            vNavMenuItem,
            vNavMenuGroup
        },
        mixins: [MenuMixins],
        mounted(){
            this.initOpenMenu()
        },
        methods: {
            /*
            * change submenu
            * params {Number, String} [index]
            * params {Boolean} [state] 打开/关闭
            *
            * */
            changeOpenIndex(index, state){
                let targetIndex = this.currentOpened.indexOf(index)

                if (this.unique){
                    this.currentOpened = targetIndex > -1 && !state ? [] : [index]
                } else if (state){
                    targetIndex < 0 && this.currentOpened.push(index)
                } else {
                    this.currentOpened.splice(targetIndex, 1)
                }
            },

            initOpenMenu(){
                this.openIndex !== -1 && this.changeOpenIndex(this.openIndex, true)
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "./menu";
</style>
