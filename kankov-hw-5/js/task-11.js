
function doArray(num, mult){
    let newArr = [];

    for(i = 0; i < mult; i++){
        newArr += num[i]
    }
    return newArr
}

console.log(doArray(1, 2))