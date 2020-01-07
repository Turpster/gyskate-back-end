const User = require("user");

module.exports = class ContentRecord {

    /**
     * constructor for the content object
     * @param database the database that holds the content table
     * @param id the id of the content
     */
    constructor(database, id) {
        this.database = database;
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