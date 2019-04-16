const {
    intersection
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