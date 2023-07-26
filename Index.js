// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
function indexsum(arr,target){
    let leftindex=0;
    let rightindex=arr.length-1;
    while(leftindex< rightindex){
        const sum=arr[leftindex]+arr[rightindex];
        if(sum === target){
            return [leftindex,rightindex]
        }
        else if(sum < target){
            leftindex++;

        }
        else{
            rightindex--;
        }
    }
    return [];
}
 const arr= [1, 3, 6, 8, 11, 15];
 const target = 9;
 const result=indexsum(arr,target);
 console.log(result);