const numArr = [7, 9, 0, -2];

function getLastNums(arr, n = 1){
    return arr.slice(-n)
}

console.log(getLastNums(numArr))