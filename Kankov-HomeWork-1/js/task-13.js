const logIn = prompt("Enter your login");
if (logIn === "Admin"){
    let password = prompt("Enter your password");
    if (password === "password"){
        alert("Hi admin")
    } else if (password === null || password === ""){
        alert ("bye")
    } else {
        alert ("Not correct password")
    }
} else if (logIn === null || logIn === ""){
    alert("bye")
} else {
    alert ("I don't know you")
}