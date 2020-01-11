const string = "border-left-color";

function doStr(str){
    let newStr = str.split("-").join("")
    return newStr
}

console.log(doStr(string))