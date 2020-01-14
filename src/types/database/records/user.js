const Content = require('./content');
const TableRecord = require('./table-record.js');
const UserTable = require("../table/user-table");

module.exports = class UserRecord extends TableRecord
{
    propertyGetters = {
        display_name: () => {
            return this.databaseTable.knexClient(this.databaseTable.tableName).select().where('username', this.username).select("display_name").then((data) => {
                return data;
            })
        },

        created_at: () => {
            return this.databaseTable.knexClient(this.databaseTable.tableName).select().where('username', this.username).select("created_at").then((data) => {
                return data;
            })
        },
        password: () => {
            return this.databaseTable.knexClient(this.databaseTable.tableName).select().where('username', this.username).select("password").then((data) => {
                return data;
            })
        }
    };

    /**
     * constructor for user
     * @param {UserTable} userTable the table that holds the user records
     * @param {string} username the username of the target
     */
    constructor(userTable, username)
    {
        super(userTable);
        this.username = username;
    }

    /**
     * authenticate user
     * @param {string} md5Hash the hash of the password
     * @return {boolean} whether password is correct or not
     */
    authenticate(md5Hash) : boolean
    {

    }
};
