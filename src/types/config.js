const fs = require('fs');
const ConfigNotChanged = require("./database/config-not-changed");
const path = require('path');
const jsonDiff = require("json-diff").diff;

module.exports = class Config
{
    /**
     * constructor for the config object
     * @param {string} file
     * @param {JSON} defaultContents
     * @param {boolean} shouldChangeOnNew
     */
    constructor(file, defaultContents, shouldChangeOnNew=false)
    {
        if (!fs.existsSync(file))
        {
            fs.writeFileSync(file, JSON.stringify(defaultContents, null,4));
            if (shouldChangeOnNew) throw ConfigNotChanged(file)
        }

        this.contents = require(path.relative(__dirname, file));
        this.hasJsonChanged = jsonDiff(this.contents, defaultContents);

        if (shouldChangeOnNew && !this.hasJsonChanged)
        {
            throw ConfigNotChanged(file);
        }
    }
};
