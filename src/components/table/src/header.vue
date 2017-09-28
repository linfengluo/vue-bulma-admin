<!--
    Created by linfengluo@gmail.com on 2017/9/18.
-->
<template>
    <thead>
        <th class="checkbox__wrapper" v-if="checkable">
            <div class="temp">
                <vCheckbox v-if="checkable" v-model="isChecked" @change="handleToggleSelectAll"></vCheckbox>
            </div>
        </th>
        <th v-if="showIndex" width="50">
            <div></div>
        </th>
        <th v-for="(column, index) in columns" :key="index">
            <span>{{column.label}}</span>
        </th>
    </thead>
</template>

<script>
    import vCheckbox from '../../checkBox/src/checkbox.vue'
    export default {
        name: 'vb-tableHeader',
        componentName: 'vb-tableHeader',
        props: {
            columns: {
                type: Array,
                default(){
                    return []
                }
            },
            value: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isChecked: false
            }
        },
        components: {
            vCheckbox
        },
        watch: {
            isSelectedAll(val){
                if (val !== this.isChecked){
                    this.isChecked = val
                }
            }
        },
        computed: {
            isSelectedAll(){
                return this.$parent.isSelectAll
            },

            showIndex(){
                return this.$parent.showIndex
            },

            checkable(){
                return this.$parent.checkable
            }
        },
        methods: {
            handleToggleSelectAll(val){
                this.$emit('changeSelectedAll', val)
            }
        }
    }
</script>

