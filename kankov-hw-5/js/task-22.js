const digitArr = [10, 4, 1, 4, -10, -50, 32, 21];

function getDif(arr){
    const max = Math.max.apply(this, arr);
    const min = Math.min.apply(this, arr);
    return max - min
}

console.log(getDif(digitArr))