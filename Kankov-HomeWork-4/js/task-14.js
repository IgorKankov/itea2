 const guestList = {
     Randy: "Germany",
     Karla: "France",
     Wendy: "Japan",
     Norman: "England",
     Sam: "Argentina"
 }
 
 function greeting(obj){
     let str = ""
     for(let key in obj){
         str = `Hi! I'm ${key}, and I'm from ${obj[key]}.`
         if(!key){
             str = "Hi! I'm a guest."
         }
     }
     return str
 }
console.log(greeting(guestList))