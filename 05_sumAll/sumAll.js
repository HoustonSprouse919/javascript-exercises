const sumAll = function(num1, num2) {
    let final =0;  //dumb dumb Houston kept "" around value which made it a string
    let first =0;
    let second = 0;
    if(typeof num1 === "string" || typeof num2 === "string"){ //use typeof to check if both are strings to prevent us from returning them
        final = "ERROR";
    } else {
    if (num1 > num2){  //all of these are just to get them in the right order to use in the for loop below
        first = num2;
        second = num1;
    } else if (num1 < num2 ){
        first = num1;
        second = num2;
    } else{
        first = num1;
        second = num2;
    }

    for(i = first; i < second + 1; i++){
        final += i;
    }
}
if (final > 0 ){
    return final
} else {
    return("ERROR")
} 

    
};

// Do not edit below this line
module.exports = sumAll;
