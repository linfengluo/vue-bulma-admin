/**
 * Created by linfengluo@gmail.com on 2017/10/13.
 */

const paginationMixins = {
    computed: {
        parent(){
            let parent = this.$parent
            while (parent) {
                if (parent.$options.componentName !== 'vb-pagination') {
                    parent = parent.$parent
                } else {
                    return parent
                }
            }
        },

        currentPage: {
            get(){
                return this.parent ? this.parent.currentPage : 1
            },

            set(val){
                if (val <= this.pageNum && val > 0) {
                    this.$emit('change', val)
                }
            }
        },

        pageNum(){
            return this.parent ? this.parent.pageNum : 1
        }
    }
}

export default paginationMixins
