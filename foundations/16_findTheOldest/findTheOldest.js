const findTheOldest = function(arr) {
    const oldest = arr.sort((prev, next) => {
        if (typeof(prev.yearOfDeath) !== "number") {
            prev.yearOfDeath = new Date().getFullYear()
        } if (typeof(next.yearOfDeath) !== "number") {
            next.yearOfDeath = new Date().getFullYear()
        }
        return (next.yearOfDeath - next.yearOfBirth) - (prev.yearOfDeath - prev.yearOfBirth)
    })
    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
