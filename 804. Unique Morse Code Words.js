/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCodes = [
        ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", 
        "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", 
        "..-", "...-", ".--", "-..-", "-.--", "--.."
    ];

    const transformations = {};

    for (const word of words) {
        let morseWord = "";
        for (const char of word) {
            morseWord += morseCodes[char.charCodeAt(0) - 'a'.charCodeAt(0)];
            
        }
        transformations[morseWord] = true;
    }

    return Object.keys(transformations).length;
};

// Example usage:
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])); // Output: 2
console.log(uniqueMorseRepresentations(["a"])); // Output: 1
