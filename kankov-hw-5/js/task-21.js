const someArr = [0, -32, "&@A", 64, "99", -128];

function deleteNan(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(Number(arr[i]) !== String(arr[i])){
            newArr.push(arr.splice(i, i))
        }
    }
    return arr
}

console.log(deleteNan(someArr))