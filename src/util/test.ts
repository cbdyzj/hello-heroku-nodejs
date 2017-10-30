import * as assert from 'assert'

const t = {
    is: (a, b) => assert(Object.is(a, b), `current: ${a}, expected: ${b}`)
}

export const test = (cb: Function) => cb(t)
