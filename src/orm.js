import * as Sequelize from 'sequelize'
import { options } from './database'

import defineFunction from './model'

export const sequelize = new Sequelize(options)

export const db = {}

const model = defineFunction(sequelize, Sequelize)
db[model.name] = model
