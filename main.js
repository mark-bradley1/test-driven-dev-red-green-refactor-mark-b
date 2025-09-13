
function countVowels(str) {
    if (typeof str !== 'string') return null;
    const vowels = "aeiou";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

module.exports = countVowels;