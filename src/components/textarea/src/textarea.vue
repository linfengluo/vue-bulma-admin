<!--
    Created by linfengluo@gmail.com on 2017/9/25.
-->
<template>
    <div class="field">
        <div class="control">
            <textarea class="textarea"
                      :class="[className, colorClass, sizeClass]"
                      type="text"
                      :rows="rows"
                      :readOnly="readOnly"
                      :disabled="disabled"
                      @blur="handlerBlur"
                      @focus="handlerFocus"
                      @click="handlerClick"
                      @input="handlerInput"
                      :placeholder="placeholder">
            </textarea>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'textarea',
        componentName: 'textarea',
        props: {
            value: String,
            color: String,
            size: String,
            disabled: {
                type: Boolean,
                default: false
            },
            readOnly: {
                type: Boolean,
                default: false
            },
            rows: {
                type: [String, Number],
                default: 2
            },
            placeholder: {
                type: String,
                default: ''
            },
            className: String
        },
        data() {
            return {
                currentValue: ''
            }
        },
        components: {},
        mixins: [],
        created(){
        },
        mounted(){
        },
        watch: {
            value(val){
                if (val !== this.currentValue) {
                    this.currentValue = val
                }
            }
        },
        computed: {
            colorClass(){
                return this.color ? `is-${this.color}` : null
            },

            sizeClass(){
                return this.size ? `is-${this.size}` : null
            }
        },
        methods: {
            handlerBlur(e){
                this.$emit('blur', e)
            },

            handlerFocus(e){
                this.$emit('focus', e)
            },

            handlerClick(e){
                this.$emit('click', e)
            },

            handlerInput(event){
                const value = event.target.value
                this.currentValue = value
                this.$emit('input', value)
                this.$emit('change', value)
            }
        }
    }
</script>
