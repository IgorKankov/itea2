let workers = {
    user1:{
      name: "sasha",
      surname: "ivanov",
      yearsInCompany: 5,
      salary: 1000
    },
    user2:{
      name: "pasha",
      surname: "stepanov",
      yearsInCompany: 2,
      salary: 600
    },
    user3:{
      name: "vasya",
      surname: "pupkin",
      yearsInCompany: 1,
      salary: 400
    },
    user4:{
      name: "petya",
      surname: "bamper",
      yearsInCompany: 15,
      salary: 3000
    }
  }
console.log(salaryIncrease(workers))
function salaryIncrease(obj){
    getSalary(obj);
    function getSalary(sal){
        for(let key in sal){
            if(typeof sal[key] === 'object'){ 
               getSalary(sal[key])
            } else {
                return +sal[key]
            }
        }  
    }
}

