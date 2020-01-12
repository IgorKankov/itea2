const numArr = [0.4356, 0.8795, 0.5435, -0.9999]

function getMin(arr){
    for(let num of arr){
        return Math.min.apply(this, arr)
    }
}

console.log(getMin(numArr))