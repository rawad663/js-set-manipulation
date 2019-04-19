const setFunctions = require('./set');
const probFunctions = require('./prob');

console.log(probFunctions.PrFair(['H', 'T'], 4, 'HHHH'))

module.exports = {
    set: {
        ...setFunctions
    }
};