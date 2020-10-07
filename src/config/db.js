const { Pool } = require('pg') //é necessário o pool para que ele não fique solicitando o senha toda hora

module.exports = new Pool({
    user: 'postgres',
    password: '5639198',
    host: 'localhost',
    port: '5432',
    database: 'launchstoredb'
})