<!--
    Created by linfengluo@gmail.com on 2017/9/2.
-->
<template>
    <div class="vb--fullwidth">
        <vheader>
            <div slot="headerRight" class="vb-header--nav">
                <vIcon size="small" name="bell-o"></vIcon>消息
            </div>
        </vheader>
        <div class="vb-container">
            <vNavMenu :menuConfig="menuList" :openIndex="menuIndex"></vNavMenu>
            <vContent>
                <router-view></router-view>
            </vContent>
        </div>
    </div>
</template>

<script>
    import vheader from '../components/layout/header/header.vue'
    import vNavMenu from '../components/layout/navMenu/navMenu.vue'
    import vContent from '../components/layout/content/content.vue'
    import vIcon from '../components/element/icon/main.vue'

    export default {
        data() {
            return {
                asideWidth: 250,
                menuList: [
                    {
                        title: '首页',
                        icon: 'home',
                        link: '/',
                        childern: []
                    },
                    {
                        title: 'Layout 布局',
                        icon: 'table',
                        link: '',
                        childern: [{
                            menu: [
                                {
                                    title: 'header',
                                    link: ''
                                },
                                {
                                    title: 'asideMenu',
                                    link: ''
                                },
                                {
                                    title: 'content',
                                    link: ''
                                }
                            ]
                        }]
                    },
                    {
                        title: 'Form 表单',
                        icon: 'check-square-o',
                        link: '',
                        childern: [{
                            menu: [
                                {
                                    title: 'Input',
                                    link: ''
                                },
                                {
                                    title: 'Checkbox',
                                    link: ''
                                }
                            ]
                        }]
                    }
                ],
                menuIndex: 1
            }
        },

        components: {
            vheader,
            vNavMenu,
            vContent,
            vIcon
        },

        mixins: [],

        created(){},

        mounted(){},

        watch: {},

        methods: {}
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../sass/variables/variables";
    .vb-container{
        position: absolute;
        top: $header-height;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
        overflow: hidden;
    }
</style>
