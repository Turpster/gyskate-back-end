const express = require('express');
const settings = require("./settings");
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(settings.contents.port, () => {console.log(`Example app listening on port ${settings.contents.port}`)});