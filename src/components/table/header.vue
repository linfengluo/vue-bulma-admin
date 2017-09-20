<!--
    Created by linfengluo@gmail.com on 2017/9/18.
-->
<template>
    <thead>
        <th class="checkbox__wrapper">
            <div class="temp">
                <vCheckbox v-if="checkable" v-model="isChecked" @change="handleToggleSelectAll"></vCheckbox>
            </div>
        </th>
        <th v-for="(column, index) in columns" :key="index">
            <span>{{column.label}}</span>
        </th>
    </thead>
</template>

<script>
    import vCheckbox from '../form/checkBox/checkbox.vue'
    export default {
        name: 'tableHeader',
        componentName: 'tableHeader',
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
            },
            checkable: {
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
            }
        },
        methods: {
            handleToggleSelectAll(val){
                this.$emit('changeSelectedAll', val)
            }
        }
    }
</script>

