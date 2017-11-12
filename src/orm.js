import * as Sequelize from 'sequelize'

const options = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'test',
    timezone: '+08:00',
    // logging: false,
    isolationLevel: 'READ COMMITTED',
    operatorsAliases: false,
}

export const sequelize = new Sequelize(options)

const testGroupDef = {
    name: 'TestGroup',
    attributes: {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: Sequelize.STRING,
        remark: Sequelize.TEXT,
    },
    options: {
        tableName: 'test_groups',
        createdAt: false,
        updatedAt: false,
    },
    associate: false
}

const testDef = {
    name: 'Test',
    attributes: {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: Sequelize.STRING,
        remark: Sequelize.TEXT,
    },
    options: {
        tableName: 'tests',
        createdAt: false,
        updatedAt: false,
    },
    associate: db => {
        db.Test.belongsTo(db.TestGroup, {
            foreignKey: {
                name: 'group',
                field: 'groupId'
            }
        })
    }
}

const defs = [testDef, testGroupDef]
const db = {}

for (const def of defs) {
    db[def.name] = sequelize.define(def.name, def.attributes, def.options)
}

for (const def of defs) {
    if (def.associate) {
        def.associate(db)
    }
}

async function t() {
    await db.Test.create({ name: 'haha', group: 2, remark: 'xixi' })
    const rs = await db.Test.findOne({
        include: db.TestGroup,
        where: {
            id: 1
        },
        raw: true,
        nest: true,
    })
    console.log(rs)
}

t().then(() => process.exit(0))
