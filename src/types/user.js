const Database = require("database/database");

module.exports = class UserRecord
{
    /**
     * Constructor for User
     * @param {string} username
     * @param {string} displayName
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
