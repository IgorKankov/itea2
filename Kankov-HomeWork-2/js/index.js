const str = "QwErTy";
let i = 0;
let result = "";
while (i < str.length) {
    if(str[i] === str[i].toUpperCase()){
            result += str[i].toLowerCase()
       } else {
            result += str[i].toUpperCase()
       }
    i++;
 }
 console.log(result)