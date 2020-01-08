const obj1 = {
    name: "John",
    salary: 500,
    bonus: 50
  }

function bonusMultiplication(obj){
    if(obj1.salary < 600){
        obj.bonus = obj.bonus * 2
    }
    return obj
}
console.log(bonusMultiplication(obj1))
