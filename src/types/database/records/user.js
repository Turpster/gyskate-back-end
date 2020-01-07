const KnexClient = require("knex").Client;
const Content = require('./content');
const TableRecord = require('./table-record.js');

module.exports = class UserRecord extends TableRecord
{
    /**
     * constructor for user
     * @param {KnexClient} knexClient the database client that holds the user table
     * @param {string} username the username of the target
     */
    constructor(knexClient, username)
    {
        super(knexClient);
        this.username = username;
    }

    /**
     * get the displayname of the content
     * @returns {string} the display name of the user
     */
    getDisplayName()
    {

    }

    /**
     * authenticate user
     * @param {string} md5Hash the hash of the password
     * @return {boolean} whether password is correct or not
     */
    authenticate(md5Hash)
    {

    }

    /**
     * get users contents
     * @returns {Content[]} an array of content
     */
    getContent()
    {

    }
};
