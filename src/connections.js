const express = require('express');
const settings = require("./settings");

const database = require('./database');

const contentConnection = require('./connections/content');

const app = express();

contentConnection(app, database.ContentRecord);

app.listen(settings.contents.port, () => {console.log(`Example app listening on port ${settings.contents.port}`)});
