const DatabaseTable = require('./table');
const ContentRecord = require('../records/content');

const RecordDoesNotExist = require('../../../utils/error/record-does-not-exist');

module.exports = class ContentTable extends DatabaseTable
{
    /**
     * @override
     * @type {{titleLength: number, DescriptionLength: number}}
     */
    static propertyLength = {
        TitleLength: 60,
        DescriptionLength: 3000
    };

    constructor(knexClient) {
        super(knexClient, "content");
    }


    /**
     * @override
     * @return {Promise<void>}
     */
    createTable()
    {
        this.knexClient.schema.createTable(this.tableName, (table) => {
            table.string("id", 16).notNullable().primary().unique();
            table.string("title", ContentTable.propertyLength.TitleLength).notNullable();
            table.string("description", ContentTable.propertyLength.DescriptionLength).notNullable();

            table.string("file_name").notNullable();
            table.binary("file_binary").notNullable();

            table.timestamp('created_at').notNullable();

            table.string('author').notNullable();
        })
    }

    /**
     * @override
     * @return {Promise<TableRecord[]>}
     */
    getAllRecords()
    {
        return this.knexClient(this.tableName).where('id', this.id).then(data => {
            return data;
        });
    }

    /**l
     * check whether record exists
     * @abstract
     * @param {number} identifier record identifier
     * @return {Promise<boolean>}
     */
    recordExists(identifier)
    {
        return this.knexClient(this.tableName).where({id: identifier}).exists();
    }

    /**
     * get a content record
     * @param {number} identifier the target content id
     * @throws {RecordDoesNotExist} if the identifier does not match
     * @return {ContentRecord} the content record
     */
    getRecord(identifier) : ContentRecord {

        if (this.recordExists(identifier))
            return new ContentRecord(this, identifier);
        else throw RecordDoesNotExist(identifier, this.tableName);
    }
};