/**
 * Created by linfengluo@gmail.com on 2017/9/21.
 */
import Vue from 'vue'
import Notify from './src/notify.vue'

function initNotify(propsData) {
    const NotifyComponent = Vue.extend(Notify)
    return new NotifyComponent({
        el: document.createElement('div'),
        propsData
    })
}

const Notification = {}

const typeArray = [
    'open',
    'primary',
    'success',
    'warning',
    'info',
    'light',
    'danger'
]

typeArray.forEach(type => {
    Notification[type] = params => {
        type = type === 'open' ? 'dark' : type

        const defaultParam = {
            duration: 4500,
            type: type
        }
        const propsData = Object.assign(defaultParam, params)
        return initNotify(propsData)
    }
})

export default Notification
