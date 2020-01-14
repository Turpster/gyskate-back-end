/**
 * error for an invalid variable range
 * @param {string} label the variable label
 * @param {{minimum: int, maximum: int}} range the range the variable must be between
 * @return {Error}
 */
module.exports = (label, range) => new Error(`${label} needs to be in the range of ${range.minimum} and ${range.maximum}`);