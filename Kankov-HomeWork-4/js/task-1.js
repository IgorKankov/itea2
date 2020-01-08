const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

function allProp(obj){
    let prop = Object.keys(obj)
    return prop.join(",")
}
console.log(allProp(student))