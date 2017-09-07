import Vue from 'vue'
import Router from 'vue-router'
import Container from '../pages/index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Container
        },
        {
            path: '/book',
            name: 'Index',
            component: Container
        }
    ]
})
