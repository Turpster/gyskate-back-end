const Config = require("./types/config");

module.exports = new Config("./settings.json",
    {
    port: 9000,
    database: {
        host: "example-host.com",
        port: 1433,
        name: "example-database",
        user: {
            username: "example-username",
            password: "example-password"
        }
    }
}, true);