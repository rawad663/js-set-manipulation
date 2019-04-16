const intersection = (...args) => {
    let [arg1, ...rest] = args;

    rest.forEach(arg => {
        arg1 = arg1.filter((el, index) => (
            arg.includes(el) && arg1.indexOf(el) === index)
        )
    })

    return arg1;
} 

const union = (...args) => {
    let [arg1, arg2, ...rest] = args;

    const merged = arg2.concat(...rest);
    return arg1.filter((el, index) => merged.includes(el) && arg1.indexOf(el) === index);
}

const difference = (set, subtractionSets) => {
    const [ arg1, rest ] = subtractionSets;
    const merged = arg1.concat(...rest);

    return set.filter(el => !merged.includes(el));
}

module.exports = {
    intersection,
    union,
    difference
}