// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
function mostfrequent(arr){
    count={};
    for(let i=0; i<=arr.length;i++){
        const element= arr[i]
        count[element]=(count[element] || 0)+1;
    }
    let mostfrequentelement;
    let highestcount = 0;
    for(const element in count){
        if(count[element]>highestcount){
            mostfrequentelement= element;
            highestcount=count[element]
        }
    }
    return mostfrequentelement;
}


const input=  [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result=mostfrequent(input);
console.log(result);
