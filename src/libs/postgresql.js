const { Pool } = require("pg")
const { database: { host, port, user, password, database } } = require("../config/config")

const getConexion = async () => {
    const client = new Pool({ host, port, user, password, database })
    await client.connect()
    return client
}

module.exports = getConexion
