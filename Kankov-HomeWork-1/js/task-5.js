const enterAnyNum = +prompt("Enter any number:")
if (enterAnyNum > 1){
    alert("Entered number bigger then 1")
} else if(enterAnyNum === 0){
    alert("Entered number 0")
} else {
   alert("Entered number lower then 1") 
}

const freeNum = +prompt("Enter free number:")
const numForCheck = freeNum % 2
if(numForCheck === 0){
    alert("Even number")
} else {
   alert("Odd number")
}