// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import 'bulma'

import globalMixins from './mixins/global'
import VueHighlightJS from 'vue-highlightjs'
import 'highlightjs/styles/github-gist.css'

import Notification from './components/notify'

Vue.mixin(globalMixins)
Vue.use(VueHighlightJS)
Vue.prototype.$notify = Notification

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
