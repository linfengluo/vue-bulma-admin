<!--
    Created by linfengluo@gmail.com on 2017/9/22.
-->
<template>
    <article class="message"
             :class="[colorClass, sizeClass, customClass]"
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
        <div class="message-body"
             :class="{
                    'is-noneTitle': !title
                 }"
             @click="handlerClick">
            <div class="message-body-icon" v-if="!title">
                <vIcon :name="iconClass" :size="size" :color="type"></vIcon>
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
</template>

<script>
    import vIcon from '../../icon'
    export default {
        name: 'vb-alert',
        componentName: 'vb-alert',
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
                timer: null,
                iconName: {
                    primary: 'info-circle',
                    light: 'info-circle',
                    info: 'info-circle',
                    success: 'check-circle',
                    danger: 'times-circle',
                    warning: 'warning'
                }
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
                this.close()
            },

            close(){
                this.$destroy()
                this.$el.remove()
                this.onClose && this.onClose()
            },

            handlerClick(){
                this.onClick && this.onClick()
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
