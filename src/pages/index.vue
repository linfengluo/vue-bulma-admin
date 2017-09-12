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
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import vheader from '../components/layout/header/header.vue'
    import vNavMenu from '../components/layout/navMenu/navMenu.vue'
    import vIcon from '../elements/icon.vue'

    import menuConfig from '../config/menu'

    export default {
        data() {
            return {
                asideWidth: 250,
                menuList: menuConfig,
                menuIndex: 1
            }
        },

        components: {
            vheader,
            vNavMenu,
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
