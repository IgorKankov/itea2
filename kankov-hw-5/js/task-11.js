
function doArray(num, mult){
    let newArr = [];

    for(i = 0; i < mult; i++){
        newArr.push(num * mult)
    }
    return newArr
}

console.log(doArray(0, 4))