<!--
    Created by linfengluo@gmail.com on 2017/9/21.
-->
<template>
    <transition name="notify">
        <article class="message notify"
                 :class="[colorClass, sizeClass, customClass]"
                 v-show="isShow"
        >
            <div class="message-header" v-if="title">
                <p v-text="title"></p>
                <button class="delete"
                        :class="[sizeClass]"
                        aria-label="delete"
                        @click="close"
                        v-if="closeable"></button>
            </div>
            <div class="message-body" @click="handlerClick" v-text="message">
            </div>
        </article>
    </transition>
</template>

<script>
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
                timer: null
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
        transform: translate3d(0, 0, 0);
    }

    .notify.notify-leave-active {
        opacity:0;
    }
</style>
