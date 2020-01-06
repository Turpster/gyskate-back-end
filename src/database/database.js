const connect = require('@databases/mysql');
const {sql} = require('@databases/mysql');

class DatabaseConnection
{
    constructor(host, port, user, password, databaseName) {
        this.database = connect({
            host: host,
            port: port,
            user: user,
            password: password,
            database: databaseName,
        });
    }
}