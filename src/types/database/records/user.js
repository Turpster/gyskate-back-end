const Database = require("../database");

module.exports = class UserRecord
{
    /**
     * constructor for user
     * @param {Database} database the database that holds the user table
     * @param {string} username the username of the target
     */
    constructor(database, username)
    {
        this.database = database;
        this.username = username;
    }

    /**
     * get the displayname of the content
     * @returns {string} the display name of the user
     */
    getDisplayName()
    {

    }
};
