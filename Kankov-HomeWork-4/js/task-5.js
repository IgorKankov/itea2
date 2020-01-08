function objectCheck(obj){
    let keyLength = Object.keys(obj).length
    if(keyLength <= 0){
        return true
    } else {
        return false
    }
}

const emptyObj = {};
//const cat = {
//    name: "Kitty",
//    legs: 4,
//    eyesColor: "Green"
//}

console.log(objectCheck(emptyObjs))
