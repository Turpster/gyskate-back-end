/**
 * record that doesnt exist error
 * @param {string} identifier
 * @param {string} DatabaseTableName the range the variable must be between
 * @return {Error}
 */
module.exports = (identifier, DatabaseTableName) => new Error(`No matching record of ${identifier} in ${DatabaseTableName}.`);