import * as moment from 'moment'

//检测服务
async function checkService() {
    return moment().toLocaleString()
}

export {
    checkService,
}