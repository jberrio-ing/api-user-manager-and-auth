const { Client,Pool } = require("pg")

class PostgreSQL {
    getConexion = async () => {
        const client = new Pool({
            host:'127.0.0.1',
            port:5432,
            user:'user',
            password:'admin123',
            database:'my_store'
        })
        await client.connect()
        return client
    }
}

module.exports = PostgreSQL
