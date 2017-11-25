import { db } from '../src/orm'

const { Test } = db

async function main() {
    await Test.drop()
    await Test.sync()
    const t = await Test.findOrBuild({
        where: { name: 'haha' },
        defaults: {
            name: 'haha'
        }
    })
    const tt = await t[0].save()
    console.log(tt)

}
main().then(() => process.exit(0))
