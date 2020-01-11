const users = [
  {
    name: "John",
    salary: 300,
    age: 25
  },
  {
    name: "Steve",
    salary: 1100,
    age: 25
  },
  {
    name: "Steve",
    salary: 2000,
    age: 25
  },
  {
    name: "Steve",
    salary: 600,
    age: 25
  }
]

function doSalaryChek(arr){
    for(let obj of arr){      
        for(let key in obj){
            if(obj.salary >= 1000){
                obj.isRich = true
            } else {
                obj.isRich = false
            }
        }
    }
    return arr
}

console.log(doSalaryChek(users))