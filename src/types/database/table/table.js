const KnexClient = require('knex').client;
const TableRecord = require('../records/table-record');
const AbstractFunctionError = require('../../../utils/error/abstract-function-error');

module.exports = class DatabaseTable
{
    /**
     * the connected knex client
     * @type {KnexClient}
     */
    knexClient : KnexClient;

    /**
     * the name of the table
     * @type {string}
     */
    tableName;

    /**
     * length of serializeable properties
     * @abstract
     * @type {{key: number}}
     */
    static propertyLength = {};

    /**
     * constructor for databasetable
     * @param {KnexClient} knexClient knex database client
     * @param {string} tableName tables name
     */
    constructor(knexClient, tableName)
    {
        this.knexClient = knexClient;
        this.tableName = tableName;

        KnexClient.hasTable(this.tableName).then((r) => {
            if (r === false)
            {
                this.createTable();
            }
        });
    }

    /**
     * get all records
     * @abstract
     * @return {Promise<TableRecord[]>}
     */
    getAllRecords()
    {
        AbstractFunctionError(this.getAllRecords.toString());
    }

    /**
     * check whether record exists
     * @abstract
     * @param identifier record identifier
     * @return {Promise<boolean>}
     */
    recordExists(identifier)
    {
        AbstractFunctionError(this.recordExists.toString());
    }

    /**
     * create table
     * @abstract
     */
    createTable()
    {
        AbstractFunctionError(this.createTable.toString());
    }

    /**
     * get a record
     * @abstract
     * @param identifier the identifier
     * @return {TableRecord}
     */
    getRecord(identifier)
    {
        AbstractFunctionError(this.getRecord.toString())
    }
};