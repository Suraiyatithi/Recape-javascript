// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
function convertRoman(number){
    const romanNumber= {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
      };
      let result=0;
      for( let i=0; i<number.length;i++){
        const currentnumber=romanNumber[number[i]];
        const nextnumber=romanNumber[number[i+1]]
        if(nextnumber>currentnumber){
            result += nextnumber- currentnumber;
            i++;
        }
        else{
            result +=currentnumber;
        }

      }
      return result;
}
const input = 'IV';
const result=convertRoman(input);
console.log(result);