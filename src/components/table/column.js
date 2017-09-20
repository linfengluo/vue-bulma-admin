/**
 * Created by linfengluo@gmail.com on 2017/9/18.
 */

export default {
    name: 'tableColumn',
    componentName: 'tableColumn',
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: String,
        width: [String, Number],
        className: String,
        visible: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            column: {}
        }
    },
    created(){
        this.column = {
            label: this.label,
            width: this.width,
            prop: this.prop,
            className: this.className
        }
    },
    mounted(){
        this.scopedSlots = this.$scopedSlots
        this.column.renderCell = (h, {row, column}) => {
            if (this.scopedSlots.default) {
                return h('div',
                    { class: 'child' },
                    [this.scopedSlots.default(row)]
                )
            }
            return row[column.prop]
        }
        this.$parent.columns.push(this.column)
    },
    render(h) {
        return null
    }
}
