const sizes = {
    width: 4,
    length: 2, 
    height: 2 
}

function calcVolume(obj){
    result = 1;
    for(let key in obj){
        result *= obj[key]
    }
    return result
}

console.log(calcVolume(sizes))