import * as assert from 'assert'

class TestTool {

    is(current, expected) {
        try {
            assert(Object.is(current, expected))
        } catch (error) {
            console.error('current:', current, ', expected:', expected)
            console.error(error)
        }
    }
}

type TestFunction = (t: TestTool) => void

export async function test(fn: TestFunction) {
    await fn(new TestTool())
}
