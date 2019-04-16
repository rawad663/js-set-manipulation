const {
    intersection,
    union,
    difference
} = require('../../src/set');

let test_sets;

beforeAll(() => {
    test_sets = [
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
        [ 2, 4, 6, 8, 10, 12 ],
        [ 1, 2, 4, 8, 16, 32, 64 ]
    ];
});

test('intersection:: returns the intersection of n sets', () => {
    const expected = [ 2, 4, 8 ];
    expect(intersection(...test_sets)).toEqual(expected);
});

test('union:: returns the union of n sets', () => {
    const expected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16, 32, 64 ];
    expect(union(...test_sets)).toEqual(expected);
});

test('difference:: returns the difference of a set X and n other sets', () => {
    /**
     * Formally, the number being subtracted is known as the subtrahend, 
     * while the number it is subtracted from is the minuend.
     */
    const [ subtrahend, ...minuend ] = test_sets;
    const expected = [ 3, 5, 7, 9 ];

    expect(difference(subtrahend, minuend)).toEqual(expected);
});