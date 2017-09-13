import Vue from 'vue'
import Router from 'vue-router'
import Container from '../pages/index.vue'

const Input = resolve => require(['../demo/form/input.vue'], resolve)
const CheckBox = resolve => require(['../demo/form/checkbox.vue'], resolve)
const Selecter = resolve => require(['../demo/form/selecter.vue'], resolve)
const Raido = resolve => require(['../demo/form/radio.vue'], resolve)

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
                }, {
                    path: '/form/checkbox',
                    name: 'CheckBox',
                    component: CheckBox
                }, {
                    path: '/form/selecter',
                    name: 'Selecter',
                    component: Selecter
                }, {
                    path: '/form/radio',
                    name: 'Raido',
                    component: Raido
                }
            ]
        }
    ]
})
