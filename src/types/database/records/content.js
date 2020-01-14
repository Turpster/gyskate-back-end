const User = require("user");
const TableRecord = require("./table-record.js");
const ContentTable = require("../table/content-table");

module.exports = class ContentRecord extends TableRecord
{
    propertyGetters = {
        id: () => { return this.id },
        title: async () => {
            return await this.databaseTable.knexClient(this.databaseTable.tableName).select().where('id', this.id).select("title").then((data) => {
                return data;
            })
        },

        description: async () => {
            return await this.databaseTable.knexClient(this.databaseTable.tableName).select().where('id', this.id).select("description").then((data) => {
                return data;
            })
        },

        file_name: async () => {
            return await this.databaseTable.knexClient(this.databaseTable.tableName).select().where('id', this.id).select("file_name").then((data) => {
                return data;
            })
        },

        file_binary: async () => {
            return await this.databaseTable.knexClient(this.databaseTable.tableName).select().where('id', this.id).select("file_binary").then((data) => {
                return data;
            })
        },

        created_at: async () => {
            return await this.databaseTable.knexClient(this.databaseTable.tableName).select().where('id', this.id).select("created_at").then((data) => {
                return data;
            })
        },

        author: async () => {
            return await this.databaseTable.knexClient(this.databaseTable.tableName).select().where('id', this.id).select("author").then((data) => {
                return data;
            })
        }};

    /**
     * constructor for the content object
     * @param {ContentTable} contentTable the table that holds the content records
     * @param {number} id the id of the content
     */
    constructor(contentTable , id) {
        super(contentTable);

        this.id = id;
    }
};