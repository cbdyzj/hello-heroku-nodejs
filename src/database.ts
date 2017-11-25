import { Options } from 'sequelize'

interface Database {
    [index: string]: any
}

export const database: Database = {
    user: {
        username: 'Ada',
        password: 'password',
        token: 'ada-token',
    },
}

// sequelize options
export const options: Options = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'test',
    timezone: '+08:00',
    isolationLevel: 'READ COMMITTED',
    operatorsAliases: false,
}
