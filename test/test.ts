import { sleep, test } from '../src/util'

test(async t => {
    await sleep(2000)
    t.is(1, 1)
})
