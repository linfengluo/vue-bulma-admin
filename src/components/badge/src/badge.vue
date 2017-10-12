<!--
    Created by linfengluo@gmail.com on 2017/10/12.
-->
<template>
    <div class="vb-badge">
        <slot></slot>
        <span
            v-show="!hidden && ( currentValue || isDot )"
            v-text="currentValue"
            class="vb-badge__content"
            :class="[backgroundClass, {
            'vb-badge--fixed':
             $slots.default,
             'vb-badge--dot': isDot
             }]">
        </span>
    </div>
</template>

<script>
    export default {
        name: 'vb-badge',
        componentName: 'vb-badge',
        props: {
            value: {
                type: [String, Number],
                default: 0
            },
            max: [String, Number],
            hidden: {
                type: Boolean,
                default: false
            },
            state: String,
            isDot: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            currentValue(){
                if (this.isDot) {
                    return ''
                } else if (this.max){
                    return Number(this.value) > Number(this.max) ? `${this.max}+` : this.value
                } else {
                    return this.value
                }
            },

            backgroundClass(){
                return this.state ? `is-${this.state}` : ''
            }
        },
        methods: {}
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../../sass/variables/variables";
    $badgeHeight: 20px;
.vb-badge{
    position: relative;
    vertical-align: middle;
    display: inline-block;

    &__content{
        padding: 2px 7px;
        font-size: 12px;
        line-height: $badgeHeight - 4;
        height: $badgeHeight;
        border-radius: 12px;
        background-color: $danger;
        color: #ffffff;

        &.is-primary{
            background-color: $primary;
        }

        &.is-danger{
            background-color: $danger;
        }

        &.is-success{
            background-color: $success;
        }

        &.is-info{
            background-color: $info;
        }

        &.is-warning{
            background-color: $warning;
        }

        &.vb-badge--dot{
            padding: 0;
            height: 8px;
            width: 8px;
            overflow: hidden;
            right: 5px;
        }
    }

    &--fixed{
        position: absolute;
        top: 0;
        right: 10px;
        transform: translateY(-50%) translateX(100%);
    }
}
</style>
