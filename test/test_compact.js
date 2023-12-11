import { expect } from 'chai';
import compact from '../src/compact.js';

describe('compact()', function() {
    // Test compacting an array with various falsey values
    it('should remove all falsey values from the array', function() {
        const inputArray = [0, 1, false, 2, '', 3, null, undefined, NaN];
        const result = compact(inputArray);
        console.log(result);
        expect(result).to.eql([1, 2, 3]);
    });

    // Test compacting an array with no falsey values
    it('should return the same array if no falsey values are present', function() {
        const inputArray = [1, 'two', { three: 3 }];
        const result = compact(inputArray);
        console.log(result);
        expect(result).to.eql(inputArray);
    });

    // Test compacting an array with only falsey values
    it('should return an empty array if all values are falsey', function() {
        const inputArray = [0, false, '', null, undefined, NaN];
        const result = compact(inputArray);
        expect(result).to.eql([]);
    });

    // Test compacting an empty array
    it('should return an empty array for an empty input array', function() {
        const result = compact([]);
        expect(result).to.eql([]);
    });

    // Test compacting an undefined array
    it('should return an empty array for undefined input array', function() {
        const result = compact(undefined);
        console.log(result);
        expect(result).to.eql([]);
    });

    // Test compacting an array with mixed truthy and falsey values
    it('should only keep truthy values and remove falsey values', function() {
        const inputArray = [1, true, 'valid', false, null, undefined, 0, 'truthy', NaN];
        const result = compact(inputArray);
        console.log(result);
        expect(result).to.eql([1, true, 'valid', 'truthy']);
    });

    // Test compacting an array with objects
    it('should keep objects in the array', function() {
        const inputArray = [null, { name: 'John' }, false, { age: 25 }, undefined, NaN];
        const result = compact(inputArray);
        console.log(result);
        expect(result).to.eql([{ name: 'John' }, { age: 25 }]);
    });
});