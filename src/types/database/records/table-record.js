const Database = require("../database");

module.exports = class TableRecord
{
    /**
     * constructor for tablerecord
     * @param {Database} database the target database for record
     */
    constructor(database)
    {
        this.database = database;
    }
};