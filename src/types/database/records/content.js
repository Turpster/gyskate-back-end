const User = require("user");
const TableRecord = require("./table-record.js");
const KnexClient = require('knex').Client;

module.exports = class ContentRecord extends TableRecord
{
    /**
     * constructor for the content object
     * @param {KnexClient} knexClient the database client that holds the content table
     * @param {number} id the id of the content
     */
    constructor(knexClient, id) {
        super(knexClient);
        this.id = id;
    }

    /**
     * author of content
     * @return {User} the author of the content
     */
    getAuthor()
    {

    }
};