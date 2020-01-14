const Settings = require("./settings");

module.exports.UserRecord = require('./types/database/records/user');
module.exports.ContentRecord = require('./types/database/records/content');

const BinaryFile = require("binary-file");

module.exports.database = require('knex')({
    client: 'mysql',
    connection: {
        host: Settings.contents().host + ":" + Settings.contents().port,
        user: Settings.contents().user.username,
        password: Settings.contents().user.password,
        database: Settings.contents().database
    }
});

/**
 * create a new user
 * @param username {string} the user's username
 * @param displayName {string} the user's display name
 * @param md5Password {string} the user's password md5 hash
 * @throws Error if username is already taken
 * @returns {UserRecord}
 */
module.exports.createUser = (username, displayName, md5Password) => {

};

/**
 * create new content
 * @param {BinaryFile} contentBin
 * @param {string} contentFilename filename of content
 * @returns {ContentRecord} the new content
 */
module.exports.createContent = (contentBin, contentFilename) => {

};