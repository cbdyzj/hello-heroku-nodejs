import * as SequelizeStatic from 'sequelize'
import { Options, Sequelize, QueryTypes, Instance, DataTypes } from 'sequelize'

const options: Options = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'password',
    database: '测试数据库',
    timezone: '+08:00',
    logging: false,
    isolationLevel: 'READ COMMITTED',
    operatorsAliases: false,
}

const sequelize: Sequelize = new SequelizeStatic(options)

interface 测试用例属性 {
    主键: number
    名字: string
    说明: string
}

interface 测试用例 extends Instance<测试用例属性> {
    dataValues: 测试用例属性;
}

function define测试用例(sequelize: Sequelize, dataTypes: DataTypes): SequelizeStatic.Model<测试用例, 测试用例属性> {
    return sequelize.define('测试用例', {
        主键: {
            type: SequelizeStatic.INTEGER,
            primaryKey: true
        },
        名字: SequelizeStatic.STRING,
        说明: SequelizeStatic.STRING,
    }, {
            tableName: '测试用例',
            createdAt: false,
            updatedAt: false,
        }
    )
}

const 测试用例 = define测试用例(sequelize, SequelizeStatic)
