<!--
    Created by linfengluo@gmail.com on 2017/9/21.
-->
<template>
    <transition name="notify">
        <article class="message notify"
                 :class="[colorClass, sizeClass, customClass]"
                 v-show="isShow"
        >
            <div class="message-body is-noneTitle"
                 @click="handlerClick">
                <div class="message-body-icon">
                    <vIcon :name="iconClass" :size="size" :color="type === 'light' ? 'info' : type"></vIcon>
                </div>
                <div class="message-body-content">
                    <p class="message-body-title" v-text="title"></p>
                    <p v-text="message"></p>
                </div>
                <div class="message-body-btn">
                    <button class="delete"
                            :class="[sizeClass]"
                            aria-label="delete"
                            @click="close"
                            v-if="closeable">
                    </button>
                </div>
            </div>
        </article>
    </transition>
</template>

<script>
    import vIcon from '../../icon'
    import vTitle from '../../title'
    export default {
        name: 'vb-notify',
        componentName: 'vb-notify',
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
        components: {
            vIcon,
            vTitle
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
            let $notifyWarp = document.querySelector('.notifications')
            if (!$notifyWarp){
                $notifyWarp = document.createElement('div')
                $notifyWarp.classList.add('notifications')
                document.body.appendChild($notifyWarp)
            }
            $notifyWarp.appendChild(this.$el)
        },
        mounted(){
            this.isShow = true
            if (this.duration !== 0) {
                this.timer = setTimeout(() => this.close(), this.duration)
            }
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
                }, 100)
                this.onClose && this.onClose()
            },

            handlerClick(){
                this.onClick && this.onClick()
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .notify{
        transition: all .5s;
    }

    .notify.notify-enter{
        opacity:0;
        transform: translate3d(400px, 0, 0);
    }

    .notify.notify-leave-active {
        opacity:0;
        transform: translate3d(400px, 0, 0);
    }
</style>
