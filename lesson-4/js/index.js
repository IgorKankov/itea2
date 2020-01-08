//function func(a, b){
//   return a ** b
//}
//
//console.log(func(3, 3))

//function factorial(num){
//    let result = 1 ;
//    for(let i = 1; i <= num; i++){
//      result *= i
//    }
//    return result
//}
//console.log(factorial(0))

//let user2 = {};
//user2.name = "Vasya";
//user2.age = 22;
//user2.isMaried = true;
//console.log(user2)

//let obj = {};
//obj.username = "ivan1994"
//
//function func(myObj){
//    return `www.facebook.com/` + `${myObj.username}`
//}
//
//console.log(func(obj))

//let obj = {
//    name: "Sasha",
//    yearOfBirth: 1996,
//    "like cooking": true,
//}
//
//function func(myObj){
//    myObj.userName = `${myObj.name}` + `${myObj.yearOfBirth}`
//    if(myObj["like cooking"] === true){
//        delete myObj["like cooking"]
//    } 
//    return myObj
//}
//
//console.log(func(obj))

//let user = {
//    name: "John",
//    surname: "Doe",
//    city: "Kiyv"
//}
//
//function func(myObj){
//    if(user.city){
//        myObj.country = "Ukraine"
//    } else {
//        myObj.city = null;
//        myObj.country = null
//    }
//    return myObj
//}
//console.log(func(user))

//function createFewObj(numOfObj){
//    let user = {};
//    for(let i = 0; i<= numOfObj; i++){
//        user[i] = {
//            name[i]: "name",
//            surname[i]: "surname"
//        }
//    }
//    return obj
//}
//console.log(createFewObj(5))

//const obj ={
//    name: "name",
//    surname: "surname",
//}
//for(let key in obj ){
//    console.log("key:"; key)
//}

// метод Object.assign, копирует значения объекта

let user = {
    name: "John",
    surname: "Snow",
    say: "let it snow"
}
