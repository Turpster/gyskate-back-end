const fs = require('fs');
const DatabaseNotChanged = require("./database/database-not-changed");
const path = require('path');
const jsonDiff = require("json-diff").diff;

module.exports = class Config
{

    /**
     * Constructor for Config
     * @param {string} file
     * @param {JSON} defaultContents
     * @param {boolean} shouldChangeOnNew
     */
    constructor(fileName, defaultContents, shouldChangeOnNew=false)
    {
        if (!fs.existsSync(file))
        {
            fs.writeFileSync(file, JSON.stringify(defaultContents, null,4));
            if (shouldChangeOnNew) throw DatabaseNotChanged(file)
        }

        this.contents = require(path.relative(__dirname, file));
        this.hasJsonChanged = jsonDiff(this.contents, defaultContents);

        if (shouldChangeOnNew && !this.hasJsonChanged)
        {
            throw DatabaseNotChanged(file);
        }
    }
}
