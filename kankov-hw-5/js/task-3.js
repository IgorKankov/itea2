const objArr = [
  {
    name: "name1",
    age: 10
  },
  {
    name: "name2",
    age: 15
  },
  {
    name: "name3",
    age: 30
  },
  {
    name: "name4",
    age: 20
  }
]

function doAgeCheck(arr){
    for(let obj of arr){
            for(let key in obj){
                if(obj.age < 18){
                arr.splice(arr.indexOf(obj), 1)
            }
        }
        return arr
    }
}

console.log(doAgeCheck(objArr))