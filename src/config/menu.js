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
        title: 'Layout 布局',
        icon: 'table',
        link: '',
        childern: [{
            menu: [
                {
                    title: 'header',
                    link: ''
                },
                {
                    title: 'asideMenu',
                    link: ''
                },
                {
                    title: 'content',
                    link: ''
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
                },
                {
                    title: 'Checkbox',
                    link: ''
                }
            ]
        }]
    }
]

export default menu
