const object = {
    a: 44, 
    b: 45, 
    c: 46 
}

function doKeyCheck(obj){
    const keys = Object.keys(obj)
    for(let key in obj){
        if(keys === key){
            return true
        } else {
            return false
        }
    }
}
console.log(doKeyCheck(object))

