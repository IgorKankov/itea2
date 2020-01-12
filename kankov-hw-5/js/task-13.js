const array = [1, 2, 3, 4]

function doMirrorArr(arr){
    const reversedArrExclLast = arr.slice(0, arr.length - 1).reverse();
    
    return arr.concat(reversedArrExclLast)
}

console.log(doMirrorArr(array))