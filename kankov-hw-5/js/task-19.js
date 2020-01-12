const numArr = [5, 3, 15, 22, 4];

function doBiggerCheck(arr, checkNum){
    for(let num = 0; num < arr.length; num++){
        if(arr[num] >= checkNum){
            return true
        }
    }
    return false
}

console.log(doBiggerCheck(numArr, 15))