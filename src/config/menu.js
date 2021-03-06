/**
 * Created by linfengluo@gmail.com on 2017/9/7.
 */

const menu = [
    {
        title: '首页',
        icon: 'home',
        link: '/',
        childern: []
    },
    {
        title: 'Elements 元素',
        icon: 'cube',
        link: '',
        childern: [{
            menu: [
                {
                    title: 'Button',
                    link: '/elements/button'
                }
            ]
        }]
    },
    {
        title: 'Form 表单',
        icon: 'check-square-o',
        link: '',
        childern: [{
            menu: [
                {
                    title: 'Input',
                    link: '/form/input'
                }, {
                    title: 'TextArea',
                    link: '/form/textarea'
                },
                {
                    title: 'Checkbox',
                    link: '/form/checkbox'
                },
                {
                    title: 'Selecter',
                    link: '/form/selecter'
                },
                {
                    title: 'Radio',
                    link: '/form/radio'
                },
                {
                    title: 'Switch',
                    link: '/form/switch'
                },
                {
                    title: 'Datepicker',
                    link: '/form/datepicker'
                },
                {
                    title: 'Editor',
                    link: '/form/editor'
                },
                {
                    title: 'Form',
                    link: '/form/form'
                }
            ]
        }]
    },
    {
        title: 'Data 数据',
        icon: 'database',
        link: '',
        childern: [{
            menu: [
                {
                    title: 'Table',
                    link: '/data/table'
                }, {
                    title: 'Badge',
                    link: '/data/badge'
                }, {
                    title: 'Panigation',
                    link: '/data/panigation'
                }
            ]
        }]
    },
    {
        title: 'notice 提醒',
        icon: 'bell-o',
        link: '',
        childern: [{
            menu: [
                {
                    title: 'Alert',
                    link: '/notice/alert'
                },
                {
                    title: 'Notify',
                    link: '/notice/notify'
                },
                {
                    title: 'Message',
                    link: '/notice/message'
                }
            ]
        }]
    }
]

export default menu
