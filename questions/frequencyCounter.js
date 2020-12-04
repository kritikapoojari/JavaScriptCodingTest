/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/
const vowels = ["a", "e", "i", "o", "u"];
const frequencyCounter = (str) => {
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
};

console.log("The number of vowels are:", frequencyCounter("Raw Engineering"));

const vowelCounter = (str) => {
    var strVowels = "";
    var i;
    for (i in str) {
        if (
            str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u"
        ) {
            strVowels += str.charAt(i);
        }
    }
    i = 0;
    for (i in strVowels) {
        console.log("The vowels are:", strVowels.charAt(i));
    }
};
console.log(vowelCounter("Raw Engineering"));

module.exports = frequencyCounter;