const User = require("user");
const TableRecord = require("./table-record.js");

module.exports = class ContentRecord extends TableRecord
{
    /**
     * constructor for the content object
     * @param database the database that holds the content table
     * @param id the id of the content
     */
    constructor(database, id) {
        super(database);
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