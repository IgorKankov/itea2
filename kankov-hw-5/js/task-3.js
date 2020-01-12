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
        if(arr[i].age > 18){
             newArr.push(arr[i]);
        }
    }
    return newArr
}

console.log(doAgeCheck(objArr))