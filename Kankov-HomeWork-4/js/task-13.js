const string = "abc";

function doObjFromStr(str){
    let letters = {}
    for(let i = 0; i <= str.length; i++){
         let eachLetter = str[i]
         letters[eachLetter] = eachLetter
    }
    return letters
}

console.log(doObjFromStr(string))