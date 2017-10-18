import { test, sleep } from '../src/util'

test(async t => {
    await sleep(2000)
    t.is(1, 2)
})
