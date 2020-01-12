const numArr = [2, 3, 1, 0];

function doMultiplyByLength(arr){
    let result = [];
    const length = arr.length;
        for(let num of arr){
        result.push(num *= length)
    }
    return result
}

console.log(doMultiplyByLength(numArr))