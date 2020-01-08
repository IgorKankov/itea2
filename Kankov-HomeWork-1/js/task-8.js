const userName = prompt("Enter your name:");
if (userName === "Admin"){
    const age = +prompt("Enter your age:");
    if(age >= 20 ){
        const password = prompt("Enter password:");
        if (password === "password"){
                alert("Welcome")
            } else {
            alert("Enter correct password")
            } 
        } else {
    alert ("You are too young")
    }
} else {
    alert("I don't know you")
}