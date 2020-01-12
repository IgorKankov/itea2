const strArr = ["clever", "meek", "hurried", "nice"];

function doNewStrArr(arr, newEl){
    let newLine = []
    for(let str of arr){
         newLine.push(str + newEl)
    }
    return newLine
}

console.log(doNewStrArr(strArr, "ly"))