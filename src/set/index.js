const validateInput = (args) => {
    args.forEach(arg => {
        if(!Array.isArray(arg))
            throw new Error(`Error: invalid argument type ${typeof arg}.  Make sure it's an array`)
    });
}

const intersection = (...args) => {
    // Validate all inputs are arrays
    validateInput(args);
    let [arg1, ...rest] = args;

    rest.forEach(arg => {
        arg1 = arg1.filter((el, index) => (
            arg.includes(el) && arg1.indexOf(el) === index)
        )
    })

    return arg1;
} 

const union = (...args) => {
    validateInput(args);
    let [arg1, ...rest] = args;

    const merged = arg1.concat(...rest);
    return merged.filter((el, index) => merged.indexOf(el) === index);
}

const difference = (set, subtractionSets) => {
    validateInput([ set, ...subtractionSets ]);
    const [ arg1, rest ] = subtractionSets;
    const merged = arg1.concat(...rest);

    return set.filter(el => !merged.includes(el));
}

module.exports = {
    intersection,
    union,
    difference
}