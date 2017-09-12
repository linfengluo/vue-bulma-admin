import Vue from 'vue'
import Router from 'vue-router'
import Container from '../pages/index.vue'

const Input = resolve => require(['../demo/form/input.vue'], resolve)

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Container,
            children: [
                {
                    path: '/form/input',
                    name: 'Input',
                    component: Input
                }
            ]
        },
        {
            path: '/book',
            name: 'Index',
            component: Container
        }
    ]
})
