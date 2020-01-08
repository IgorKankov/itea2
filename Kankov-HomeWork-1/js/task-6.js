const oneMoreNum = +prompt("Enter number one more time:");
if (oneMoreNum < 5){
    console.log("tiny")
} else if(oneMoreNum < 10) {
    console.log("small" )
} else if(oneMoreNum < 15){
    console.log("medium")
}else if(oneMoreNum < 20){
    console.log("large")
} else if(oneMoreNum >= 20){
    console.log("Huge")
}