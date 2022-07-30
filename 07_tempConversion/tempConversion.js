const ftoc = function(temp) {
let final = (temp -32) * 5/9;
return Math.round(final * 10) / 10
};

const ctof = function(temp) {
let final = (temp * 1.8) + 32;
return Math.round(final * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
