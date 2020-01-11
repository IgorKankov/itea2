const array = [NaN, 0, 15, false, -22, '',undefined, 47, null];

function deleteFalsy(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0 || arr[i] == null ){
            delete arr[i]
        }
    }
    return arr
}

console.log(deleteFalsy(array))