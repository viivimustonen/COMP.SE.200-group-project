import { expect } from 'chai';
import slice from '../src/slice.js';

describe('slice()', function() {
    // Test basic slicing
    it('should return a sliced array', function() {
        const array = [1, 2, 3, 4];
        expect(slice(array, 2)).to.eql([3, 4]);
    });

    // Test negative start index
    it('should handle negative start index', function() {
        const array = [1, 2, 3, 4, 5];
        expect(slice(array, -2)).to.eql([4, 5]);
    });

    // Test negative end index
    it('should handle negative end index', function() {
        const array = [1, 2, 3, 4];
        expect(slice(array, 0, -1)).to.eql([1, 2, 3]);
    });

    // Test negative start and end index
    it('should handle negative start and end index', function() {
        const array = [1, 2, 3, 4];
        expect(slice(array, -3, -1)).to.eql([2, 3]);
    });

    // Test empty array
    it('should return an empty array for an empty input array', function() {
        const array = [];
        expect(slice(array, 1, 3)).to.eql([]);
    });

    // Test start greater than end
    it('should return an empty array when start is greater than end', function() {
        const array = [1, 2, 3, 4];
        expect(slice(array, 3, 2)).to.eql([]);
    });

    // Test start and end equal
    it('should return an empty array when start and end are equal', function() {
        const array = [1, 2, 3, 4];
        expect(slice(array, 2, 2)).to.eql([]);
    });

    // Test start out of bounds
    it('should handle start out of bounds', function() {
        const array = [1, 2, 3, 4];
        expect(slice(array, 10)).to.eql([]);
    });

    // Test end out of bounds
    it('should handle end out of bounds', function() {
        const array = [1, 2, 3, 4];
        console.log(slice(array, 1, 20))
        expect(slice(array, 1, 20)).to.eql([2, 3, 4]);
    });

    // Test start and end out of bounds
    it('should handle start and end out of bounds', function() {
        const array = [1, 2, 3, 4];
        console.log(slice(array, 10, 20))
        expect(slice(array, 10, 20)).to.eql([]);
    });
});
