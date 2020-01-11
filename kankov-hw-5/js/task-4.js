function sum(){ 
    let result = 0
    for(let num of arguments){
        result += num
    }
    return result
}


console.log(sum(10,20,30,40,50))