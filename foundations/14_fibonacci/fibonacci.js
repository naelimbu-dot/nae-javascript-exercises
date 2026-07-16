const fibonacci = function(nth) {
    if (nth === 0 || nth === "0") {
        return 0
    } 
    if (nth < 0) {
        return "OOPS"
    }
    let prev = 0
    let num = 1
    let temp = 0
    for (let i = 1; i < nth; i++) {
        temp = num
        num += prev
        prev = temp
    }
    return num
};

// Do not edit below this line
module.exports = fibonacci;
