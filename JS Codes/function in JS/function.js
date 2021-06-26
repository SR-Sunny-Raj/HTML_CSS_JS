// function
function greet(name) {
  console.log(name + ' is a good boy');
}
let name1 = 'Sunny';
let name2 = 'Raj';
let name3 = 'Bunny';
greet(name1);
greet(name2);
greet(name3);

console.log('\nDefault Argument function -:');
// Default Argument in a function
function greet1(name, greetText = ' good Morning') {
  console.log(name + greetText);
}
let greetText1 = ' is a good boy';
greet1(name1, greetText1);
greet1(name2, greetText1);
greet1(name3);

// Function returning value
console.log('\nFunction returning some value -:');
function sum(a, b, c) {
  let d = a + b + c; // d is a local variable
  return d;
}
let retVal = sum(1, 2, 3);
console.log('Sum is ' + retVal);
