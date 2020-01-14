/**
 * error for an invalid variable range
 * @param {string} label the variable label
 * @param {Type} supposedType the range the variable must be between
 * @return {Error}
 */
module.exports = (label, supposedType) => new TypeError(`${label} needs to be of type ${supposedType}.`);