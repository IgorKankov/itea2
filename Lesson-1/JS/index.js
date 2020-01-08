let logIn = prompt("Enter your login");
if (logIn === "Admin"){
    let password = prompt("Enter your password");
    if (password === "I'm boss"){
        alert("Hello boss")
    } else if (password === null || password === " "){
        alert ("Canceled")
    } else {
        alert ("Not correct password")
    }
} else if (logIn === null || logIn === " "){
    alert("Canceled")
} else {
    alert ("I don't know you")
}