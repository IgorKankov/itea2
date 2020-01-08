const numRange = {
    min: 1,
    max: 5
}

//function rangeCheck(num, range){
//    if(num > range.min && num < range.max){
//        return true
//    } else {
//        return false
//    }
//}
function rangeCheck(num, range){
    const value = Object.values(range);
    if(num > Math.min.apply(this, value) && num < Math.max.apply(this, value)){
        return true
    } else {
        return false
    }
}
console.log(rangeCheck(2, numRange))