const removeFromArray = function(inputArray, ...toRemove) {
    //if (inputArray.isArray!=true) return(inputArray);
    let returnArray =[];
    let toPush = false;
    inputArray.forEach((item)=>{
        toPush = true;
        for(i=0;i<toRemove.length;i++){
            if(item === toRemove[i]){ 
                //remove only same type
                toPush = false;
            } else {
                //add to return array
            }
        }
        if(toPush == true)returnArray.push(item);
    });
    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
