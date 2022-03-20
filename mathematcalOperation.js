// Division, Multiplication, Addition and Subtraction in js 

var eggPrice = 10;
var eggQuantity = 12;
var milkPrice = 65;
var totalPrice = eggPrice * eggQuantity + milkPrice;
var lostMilkPrice = eggPrice * eggQuantity + milkPrice - milkPrice;
var offerPrice = (eggPrice * eggQuantity + milkPrice - milkPrice) / 2;

console.log("Total Price:", totalPrice);
console.log("Lost Price:", lostMilkPrice);
console.log("Offer Price:", offerPrice);

// modulus in js
var firstPersonHave = 39;
var secondPersonHave = 7;
var remaining = firstPersonHave % secondPersonHave;
firstPersonHave %= secondPersonHave; // firstPersonHave = firstPersonHave % secondPersonHave;
console.log(firstPersonHave);
console.log(remaining);
