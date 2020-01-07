const Database = require("./types/database/database");
const Settings = require("./settings");

module.exports.database = new Database(Settings.contents().database.host, Settings.contents().database.port,
    Settings.contents().database.user.username, Settings.contents().user.password, Settings.contents().database.name);