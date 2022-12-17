const sumAll = function(num1,num2) {
    //check input
    if(num1 == NaN || num2 == NaN 
        || num1 <0 || num2<0
        || !Number.isInteger(num1)
        || !Number.isInteger(num2)
    )return('ERROR');
    // get bigger num
    let bigger = 0, smaller = 0;
    if(num1>num2){
        bigger = num1;
        smaller= num2;
    } else if(num2>num1){
        bigger = num2;
        smaller=num1;
    } else {
        //bigger = smaller = num1;
        return(num1);
    }
    //loop and add numbers
    let result = 0;
    for(i=smaller;i<=bigger;i++){
        result += i;
    }
    return(result);
};

// Do not edit below this line
module.exports = sumAll;
