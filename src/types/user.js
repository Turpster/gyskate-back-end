module.exports = class User
{
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
