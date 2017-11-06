import * as assert from 'assert'

const t = {
    is: (a, b) => assert(Object.is(a, b), `current: ${a}, expected: ${b}`)
}

// 工具函数
export const test = (cb: Function) => cb(t)

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
