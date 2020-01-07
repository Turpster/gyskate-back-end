const KnexClient = require("knex").Client;

module.exports = class TableRecord
{
    /**
     * constructor for tablerecord
     * @param {KnexClient} knexClient the database client for target table
     */
    constructor(knexClient)
    {
        this.knexTable = knexClient;
    }
};