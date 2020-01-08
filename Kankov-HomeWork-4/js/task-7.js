const salaries = {
    "ivan": 500,
    "petya": 600,
    "serhiy":2000,
    "sasha": 2500
  }
function bigestSalaryCheck(obj){
    let values = Object.values(obj)
    for(let keys in obj){
        if( obj[keys] >= Math.max.apply(null, values)){
           return keys
        }
    }
}

console.log(bigestSalaryCheck(salaries))