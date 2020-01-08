const person = {
  name: "Aria",
  surname: "Stark",
  city : "Winterfell",
  isMarried: false,
}

function keyCount(obj){
    let keyLength = Object.keys(obj).length
    
    return keyLength
}

console.log(keyCount(person))