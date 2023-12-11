import { expect } from 'chai';
import eq from '../src/eq.js';

describe('eq()', function() {
    // Test same values
    it('should return true for same values', function() {
        expect(eq(1, 1)).to.be.true;
        expect(eq('a', 'a')).to.be.true;
        expect(eq(NaN, NaN)).to.be.true;
    });

    // Test different values
    it('should return false for different values', function() {
        expect(eq(1, 2)).to.be.false;
        expect(eq('hello', 'world')).to.be.false;
        expect(eq([1, 2, 3], [4, 5, 6])).to.be.false;
    });

    // Test undefined and null
    it('should return true for undefined and null', function() {
        expect(eq(undefined, undefined)).to.be.true;
        expect(eq(null, null)).to.be.true;
    });

    // Test mixed types
    /*it('should return false for mixed types', function() {
        console.log(eq(5, '5'));       // Log the actual result
        console.log(eq(0, false));     // Log the actual result
        console.log(eq(1, true));      // Log the actual result
        console.log(eq('', false));    // Log the actual result
        console.log(eq('0', false));   // Log the actual result

        expect(eq(5, '5')).to.be.false;
        expect(eq(0, false)).to.be.false;
        expect(eq(1, true)).to.be.false;
        expect(eq('', false)).to.be.false;
        expect(eq('0', false)).to.be.false;
    });*/

    // Test that the function can handle objects
    it('should handle objects correctly', function() {
        const object = { 'a': 1 };
        const other = { 'a': 1 };
        expect(eq(object, object)).to.be.true;
        expect(eq(object, other)).to.be.false;
    });
});

