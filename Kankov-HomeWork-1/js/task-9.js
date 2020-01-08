const aNum = 10;
const bNum = 2;
const operatorEnt = prompt("Enter operator");
if (operatorEnt === "*"){
    console.log(aNum * bNum)
} else if (operatorEnt === "-"){
    console.log(aNum - bNum)
} else if (operatorEnt === "+"){
    console.log(aNum + bNum)
} else if (operatorEnt === "/"){
    console.log(aNum / bNum)
} else if (operatorEnt === "%"){
    console.log(aNum % bNum)
} else if (operatorEnt === "**"){
    console.log(aNum ** bNum)
} else if(operatorEnt === null) {
    console.log("no choosed operator")
}