const array = [NaN, 0, 15, false, -22, '',undefined, 47, null];

function deleteFalsy(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(!+arr[i]){
           newArr.push(arr.splice(i, i))
        }
    }
    return newArr.join(", ")
}

console.log(deleteFalsy(array))