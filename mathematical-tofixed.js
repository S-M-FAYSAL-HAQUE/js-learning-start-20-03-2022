var eggPrice = 10.4566;
var onionPrice = 65.7679;
var totalPrice = eggPrice + onionPrice;

// totalPrice = totalPrice.toFixed(4);
// console.log(totalPrice);

var mainAmount1 = totalPrice.toFixed(3);
console.log(mainAmount1);

var mainAmount2 = totalPrice.toFixed(3);
mainAmount2 = parseFloat(mainAmount2)
console.log(mainAmount2);

totalPrice = parseFloat(totalPrice.toFixed(2));
console.log(totalPrice);

console.log(parseFloat(totalPrice.toFixed(1)));


