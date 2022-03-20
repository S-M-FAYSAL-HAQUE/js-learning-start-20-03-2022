// how to add two string:
var firstName = 'faysal';
var lastName = 'haque';
var fullName = firstName + lastName;
console.log(fullName);

// how to add two string with space:
var firstName = 'faysal';
var lastName = 'haque';
var fullName = firstName + ' ' + lastName; // here (' ')/ (" ") is a space between two string
console.log(fullName);

// integer number in string:
var price1 = '40';

// float number in string:
var price2 = '40.45'; 

// convert integer or float string number in integer or float number:
var price1 = '40';
var price2 = '40.45';
var firstPrice = parseInt(price1);
var secondPrice = parseFloat(price2);
var totalPrice1 = firstPrice + secondPrice;
var totalPrice2 = parseInt(firstPrice + secondPrice);
console.log("First Price:", firstPrice, "Second Price:", secondPrice);
console.log("Total Price1:", totalPrice1);
console.log("Total Price2:", totalPrice2);