import { expect } from 'chai';
import add from '../src/add.js';

describe('add()', function() {
    // Test basic addition
    it('should return 10 when passed (6, 4)', function() {
        expect(add(6, 4)).to.equal(10);
    });

    // Test addition with negative numbers
    it('should return -6 when passed (-10, 4)', function() {
        expect(add(-10, 4)).to.equal(-6);
    });

    // Test addition with decimal numbers
    it('should return 15.5 when passed (10.5, 5)', function() {
        expect(add(10.5, 5)).to.equal(15.5);
    });

    // Test addition with zero
    it('should return 8 when passed (8, 0)', function() {
        expect(add(8, 0)).to.equal(8);
    });
});