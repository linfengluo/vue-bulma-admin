import Vue from 'vue'
import Router from 'vue-router'
import Container from '../pages/index.vue'

const Input = resolve => require(['../demo/form/input.vue'], resolve)
const TextArea = resolve => require(['../demo/form/textarea.vue'], resolve)
const CheckBox = resolve => require(['../demo/form/checkbox.vue'], resolve)
const Selecter = resolve => require(['../demo/form/selecter.vue'], resolve)
const Raido = resolve => require(['../demo/form/radio.vue'], resolve)
const Switch = resolve => require(['../demo/form/switch.vue'], resolve)
const Datepicker = resolve => require(['../demo/form/datepicker.vue'], resolve)
const Editor = resolve => require(['../demo/form/editor.vue'], resolve)
const Form = resolve => require(['../demo/form/form.vue'], resolve)

const Button = resolve => require(['../demo/elements/button.vue'], resolve)

const Table = resolve => require(['../demo/data/table.vue'], resolve)
const Badge = resolve => require(['../demo/data/badge.vue'], resolve)
const Panigation = resolve => require(['../demo/data/panigation.vue'], resolve)

const Notify = resolve => require(['../demo/notice/notify.vue'], resolve)
const Message = resolve => require(['../demo/notice/message.vue'], resolve)
const Alert = resolve => require(['../demo/notice/alert.vue'], resolve)

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
                    path: '/form/textarea',
                    name: 'TextArea',
                    component: TextArea
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
                }, {
                    path: '/form/switch',
                    name: 'Switch',
                    component: Switch
                }, {
                    path: '/form/datepicker',
                    name: 'Datepicker',
                    component: Datepicker
                }, {
                    path: '/form/editor',
                    name: 'Editor',
                    component: Editor
                }, {
                    path: '/form/form',
                    name: 'Form',
                    component: Form
                }, {
                    path: '/elements/button',
                    name: 'Button',
                    component: Button
                }, {
                    path: '/data/table',
                    name: 'Table',
                    component: Table
                }, {
                    path: '/data/badge',
                    name: 'Badge',
                    component: Badge
                }, {
                    path: '/data/panigation',
                    name: 'Panigation',
                    component: Panigation
                }, {
                    path: '/notice/notify',
                    name: 'Notify',
                    component: Notify
                }, {
                    path: '/notice/message',
                    name: 'Message',
                    component: Message
                }, {
                    path: '/notice/alert',
                    name: 'Alert',
                    component: Alert
                }
            ]
        }
    ]
})
