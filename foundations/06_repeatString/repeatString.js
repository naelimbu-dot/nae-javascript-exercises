const repeatString = function(text, num) {
    let myString = ""
    if (num < 0) {
        return "ERROR"
    } else {
        for (let i = 0; i < num; i++) {
            myString += text
        }
    }
    return myString
};

// Do not edit below this line
module.exports = repeatString;
