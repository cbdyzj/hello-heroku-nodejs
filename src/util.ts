import * as assert from 'assert'
import { Context } from 'koa'
import database from './database'
const t = {
    is: (a, b) => assert(Object.is(a, b), `current: ${a}, expected: ${b}`)
}

// 工具函数
export const test = (cb: Function) => cb(t)

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const authenticate = () => (ctx: Context & { user: any }, next: () => {}) => {
    const { token } = ctx.headers
    if (token === database.user.token) {
        ctx.user = database.user
    }
    return next()
}
