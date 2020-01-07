const Config = require("types/config.js");

module.exports.settings = new Config("./settings.json", {
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
}, false);

module.exports.contents = () => {return module.exports.settings.contents};