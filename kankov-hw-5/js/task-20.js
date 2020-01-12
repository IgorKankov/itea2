const numbers = [53, 182, 435, 591, 637];


function findNum(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        
        if(arr[i] % 13 === 0){
            newArr.push(arr.splice(i, i))
        }
    }
    return newArr.join(", ")
}

console.log(findNum(numbers))