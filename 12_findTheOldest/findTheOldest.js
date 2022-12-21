const findTheOldest = function(people) {
    return people.reduce( (oldestAuthor, currentAutor) => {
        //console.log(oldestAuthor);
        (currentAutor.yearOfDeath) 
            ? currentAutor.yearOfDeath 
            : currentAutor.yearOfDeath = new Date().getFullYear() ;
        return ((oldestAuthor.yearOfDeath-oldestAuthor.yearOfBirth) > 
                (currentAutor.yearOfDeath-currentAutor.yearOfBirth))
                    ? oldestAuthor 
                    : currentAutor
    },{})
};

// Do not edit below this line
module.exports = findTheOldest;
