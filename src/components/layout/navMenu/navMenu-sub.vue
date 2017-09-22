<!--
    Created by linfengluo@gmail.com on 2017/9/6.
-->
<template>
    <li class="vb-submenu"
        :class="{
            'is-open': isOpen
        }"
    >
        <div class="vb-menu__item" @click.stop="toggleOpen">
            <div class="vb-menu__item--text">
                <vIcon v-if="icon !== ''"
                       :name="icon"
                       size="small">
                </vIcon>
                <span v-text="title"></span>
            </div>
            <div class="vb-menu__item--icon">
                <vIcon :name="transitionIcon" size="small"></vIcon>
            </div>
        </div>
        <slot></slot>

    </li>
</template>

<script>
    import vIcon from '../../../elements/icon/icon.vue'
    import MenuMixins from './menu'

    export default {
        name: 'vNavSubmenu',
        componentName: 'vNavSubmenu',
        props: {
            title: {
                type: String,
                default: '菜单'
            },
            icon: {
                type: String,
                default: ''
            },
            index: {
                type: [String, Number],
                default: 0
            },
            currentOpened: {
                type: [Array],
                default: 0
            }
        },
        data() {
            return {
                open: false
            }
        },
        mixins: [MenuMixins],
        components: {
            vIcon
        },
        computed: {
            transitionIcon(){
                return this.isOpen ? 'angle-up' : 'angle-down'
            },

            isOpen(){
                return this.currentOpened.indexOf(this.index) > -1
            }
        },
        methods: {
            toggleOpen(){
                this.$parent.changeOpenIndex(this.index, !this.isOpen)
            }
        }
    }
</script>
