const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

let reveresedKeyValues = {};
function doReverse(obj){
    for(let key in obj){
      reveresedKeyValues[obj[key]] = key;
    }
    return reveresedKeyValues
}
doReverse(student)

console.log(reveresedKeyValues)
