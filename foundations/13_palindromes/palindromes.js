const palindromes = function (text) {
    const dictionary = "abcdefghijklmnopqrstuvwxyz1234567890"
    let newString = text
        .toLowerCase()
        .split("")
        .filter((letter) => dictionary.includes(letter))
        .join("")
    
    const reversedString = newString.split('').reverse().join('')
    return newString === reversedString;
}; 


// Do not edit below this line
module.exports = palindromes;
