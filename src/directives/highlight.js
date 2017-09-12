/**
 * Created by linfengluo@gmail.com on 2017/9/8.
 */

import hljs from 'highlight.js'
import 'highlight.js/styles/github-gist.css'

export default {
    bind(el){
        hljs.highlightBlock(el)
    }
}
