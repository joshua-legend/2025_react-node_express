const validateNumber = (num) => isNaN(num) || num < 0 || !num;

module.exports = { validateNumber };
