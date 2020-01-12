const numArr = [88, 232, 4, 9721, 555];

function doLengthCheck(arr, length){
    let newArr = []
    arr.forEach(function(el){
        const strEl = String(el).split("")
        if(strEl.length === length){
            newArr.push(strEl.join(""))
        }
    })
    return newArr
}

console.log(doLengthCheck(numArr, 4))