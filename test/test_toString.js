import { expect } from 'chai';
import toString from '../src/toString.js';

describe('toString()', function() {
    // Test null input
    /*it('should return an empty string for null', function() {
        const result = toString(null);
        expect(result).to.equal('');
    });

    // Test undefined input
    it('should return an empty string for undefined', function() {
        const result = toString(undefined);
        expect(result).to.equal('');
    });*/

    // Test string input
    it('should return the input string as is', function() {
        const result = toString('hello');
        expect(result).to.equal('hello');
    });

    // Test number input
    it('should return the string representation of a number', function() {
        const result = toString(42);
        expect(result).to.equal('42');
    });

    // Test negative zero input
    it('should preserve the sign of negative zero', function() {
        const result = toString(-0);
        expect(result).to.equal('-0');
    });

    // Test array input
    it('should convert an array to a string', function() {
        const result = toString([1, 2, 3]);
        expect(result).to.equal('1,2,3');
    });

    // Test nested array input
    it('should convert nested arrays to a string', function() {
        const result = toString([1, [2, [3]]]);
        expect(result).to.equal('1,2,3');
    });

    // Test symbol input
    it('should convert a symbol to its string representation', function() {
        const symbol = Symbol('test');
        const result = toString(symbol);
        expect(result).to.equal(symbol.toString());
    });

    // Test custom object input
    it('should return the string representation of an object', function() {
        const result = toString({ key: 'value' });
        expect(result).to.equal('[object Object]');
    });

    // Test NaN input
    it('should return the string "NaN" for NaN input', function() {
        const result = toString(NaN);
        expect(result).to.equal('NaN');
    });
});
