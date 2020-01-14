/**
 * error for an invalid database record
 * @param {object} id the function label
 * @param {string} tableName the tables name
 * @return {Error}
 */
module.exports = (id, tableName) => new TypeError(`${id.toString()} does not exists as a record for ${tableName}.`);