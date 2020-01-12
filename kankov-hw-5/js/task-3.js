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
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr.age < 18){

        }
    }
    return newArr
}

console.log(doAgeCheck(objArr))