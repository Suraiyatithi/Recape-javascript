// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
function secondsmallest(arr){
    if(arr.length < 2){
        return "must need two elemnt";

    }
    arr.sort((a,b)=>a-b);
    return arr[1];
}
const array=[9,3,2,5,4,1];
const result=secondsmallest(array);
console.log(result);