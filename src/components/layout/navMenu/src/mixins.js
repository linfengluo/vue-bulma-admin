/**
 * Created by linfengluo@gmail.com on 2017/9/6.
 */

const menuMixins = {
    data(){
        return {
            currentRoutePath: '/'
        }
    },

    created(){
        this.currentRoutePath = this.$route.path
    },

    computed: {
        rootMenu(){
            if (this.$options.componentName !== 'vb-navmenu') {
                var parent = this.$parent
                while (parent && parent.$options.componentName !== 'vb-navmenu') {
                    parent = parent.$parent
                }
                return parent
            } else {
                return this
            }
        }
    },

    watch: {
        $route(route){
            this.currentRoutePath = route.path
        }
    },

    methods: {
        turnToLink(link) {
            this.$router.push(link)
        }
    }
}

export default menuMixins
