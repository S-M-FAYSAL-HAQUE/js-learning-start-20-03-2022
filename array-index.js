// number array
var numbers = [45, 34, 89, 90, 10];
var index1 = numbers.indexOf(90);
var index2 = numbers.indexOf(152); // indexOf dile jodi kono array ar majhe man na thake tobe "-1" answer hoy.
var index3 = numbers[9]; // index ar man jodi array ar majhe na thake tobe "undefined" ase.
var index4 = numbers[2];
console.log(index1);
console.log(index2); 
console.log(index3);
console.log(index4);

console.log(numbers);
numbers[1] = 75; // er karone index 1 er man poriborton hoye 75 hobe 
numbers[4] = 55; // er karone index 4 er man poriborton hoye 55 hobe 
console.log(numbers);

// string array
var name = ['faysal', 'fahad', 'jony', 'rakib', 'noyon'];
var secondIndex1 = name[3];
var otherIndex2 = name[6]; // index ar man jodi array ar majhe na thake tobe "undefined" ase.
console.log(secondIndex1);
console.log(otherIndex2);

