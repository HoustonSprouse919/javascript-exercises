const reverseString = function(string) {
    let text = "";
    for(i =string.length; i > -1; i--){
      let letter =  string.charAt(i);
      text += letter;
    }
    return text;
};

// Do not edit below this line
module.exports = reverseString;
