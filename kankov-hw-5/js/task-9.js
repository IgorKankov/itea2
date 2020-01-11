let numArr = [2, 5, 9, 6];

function deletEl(arr, entEl){
    for(let elem of arr){
        if(elem === entEl){
            arr.splice(arr.indexOf(elem),1)
        }
    }
    return arr
}

console.log(deletEl(numArr, 9))