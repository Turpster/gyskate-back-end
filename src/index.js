const express = require('express');
const Config = require("./types/database/database");
const app = express();
const settings = new Config("./settings.json", {port: 9000});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(settings.contents.port, () => {console.log(`Example app listening on port ${settings.contents.port}`)});