import * as sqlite3 from 'sqlite3'

const sqlite = new sqlite3.Database(':memory:')

export {
    sqlite,
}

