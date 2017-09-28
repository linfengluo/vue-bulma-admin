/**
 * Created by linfengluo@gmail.com on 2017/9/28.
 */

import '../sass/app.scss'
import 'font-awesome/css/font-awesome.css'
import 'bulma'

import Alert from './alert'
import {Breadcrumb, BreadcrumbItem} from './breadcrumb'
import {ButtonGroup, Button} from './button'
import {CheckBox, CheckBoxGroup} from './checkBox'
import DatePicker from './datepicker'
import Editor from './editor'
import {Form, FormItem} from './form'
import Icon from './icon'
import Input from './input'
import Message from './message'
import Notify from './notify'
import {Radio, RadioBtn, RadioGroup} from './radio'
import {SelecterItem, SelecterGroup} from './selecter'
import Switch from './switch'
import {Table, TableCol} from './table'
import Textarea from './textarea'
import Title from './title'

import {Row, Col} from './columns'
import {Content, ContentHeader} from './layout/content'
import Header from './layout/header'
import NavMenu from './layout/navMenu'

const components = [
    Alert,
    Breadcrumb,
    BreadcrumbItem,
    ButtonGroup,
    Button,
    CheckBox,
    DatePicker,
    CheckBoxGroup,
    Editor,
    Form,
    FormItem,
    Icon,
    Input,
    Radio,
    RadioBtn,
    RadioGroup,
    SelecterItem,
    SelecterGroup,
    Switch,
    Table,
    TableCol,
    Textarea,
    Title,
    Row,
    Col,
    Content,
    ContentHeader,
    Header,
    NavMenu
]

const install = function(Vue, options = {}) {
    if (install.installed) return
    Object.keys(components).forEach((key) => {
        Vue.component(components[key].name, components[key])
    })
    Vue.prototype.$notify = Notify
    Vue.prototype.$message = Message
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

const exportObject = {
    install,
    version: '0.0.1'
}

export default exportObject
