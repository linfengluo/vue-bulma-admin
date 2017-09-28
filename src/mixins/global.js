/**
 * Created by linfengluo@gmail.com on 2017/9/7.
 */

const globalMixins = {
    methods: {
        getStyleWidth(width){
            return width === 0 || width === '' ? '' : `width: ${width}px;`
        }
    }
}

export default globalMixins
