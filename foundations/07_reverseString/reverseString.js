const reverseString = function(text) {
    arr = text.split("")
    let length = text.length
    let newArr = []
    for (let i = length - 1; i > -1; i--) {
        newArr.push(arr[i])
    }
    return newArr.join("")
};

// Do not edit below this line
module.exports = reverseString;
