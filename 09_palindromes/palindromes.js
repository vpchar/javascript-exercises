
const palindromes = string => {
    string = string.toUpperCase().replace(/[^A-Za-z]/g,'');
    //console.log(string);
    const len = string.length-1;
    for(i=0;i<string.length/2;i++){
        //loop from start, compare from end --
        if (string[i] !== string[len-i]) return false; //test failed
    }
    //else
    return true; //its palindrome
};

// Do not edit below this line
module.exports = palindromes;
