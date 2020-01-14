const DatabaseTable = require('../table/table');
const AbstractFunctionError = require('../../../utils/error/abstract-function-error');
const KnexClient = require("knex").client;

module.exports = class TableRecord
{
    /**
     * @abstract
     * @type {Object<string, Function>[]} getters for all properties
     */
    propertyGetters : Object<string, Function>[];

    /**
     * @type {DatabaseTable} the table that holds the record
     */
    databaseTable : DatabaseTable;

    /**
     * constructor for tablerecord
     * @param {DatabaseTable} databaseTable the database client for target table
     */
    constructor(databaseTable)
    {
        this.databaseTable = databaseTable;
    }

    /**
     * get table's name
     * @return {string} table's name
     */
    getTableName() : string
    {
        return this.databaseTable.tableName;
    }

    /**
     * get knex client
     * @return {KnexClient} knex client
     */
    getKnexClient() : KnexClient
    {
        return this.databaseTable.knexClient;
    }

    /**
     * get length of properties
     * @returns {Object<string, number>[]}
     */
    getPropertyLength() : Object<string, number>[]
    {
        return typeof(this.databaseTable).propertyLength;
    }
};