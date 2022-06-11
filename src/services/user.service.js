const PostgreSQL = require("../libs/postgresql")

class UserService extends PostgreSQL  {
    async findAll(){
        const client = await this.getConexion()
        const { rows } = await client.query("SELECT * FROM users");
        return rows;
    }
}

module.exports = UserService
