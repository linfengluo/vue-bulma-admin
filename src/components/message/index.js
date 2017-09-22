/**
 * Created by linfengluo@gmail.com on 2017/9/21.
 */

import Vue from 'vue'
import Message from './message.vue'

function initMessage(propsData) {
    const MessageComponent = Vue.extend(Message)
    return new MessageComponent({
        el: document.createElement('div'),
        propsData
    })
}

const MessageManger = {}

const typeArray = [
    'open',
    'primary',
    'success',
    'warning',
    'light',
    'info',
    'danger'
]

typeArray.forEach(type => {
    MessageManger[type] = params => {
        type = type === 'open' ? '' : type

        const defaultParam = {
            duration: 4500,
            type: type
        }
        const propsData = Object.assign(defaultParam, params)
        return initMessage(propsData)
    }
})

export default MessageManger
