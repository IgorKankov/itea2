const oldest = {
     Emma: 71,
     Jack: 45,
     Amy: 15,
     Ben: 29
}

 const oldest2 = {
     Max: 9,
     Josh: 13,
     Sam: 48,
     Anne: 33
   }


function doAgeCheck(obj){
    let ageVal = Object.values(obj)
    for(let key in obj){
        if(obj[key] >= Math.max.apply(this, ageVal)){
            return key
        }
    }
}

console.log(doAgeCheck(oldest2))