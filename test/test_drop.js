import { expect } from 'chai';
import drop from '../src/drop.js';

describe('drop()', function() {
    // Test dropping one element from the beginning of the array
    it('should drop one element from the beginning of the array', function() {
        const inputArray = [1, 2, 3];
        const result = drop(inputArray);
        expect(result).to.eql([2, 3]);
    });

    // Test dropping two elements from the beginning of the array
    it('should drop two elements from the beginning of the array', function() {
        const inputArray = [1, 2, 3];
        const result = drop(inputArray, 2);
        expect(result).to.eql([3]);
    });

    // Test dropping more elements than the array length
    it('should return an empty array when dropping more elements than the array length', function() {
        const inputArray = [1, 2, 3];
        const result = drop(inputArray, 5);
        expect(result).to.eql([]);
    });

    // Test dropping zero elements from the array
    it('should return the same array when dropping zero elements', function() {
        const inputArray = [1, 2, 3];
        const result = drop(inputArray, 0);
        expect(result).to.eql([1, 2, 3]);
    });

    // Test dropping elements from an empty array
    it('should return an empty array when dropping elements from an empty array', function() {
        const result = drop([]);
        expect(result).to.eql([]);
    });

    // Test dropping negative elements (treated as dropping zero elements)
    it('should return the same array when dropping negative elements', function() {
        const inputArray = [1, 2, 3];
        const result = drop(inputArray, -2);
        expect(result).to.eql([1, 2, 3]);
    });

    // Test dropping elements from an array with mixed types
    it('should drop elements from an array with mixed types', function() {
        const inputArray = [1, 'two', { three: 3 }, true];
        const result = drop(inputArray, 2);
        expect(result).to.eql([{ three: 3 }, true]);
    });
});
