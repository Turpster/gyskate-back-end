const fs = require('fs');
const DatabaseNotChanged = require("./database/database-not-changed");

module.exports = class Config
{
    hasJsonChanged;

    constructor(fileName, defaultContents, shouldChangeOnNew=false)
    {

        if (!fs.existsSync(fileName))
        {
            fs.writeFileSync(fileName, defaultContents);
            if (shouldChangeOnNew)
            {
                console.log(`Please change ${fileName} before you start this application.`);
                throw DatabaseNotChanged(fileName);
            }
        }

        this.contents = require(fileName);
        this.hasJsonChanged = defaultContents !== this.contents;

        if (shouldChangeOnNew && !this.hasJsonChanged)
        {
            throw DatabaseNotChanged(fileName);
        }
    }
}
