const PrFair = (outcomes, repetition) => {
    const repeated = new Array(repetition).fill(0).map(() => outcomes);

    const crossProduct = values => values.reduce((acc, value) => {
        if(acc.length === 0) return value;
        return [].concat.apply(
            [], 
            value.map(outcome => acc.map(v => v + outcome))
        );
    }, []);

    return crossProduct(repeated);
};

module.exports = {
    PrFair
}