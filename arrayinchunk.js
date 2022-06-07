/**
 * Given an array [2, 4, 2, 5, 3, 6, 3] and a size n
 * Chunk the array into smaller size arrays such that no subarray is greater than size n
**/



const chunk = (arr, size) => {
    const chunked=[];
 
    
    let last=chunked[chunked.length-1];
    for(let elem of arr){
        if(!last || last.length===size){
            chunked.push([elem]);
        }
        else{
            last.push(elem);
        }
    }
    return chunked;
};


console.log(chunk([2, 4, 2, 5, 3, 6, 3], 3)); // [[2, 4, 2], [5, 3, 6], [3]]
console.log(chunk([2, 4, 2, 5, 3, 6], 3)); // [[2, 4, 2], [5, 3, 6]]
console.log(chunk([2, 4, 2, 5, 3, 6], 2)); // [[2, 4], [2, 5], [3, 6]]
console.log(chunk([2, 4, 2, 5, 3, 6, 3], 1)); // [[2], [4], [2], [5], [3], [6], [3]]
console.log(chunk([2, 4, 2, 5], 5)); // [[2, 4, 2, 5]]
console.log(chunk([2, 2], 3)); // [[2, 2]]




