const connect = require('@databases/mysql');
const {sql} = require('@databases/mysql');

module.exports = class DatabaseConnection
{
    constructor(host, port, user, password, databaseName) {
        this.database = connect(`mysql://${user}:${password}@${host}:${port}/${databaseName}`);
    }
}