const cart = { 
    "Monopoly": 11.99,
    "Secret Hitler": 35.99,
    "Bananagrams": 13.99
}

const cart2 = {
    "Shampoo": 5.99,
    "Rubber Ducks": 15.99 
}
const cart3 = {
    "Flatscreen TV": 399.99 
}

function doFreeShipingCheck(obj){
    let sumOfCart = 0;
    for(let key in obj){
        sumOfCart += obj[key]
    }
    if(sumOfCart > 50){
        return true
    } else {
        return false
    }
}

console.log(doFreeShipingCheck(cart3))