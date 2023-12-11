import { expect } from 'chai';
import words from '../src/words.js';

describe('words()', function() {
    // Test default behavior with no pattern
    it('should split a string into words using default pattern', function() {
        const result = words('fred, barney, & pebbles');
        expect(result).to.eql(['fred', 'barney', 'pebbles']);
    });

    // Test custom pattern
    it('should split a string into words using custom pattern', function() {
        const result = words('fred, barney, & pebbles', /[^, ]+/g);
        expect(result).to.eql(['fred', 'barney', '&', 'pebbles']);
    });

    // Test string with Unicode words
    it('should handle strings with Unicode words', function() {
        const result = words('résumé café ölala');
        expect(result).to.eql(['résumé', 'café', 'ölala']);
    });

    // Test empty string
    it('should return an empty array for an empty string', function() {
        const result = words('');
        expect(result).to.eql([]);
    });

    // Test string with no words
    it('should return an empty array for a string with no words', function() {
        const result = words('   ');
        expect(result).to.eql([]);
    });

    // Test undefined pattern
    it('should split a string into words using default pattern when pattern is undefined', function() {
        const result = words('hello world', undefined);
        expect(result).to.eql(['hello', 'world']);
    });

    // Test pattern that does not match
    it('should return an empty array for a pattern that does not match', function() {
        const result = words('hello world', /notmatching/);
        expect(result).to.eql([]);
    });
});

