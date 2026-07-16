const getTheTitles = function(arr) {
    const titles = arr.reduce((lst, book) => {
        lst.push(book.title)
        return lst
    },[])
    return titles
    // return arr.map(book => book.title)
};

// Do not edit below this line
module.exports = getTheTitles;
