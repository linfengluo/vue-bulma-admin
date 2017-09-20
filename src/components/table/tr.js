/**
 * Created by linfengluo@gmail.com on 2017/9/18.
 */

import vCheckbox from '../form/checkBox/checkbox.vue'

export default {
    name: 'tableTr',
    componentName: 'tableTr',
    props: {
        columns: {
            type: Array,
            default(){
                return []
            }
        },
        item: {
            type: Object,
            default(){
                return {}
            }
        },
        index: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            targetTable: this.$parent.$parent,
            currentChecked: false
        }
    },
    components: {
        vCheckbox
    },
    computed: {
        showIndex(){
            return this.targetTable.showIndex
        },
        checkable(){
            return this.targetTable.checkable
        },
        targetKey(){
            return this.targetTable.rowKey ? this.item[this.targetTable.rowKey] : this.index
        },
        isChecked: {
            get(){
                return this.targetTable.selectedKeys.indexOf(this.targetKey) > -1
            },

            set(val){
                val ? this.targetTable.insertSelected(this.targetKey, this.item) : this.targetTable.removeUnSelected(this.targetKey)
            }
        }
    },
    methods: {
        handlerChange(val){
            this.isChecked = val
        }
    },

    render(h){
        let row = this.item
        let $index = this.index
        return (
            <tr onClick={() => this.targetTable.handlerClickEvent(this.targetKey, row)}>
                {
                    this.checkable ? <td> <div class="vb-table__checkbox"> <vCheckbox value={this.isChecked} onChange={value => this.handlerChange(value)}></vCheckbox> </div></td> : null
                }
                {
                    this.showIndex ? <td> #{this.index + 1} </td> : null
                }
                {
                    this._l(this.columns, (column) => {
                        return (
                            <td width={column.width}>
                                {
                                    column.renderCell.call(this._renderProxy, h, {
                                        row, column, $index, store: this.store, _self: this.context || this.$parent.$parent.$vnode.context})
                                }
                            </td>
                        )
                    })
                }
            </tr>
        )
    }
}
