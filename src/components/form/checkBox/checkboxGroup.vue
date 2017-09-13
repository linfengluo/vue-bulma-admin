<!--
    Created by linfengluo@gmail.com on 2017/9/12.
-->
<template>
    <div class="vb-checkbox__group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        componentName: 'checkboxGroup',
        props: {
            value: {
                type: Array,
                default(){
                    return []
                }
            },
            max: {
                type: Number,
                default: 0
            }
        },
        data() {
            let targetValue = JSON.parse(JSON.stringify(this.value))
            return {
                currentArray: targetValue
            }
        },
        watch: {
            value: {
                handler(val){
                    if (JSON.stringify(val) !== JSON.stringify(this.currentArray)) {
                        this.currentArray = val
                    }
                },
                deep: true
            }
        },
        methods: {
            insertSelected(val){
                let index = this.currentArray.indexOf(val)
                if (index <= -1 && (this.max === 0 || this.currentArray.length < this.max)) {
                    this.currentArray.push(val)
                    this.emitChange()
                }
            },

            removeUnSelected(val){
                let index = this.currentArray.indexOf(val)
                if (index > -1) {
                    this.currentArray.splice(index, 1)
                    this.emitChange()
                }
            },

            emitChange(){
                this.$emit('change', this.currentArray)
                this.$emit('input', this.currentArray)
            }
        }
    }
</script>
