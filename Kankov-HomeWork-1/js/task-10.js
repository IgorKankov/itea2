const monthNumber = +prompt("Enter month number:");
if (monthNumber <= 2 || monthNumber === 12) {
    alert("winter")
} else if (monthNumber <= 5){
    alert("spring")
} else if (monthNumber <= 8){
    alert("Summer")
} else if(monthNumber <= 11){
    alert("Autumn")
} else if(monthNumber > 12) {
    alert("Not month")
}