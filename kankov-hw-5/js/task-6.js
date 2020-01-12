const dateArr = new String(Date()).split(" ");

const users = [
  {
    name: "user1",
    age: 25
  },
  {
    name: "user2",
    age: 15
  },
  {
    name: "user3",
    age: 33
  },
  {
    name: "user4",
    age: 42
  },
  {
    name: "user5",
    age: 60
  }
]

function doBirthday(userInfo){
    for(let obj of userInfo){
           obj.yearOfBirth = dateArr[3] - obj.age
         }
    return userInfo
}

console.log(doBirthday(users))
