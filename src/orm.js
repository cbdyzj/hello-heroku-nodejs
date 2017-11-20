import * as Sequelize from 'sequelize'

const options = {
    dialect: 'mysql',
    host: 'arch',
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

const testGroupDef = DataTypes => ({
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
})

const testDef = DataTypes => ({
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
})

const defs = [testDef, testGroupDef]
const db = {}
const associations = []

for (const def of defs) {
    const { name, attributes, options, associate } = def(Sequelize)
    if (associate) {
        associations.push(associate)
    }
    db[def.name] = sequelize.define(name, attributes, options)
}

associations.forEach(associate => associate(db))

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
