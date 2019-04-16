const setFunctions = require('./set');
const probFunctions = require('./prob');

console.log(probFunctions.PrFair(['H', 'T'], 4))

module.exports = {
    set: {
        ...setFunctions
    }
};