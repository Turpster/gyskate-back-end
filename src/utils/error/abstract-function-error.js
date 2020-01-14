/**
 * error for an invalid variable range
 * @param {string} label the function label
 * @return {Error}
 */
module.exports = (label) => new TypeError(`${label} needs to be overridden.`);