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
        <vNavMenu :menuConfig="menuList" :openIndex="menuIndex"></vNavMenu>
        <div class="vb-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import vheader from '../components/layout/header/header.vue'
    import vNavMenu from '../components/layout/navMenu/navMenu.vue'
    import vIcon from '../components/icon/src/icon.vue'

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
        margin: $header-height 0 0 250px;
        overflow: hidden;
    }
</style>
