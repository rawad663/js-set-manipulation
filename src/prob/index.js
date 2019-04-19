const PrFair = (outcomes, repetition, expectedOutcome) => {
    const repeated = new Array(repetition).fill(0).map(() => outcomes);

    const generateSampleSpace = values => values.reduce((acc, value) => {
        if(acc.length === 0) return value;
        return [].concat.apply(
            [], 
            value.map(outcome => acc.map(v => v + outcome))
        );
    }, []);

    /**
     * [H, H, T]
     * [T, H, H] 
     */
    const computeVariations = (sampleSpace, expectedOutcome) => {
        const outcomeCount = (outcome) => outcome.split('').reduce((acc, value) => {
            acc[value] = acc[value] ? acc[value] + 1 : 1;
            return acc;
        }, {});

        const expectedOutcomeCount = outcomeCount(expectedOutcome);

        return sampleSpace.filter(x => {
            const count = outcomeCount(x);
            return Object.keys(count).filter(x => count[x] !== expectedOutcomeCount[x])
        });
    };

    const sampleSpace = generateSampleSpace(repeated);
    return computeVariations(sampleSpace, expectedOutcome)

};

module.exports = {
    PrFair
}