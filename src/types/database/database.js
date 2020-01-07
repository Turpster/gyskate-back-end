const connect = require('@databases/mysql');
const {sql} = require('@databases/mysql');

module.exports = class DatabaseConnection
{
    /**
     * Constructor for Database
     * @param {string} host
     * @param {number} port
     * @param {string} user
     * @param {string} password
     * @param {string} databaseName
     */
    constructor(host, port, user, password, databaseName) {
        this.database = connect(`mysql://${user}:${password}@${host}:${port}/${databaseName}`);
    }
};