const reverseString = function(inpString = '') {
    let res = '';
    for(i=inpString.length-1;i>=0;i--){
        res += inpString.charAt(i);
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
