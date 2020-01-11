const array = [2, 5, 9, 6];

function doElemCheck(arr, el){
    for(let val of arr){ 
        if(val === el){
             return true
        } 
    }
}

console.log(doElemCheck(array, 9))