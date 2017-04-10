console.log('test');

// What is a variable?
var ourFirstVar = prompt('What should we store in our first var?');

console.log('ourFirstVar =', ourFirstVar);

// Why?
// reuse - shorter
// changing

// Data Types
console.log(typeof 37 === 'number');
console.log(typeof 3.14 === 'number');
console.log(typeof Math.PI === 'number');
console.log(typeof NaN === 'number');

console.log(typeof 'a string' === 'string');
console.log(typeof '' === 'string');
console.log(typeof (typeof 1) === 'string');
console.log(typeof String(017834) === 'string');
console.log(String(017834));

// booleans
// true false

console.log('is this a boolean?', 3 + 3 === 6);
// true

//objects
var ourObject = {
  key: 'values' // property
}
console.log(typeof ourObject);


var ourArray = ['thing1', 'thing2'];
console.log('ourArray =', typeof ourArray);

var someVarIDidDeclare;

// Undefined?
console.log('someVarIDidDeclare = ', typeof someVarIDidDeclare);

console.log(ourObject.key);

// Built - Ins
// parseFloat
console.log('parsed float:', parseFloat("98234.3423"));
console.log('parsed int:', parseInt("98234.3423"));
console.log(Math.round(87.9));

var ourString = 1234;
console.log(ourString.toString());

ourString = "HELLO WORLD";
console.log(ourString.charAt(7));
console.log(ourString.length);
console.log(ourString.substring(0,5));

var abcString = "a b c e f g";
console.log(abcString.split("b"));
// splice?

var ourArray = ['banana', 'kiwi', 'grape'];
console.log('ourArray length =', ourArray.length);

// PUSH
ourArray.push('orange');
console.log(ourArray);

//POP
var thingWePopped = ourArray.pop(1);
console.log(thingWePopped);
console.log(ourArray);

// UNSHIFT SHIFT?
