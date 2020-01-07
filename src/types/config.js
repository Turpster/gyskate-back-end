const fs = require('fs');

class Config
{
    constructor(fileName, defaultContents)
    {
        if (!fs.existsSync(fileName))
        {
            fs.writeFileSync(fileName, defaultContents)
        }

        this.contents = require(fileName);
    }
}
