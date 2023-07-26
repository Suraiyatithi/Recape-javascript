// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function passwordgenerate (length){
    const uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
  const numberChar = '0123456789';
  const specialChar = '!@#$%^&*()-_=+[]{}|;:,.<>?';
const allchar =uppercaseChar+lowercaseChar+numberChar+specialChar;
let password =0;
for( let i=0;i<length;i++){
    const randompass= Math.floor(Math.random()*allchar.length);
    password +=allchar[randompass]
}
return password
}
const passwardlength= 12;
const result=passwordgenerate(passwardlength);
console.log(result);