<!--
    Created by linfengluo@gmail.com on 2017/9/6.
-->
<template>
    <li class="vb-menu__item"
        @click.stop="turnToLink(link)"
    >
        <div class="vb-menu__item--text"
             :class="{
                'is-active': isActive
            }"
        >
            <vIcon v-if="icon !== ''"
                   :name="icon"
                   size="small">
            </vIcon>
            <span v-text="title"></span>
        </div>

    </li>
</template>

<script>
    import vMenuMixins from './menu'
    import vIcon from '../../element/icon/main.vue'

    export default {
        name: 'vNavMenuItem',
        componentName: 'vNavMenuItem',
        props: {
            link: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: ''
            },
            index: {
                type: [String, Number],
                default: 0
            }
        },
        components: {
            vIcon
        },
        mixins: [vMenuMixins],
        watch: {
            isActive(val){
                val && this.rootMenu.changeOpenIndex(this.index, true)
            }
        },
        computed: {
            isActive(){
                return this.currentRoutePath === this.link
            }
        }
    }
</script>


