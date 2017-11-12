import * as Sequelize from 'sequelize'

const options = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'test',
    timezone: '+08:00',
    logging: false,
    isolationLevel: 'READ COMMITTED',
    operatorsAliases: false,
}

export const sequelize = new Sequelize(options)

export function defineTest(sequelize, dataTypes) {
    const attributes = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        name: dataTypes.STRING,
        remark: dataTypes.STRING,
    }
    const options = {
        tableName: 'tests',
        createdAt: false,
        updatedAt: false,
    }
    return sequelize.define('Test', attributes, options)
}

export const Test = defineTest(sequelize, Sequelize.DataTypes)
Test.findAll().then(rs => rs.map(r => console.log(r.dataValues)))
