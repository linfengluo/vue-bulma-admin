<!--
    Created by linfengluo@gmail.com on 2017/9/2.
-->
<template>
    <header class="vb-header">
        <div class="vb__flex">
            <div class="vb__flex--item ">
                <div class="vb__flex vb__flex--start">
                    <a :href="link" class="vb-header--link vb-header--nav">
                        <span v-if="logoType === 'Text'" class="vb-header__logo--text" v-text="logo"></span>
                        <img v-else class="vb-header__logo--img" :src="Logo" title="logo">
                    </a>
                    <slot name="headerLeft"></slot>
                </div>

            </div>
            <div class="vb__flex--item">
                <div class="vb__flex vb__flex--end">
                    <slot name="headerRight"></slot>

                    <div v-if="user !== ''"
                         class="vb-header--nav"
                         @click="handlerUser">
                        <vIcon name="user-o" size="small"></vIcon>
                        <span v-text="user"></span>
                    </div>
                    <div v-if="logout" class="vb-header--nav" @click="handlerLogout">
                        <vIcon name="power-off" size="small"></vIcon>注销
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import vIcon from '../../icon/icon.vue'
    export default {
        props: {
            logoType: {
                type: String,
                default: 'Text'
            },
            logo: {
                type: String,
                default: 'vBulma'
            },
            link: {
                type: String,
                default: '/'
            },
            logout: {
                type: Boolean,
                default: true
            },
            handlerLogout: {
                type: Function,
                default(){
                    console.log('logout')
                }
            },
            user: {
                type: String,
                default: ''
            },
            handlerUser: {
                type: Function,
                default(){
                    console.log('click user')
                }
            }
        },
        components: {
            vIcon
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../../sass/variables/_variables";

    .vb-header{
        padding: 0 $space*4;
        background-color: $header-backgrund;
        height: $header-height;
        line-height: $header-height;
        color: #ffffff;

        &--link{
            color: #ffffff;
            display: inline-flex;
        }

        &--nav{
            padding: 0 $space;
            cursor: pointer;

            &:hover{
                background-color: $header-backgrund-hover;
            }
        }

        &__logo{

            &--text{
                font-size: 32px;
                font-weight: bolder;
            }

            &--img{
                margin: 5px 0;
                height: 40px;
            }
        }
    }
</style>
