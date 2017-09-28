<!--
    Created by linfengluo@gmail.com on 2017/9/22.
-->
<template>
    <div class="vb-form__item">
        <template v-if="inline">
            <div class="field is-horizontal"
                 :class="{
                    'vb-form__field--block': this.labelAlign === 'top'
                 }"
            >
                <div class="field-label"
                     :class="{
                        'is-normal': needWrap || needMarginTop
                     }"
                     v-if="label"
                     :style="'width: '+ labelWidth + 'px'"
                >
                    <label class="label"
                           :class="[lableClass]"
                           ref="label"
                    >{{label}}
                    </label>
                </div>
                <div class="field-body vb-form__inline" v-if="needWrap">
                    <slot></slot>
                    <p class="help is-danger"></p>
                </div>
                <div class="field-body vb-form__inline" v-else>
                    <div class="field">
                        <div class="control">
                            <slot></slot>
                        </div>
                    </div>
                    <p class="help is-danger"></p>
                </div>
            </div>
        </template>
        <template v-else>
            <label class="label"
                   :class="[lableClass]"
                   ref="label">{{label}}
            </label>
            <div v-if="needWrap" class="vb-form__block">
                <slot></slot>
                <p class="help is-danger"></p>
            </div>
            <div v-else class="vb-form__block">
                <div class="control">
                    <slot></slot>
                </div>
                <p class="help is-danger"></p>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            label: String,
            inline: {
                type: Boolean,
                default: true
            },
            prop: String
        },
        data() {
            return {
                needWrap: false,
                needMarginTop: false
            }
        },
        components: {},
        mixins: [],
        created(){
            let slotComponent = this.$slots.default[0].componentOptions.Ctor.extendOptions.componentName
            this.needWrap = slotComponent === 'input' || slotComponent === 'datepicker' || slotComponent === 'textarea' || slotComponent === 'button'
            this.needMarginTop = slotComponent === 'select'
        },
        mounted(){
            if (this.label) {
                let labelWith = this.$refs.label.offsetWidth
                this.parentForm && this.parentForm.pushLabelWidth(labelWith)
            }
        },
        watch: {},
        computed: {
            labelWidth(){
                return this.parentForm && this.parentForm.localLabelWidth
            },

            mode(){
                return this.parentForm && this.parentForm.mode
            },

            rules(){
                return this.parentForm && this.parentForm.rules
            },

            labelAlign(){
                return this.parentForm && this.parentForm.labelAlign
            },

            lableClass(){
                return this.labelAlign ? (this.labelAlign !== 'top' ? `has-text-${this.labelAlign}` : null) : null
            },

            parentForm(){
                let parent = this.$parent
                while (parent) {
                    if (parent.$options.componentName !== 'form') {
                        parent = parent.$parent
                    } else {
                        return parent
                    }
                }
            }
        },
        methods: {
            validation(){
                if (this.rules && this.prop && this.rules[this.prop]) {
                    console.log(123)
                }
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../../sass/variables/variables";
.is-narrow{
    margin-top: 5px;
}
.vb-form{
    &__item{
        margin-right: $space;
    }

    &--inline {
        .vb-form__item {
            display: inline-block;
        }
    }

    &__field--block{
        display: inherit;

        .field-label{
            margin-bottom: 0.5rem;
            text-align: left;
        }
    }
}




</style>
