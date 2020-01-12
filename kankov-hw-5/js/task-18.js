const strArr = ["clever", "meek", "hurried", "nice"];

function doNewStrArr(arr, newEl){
    for(let str of arr){
        let newLine = `${String(str)}` + `${newEl}`
        arr.push(newLine)
    }
    return arr
}

console.log(doNewStrArr(strArr, "ly"))