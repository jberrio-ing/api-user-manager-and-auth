const getConexion = require("../libs/postgresql")
const boom = require("@hapi/boom")

class UserService {

    async findAll() {
        const client = await getConexion()
        const { rows } = await client.query("SELECT * FROM users");
        return rows;
    }

    async find(id) {
        const client = await getConexion()
        const { rows: [user] } = await client.query("SELECT * FROM users where id = $1", [id]);
        if (user) return user
        throw boom.notFound(`No se encontro el usuario con el id ${id}`)
    }

    async craete({ names, family_names }) {
        const client = await getConexion()
        const { rows: [user] } = await client.query("INSERT INTO users (names,family_names) VALUES($1,$2) RETURNING *", [names, family_names]);
        return user
    }

    async update(id, { names, family_names }) {
        await this.find(id)
        const client = await getConexion()
        const { rows: [userMod] } = await client.query("UPDATE users SET names=$1,family_names=$2 where id = $3 RETURNING *", [names, family_names, id]);
        return userMod
    }

    async delete(id) {
        await this.find(id)
        const client = await getConexion()
        await client.query("DELETE FROM users where id = $1", [id]);

    }
}

module.exports = UserService
