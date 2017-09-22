<!--
    Created by linfengluo@gmail.com on 2017/9/21.
-->
<template>
    <transition name="message">
        <article class="message message-content"
                 :class="[colorClass, sizeClass, customClass]"
                 v-show="isShow"
        >
            <div class="message-header" v-if="title">
                <p class="message-title">
                    <vIcon :name="iconClass" :size="size"></vIcon>
                    <span v-text="title" class="message-title-text"></span>
                </p>
                <button class="delete"
                        :class="[sizeClass]"
                        aria-label="delete"
                        @click="close"
                        v-if="closeable">
                </button>
            </div>
            <div class="message-body noneBorder"
                 :class="{
                    'is-noneTitle': !title
                 }"
                 @click="handlerClick">
                <div class="message-body-icon" v-if="!title">
                    <vIcon :name="iconClass" :size="size" :color="type === 'light' ? 'info' : type"></vIcon>
                </div>
                <div class="message-body-content" v-text="message"></div>
                <div class="message-body-btn">
                    <button class="delete"
                            :class="[sizeClass]"
                            aria-label="delete"
                            @click="close"
                            v-if="!title && closeable">
                    </button>
                </div>
            </div>
        </article>

    </transition>
</template>

<script>
    import vIcon from '../../elements/icon'
    export default {
        props: {
            type: String,
            size: String,
            customClass: String,
            duration: {
                type: [Number, String],
                default: 5000
            },
            closeable: {
                type: Boolean,
                default: true
            },
            onClose: Function,
            onClick: Function,
            title: String,
            message: {
                type: String,
                default: 'Notify'
            }
        },
        data() {
            return {
                isShow: false,
                timer: null,
                iconName: {
                    primary: 'info-circle',
                    light: 'info-circle',
                    dark: 'info-circle',
                    info: 'info-circle',
                    success: 'check-circle',
                    danger: 'times-circle',
                    warning: 'warning'
                }
            }
        },
        beforeMount() {
            let $messageWarp = document.querySelector('.message-wrap')
            if (!$messageWarp){
                $messageWarp = document.createElement('div')
                $messageWarp.classList.add('message-wrap')
                document.body.appendChild($messageWarp)
            }
            $messageWarp.appendChild(this.$el)
        },
        mounted(){
            this.isShow = true
            if (this.duration !== 0) {
                this.timer = setTimeout(() => this.close(), this.duration)
            }
        },
        components: {
            vIcon
        },
        computed: {
            colorClass(){
                return this.type ? `is-${this.type}` : null
            },

            sizeClass(){
                return this.size ? `is-${this.size}` : null
            },

            iconClass(){
                return this.type ? this.iconName[this.type] : 'info-circle'
            }
        },
        methods: {
            handlerClose(){
                clearTimeout(this.timer)
                this.close()
            },

            close(){
                this.isShow = false
                setTimeout(() => {
                    this.$destroy()
                    this.$el.remove()
                }, 300)
                this.onClose && this.onClose()
            },

            handlerClick(){
                this.onClick && this.onClick()
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

    .message{
        position: fixed;
        left: 50%;
        top: 30px;
        transform: translateX(-50%);
        transition: all .3s;
        opacity:1;
        box-shadow: 0 0 5px rgba(0,0,0,.3);
        min-width: 250px;
        box-sizing: border-box;
        overflow: hidden;
        z-index: 1050;
    }

    .message.message-enter{
        opacity:0;
        transform: translate3d(-50%, -50px, 0);
    }

    .message.message-leave-active {
        opacity:0;
        transform: translate3d(-50%, -50px, 0);
    }
</style>
