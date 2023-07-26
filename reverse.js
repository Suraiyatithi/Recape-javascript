
// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method//

function reverseString (inputstring){
    let reversedString = [];
  for (let i = inputstring.length - 1; i >= 0; i--) {
    reversedString.push(inputstring[i]);
  }
   return reversedString.join('');


}
const inputStr = "Hello World"
const reversedStr = reverseString(inputStr);
console.log(reversedStr); 
