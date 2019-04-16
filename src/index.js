const {
    intersection,
    union,
    difference
} = require('./set');

const set1 = [1, 2, 3, 4, 6];
const set2 = [1, 2];
const set3 = [4];

console.log(difference(set1, [set2, set3]));

module.exports = {
    set: {
        intersection,
        union,
        difference
    }
};