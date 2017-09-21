/**
 * Created by linfengluo@gmail.com on 2017/9/21.
 */
import Vue from 'vue'
import Notify from './notify.vue'

function open(propsData) {
    const NotifyComponent = Vue.extend(Notify)
    return new NotifyComponent({
        el: document.createElement('div'),
        propsData
    })
}

const Notification = {}

const typeArray = [
    'open',
    'success',
    'warning',
    'info',
    'danger'
]

typeArray.forEach(type => {
    Notification[type] = params => {
        type = type === 'open' ? 'primary' : type

        const defaultParam = {
            duration: 4500,
            type: type
        }
        const propsData = Object.assign(defaultParam, params)
        return open(propsData)
    }
})

export default Notification
