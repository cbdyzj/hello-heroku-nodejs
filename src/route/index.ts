import { Router } from 'express'
import hello from './check'

//新添加的路由放这个数组里面
const routers: Array<(router: Router) => void> = [
    hello,
]

export default function (router: Router): void {
    routers.forEach(r => r(router))
}
