const Database = require("./types/database/database");
const Settings = require("./settings");

const UserRecord = require('./types/database/records/user');
const ContentRecord = require('./types/database/records/content');

const BinaryFile = require("binary-file");

module.exports.database = new Database(Settings.contents().database.host, Settings.contents().database.port,
    Settings.contents().database.user.username, Settings.contents().user.password, Settings.contents().database.name);


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