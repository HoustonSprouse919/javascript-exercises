const removeFromArray = function (...args) {
    // first we take out the array which is the first item
    const array = args[0];
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    // and return that array
    return newArray;
  };

// Do not edit below this line
module.exports = removeFromArray;
