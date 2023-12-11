import { expect } from 'chai';
import eq from '../src/eq.js';

describe('eq()', function() {
    // Test same values
    it('should return true for same values', function() {
        const object = { 'a': 1 };
        expect(eq(object, object)).to.be.true;
        expect(eq('a', 'a')).to.be.true;
        expect(eq(NaN, NaN)).to.be.true;
    });

    // Test different values
    it('should return false for different values', function() {
        const object = { 'a': 1 };
        const other = { 'a': 1 };
        expect(eq(object, other)).to.be.false;
        expect(eq('a', Object('a'))).to.be.false;
    });

    // Test undefined and null
    it('should return true for undefined and null', function() {
        expect(eq(undefined, undefined)).to.be.true;
        expect(eq(null, null)).to.be.true;
    });

    // Test mixed types
    it('should return false for mixed types', function() {
        expect(eq('5', 5)).to.be.false;
        expect(eq(0, false)).to.be.false;
    });
});

