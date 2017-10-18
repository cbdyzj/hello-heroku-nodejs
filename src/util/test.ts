import * as assert from 'assert'

const t = {
    is: (a, b) => assert(Object.is(a, b), `current: ${a}, expected: ${b}`)
}

export async function test(cb) {
    await cb(t)
}
