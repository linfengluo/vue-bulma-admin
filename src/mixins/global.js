/**
 * Created by linfengluo@gmail.com on 2017/9/7.
 */

const globalMixins = {
    data(){
        return {
            notificationList: []
        }
    },
    methods: {
        getStyleWidth(width){
            return width === 0 || width === '' ? '' : `width: ${width}px;`
        },

        notify(message){
            this.notificationList.push(message)
        }
    }
}

export default globalMixins
