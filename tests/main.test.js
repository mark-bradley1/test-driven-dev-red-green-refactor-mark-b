const countVowels = require('../main.js');

describe("countVowels", () => {
    test("should return the number of vowels in a string", () => {
        const result = countVowels("hello, world");
        expect(result).toBe(3);
    });

    test("should return null if the input value is not a string", () => {
        const result = countVowels(12345);
        expect(result).toBe(null);
    });

    test("should return 0 if there are no vowels in the string", () => {
        const result = countVowels("qwrtypsdfghjklzxcvbnm");
        expect(result).toBe(0);
    })
})