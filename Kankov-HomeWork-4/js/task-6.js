const salaries = {
    "ivan": 500,
    "petya": 600,
    "serhiy":2000,
    "sasha": 2500
  }
function salaryCalculation(obj){
    let result = 0;
    for(let key in obj){
        result += obj[key]
    }
    return result
}

console.log(salaryCalculation(salaries))