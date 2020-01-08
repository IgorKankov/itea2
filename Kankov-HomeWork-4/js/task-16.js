function counter(str){
    let countAll = {};
    for(let i = 0; i <= str.length; i++){
        if(str[i] == +str[i]){
            countAll.digit = str[i].length
        } else {
            countAll.letter = str[i].length
        }
    }
    return countAll
}

const string = "H3ll0 Wor1d"

console.log(counter(string))