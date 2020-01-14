const DatabaseTable = require("./table");
const UserRecord = require("../records/user.js");

module.exports = class UserTable extends DatabaseTable
{
    /**
     * @override
     * @type {{titleLength: number, DescriptionLength: number}}
     */
    static propertyLength = {
        UsernameLength: 16,
        DisplayNameLength: 30
    };

    constructor(knexClient) {
        super(knexClient, "users");
    }


    /**
     * @override
     * @return {Promise<void>}
     */
    async createTable()
    {
        await this.knexClient.schema.createTable(this.tableName, async (table) => {
            table.string("username", UserTable.propertyLength.UsernameLength).notNullable().primary().unique();
            table.string("display_name", UserTable.propertyLength.DisplayNameLength).notNullable();

            table.binary("password", 128);

            table.timestamp('created_at').notNullable();
        })
    }

    /**
     * @override
     * @return {Promise<UserRecord[]>}
     */
    async getAllRecords() : Promise<UserRecord[]>
    {
        let userRecords = [];

        await this.knexClient(this.tableName).select("username").then(usernames => {
            for (let i = 0; i < usernames.length; i++)
            {
                let username = usernames[i];
                userRecords.push(new UserRecord(this, username));
            }
        });

        return userRecords;
    }

    /**l
     * check whether record exists
     * @abstract
     * @param {string} identifier record identifier
     * @return {Promise<boolean>}
     */
    async recordExists(identifier) : Promise<boolean>
    {
        return await this.knexClient(this.tableName).where({username: identifier}).exists();
    }

    /**
     * get a user record
     * @param {string} identifier the target username
     * @returns {UserRecord} the user record
     */
    getRecord(identifier) : UserRecord {
        new UserRecord(this, identifier);
    }
};