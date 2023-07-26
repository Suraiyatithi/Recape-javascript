// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
function calculator(num1,operator,num2){
    if(operator ==='+'){
        return num1 + num2;
    }
   else if(operator === '-'){
        return num1-num2
    }
   else if(operator ==='*'){
        return num1*num2
    }
   else if(operator ==='/'){
        if(num2 ===0){
            return "Error! can not devided by 0"
        }
        
            return num1 / num2;
        
    }
    else{
        return "Unkown operator"
    }
}
const number1= 10;
const number2= 5;
const operator= '/';
const result=calculator(number1,operator,number2);
console.log(result);