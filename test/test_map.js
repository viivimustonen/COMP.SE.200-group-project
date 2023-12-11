import { expect } from 'chai';
import map from '../src/map.js';

describe('map()', function() {
    // Test square function with positive integers
    it('should map each element to its square for positive integers', function() {
        const square = (n) => n * n;
        const result = map([4, 8], square);
        expect(result).to.eql([16, 64]);
    });

    // Test square function with negative integers
    it('should map each element to its square for negative integers', function() {
        const square = (n) => n * n;
        const result = map([-3, -5], square);
        expect(result).to.eql([9, 25]);
    });

    // Test identity function (no change in elements)
    it('should return the same array when using identity function', function() {
        const identity = (n) => n;
        const inputArray = [1, 'two', { three: 3 }];
        const result = map(inputArray, identity);
        expect(result).to.eql(inputArray);
    });

    // Test mapping function on an empty array
    it('should return an empty array for an empty input array', function() {
        const square = (n) => n * n;
        const result = map([], square);
        expect(result).to.eql([]);
    });

    // Test mapping function on undefined array
    it('should return an empty array for undefined input array', function() {
        const square = (n) => n * n;
        const result = map(undefined, square);
        expect(result).to.eql([]);
    });

    // Test mapping function with index parameter
    it('should pass index as the second parameter to the mapping function', function() {
        const addIndex = (value, index) => value + index;
        const result = map([1, 2, 3], addIndex);
        expect(result).to.eql([1, 3, 5]);
    });

    // Test mapping function with the original array as the third parameter
    it('should pass the original array as the third parameter to the mapping function', function() {
        const accessOriginalArray = (value, index, array) => array[0];
        const result = map([1, 2, 3], accessOriginalArray);
        expect(result).to.eql([1, 1, 1]);
    });
});
