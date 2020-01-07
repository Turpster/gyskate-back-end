module.exports = class User
{
    /**
     * Constructor for User
     * @param {string} username
     * @param {string} displayName
     */
    constructor(username, displayName)
    {
        this.username = username;
        this.displayName = displayName;
    }

    getName()
    {
        // TODO Get name from database
    }
};
