const sumAll = function(start, end) {
    let sum = 0
    if (typeof(start) !== "number" || 
    typeof(end) !== "number" || 
    start < 0 || 
    end < 0 || 
    start !== Math.floor(start) || 
    end !== Math.floor(end)) {
        return "ERROR"

    } else if (end > start) {
        for (let i = start; i <= end; i++) {
        sum += i
    } 
    } else {
        for (let i = end; i <= start; i++) {
        sum += i
    } 
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
