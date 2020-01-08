//const men = {
//    name: "John",
//    surname: "Doe",
//    age: 25,
//    isMarried: true,
//    car: "BMW",
//    portfolio_photos: 3
//}
//
//function doPhotosCheck(obj){
//    const myObj = Object.assign({}, obj );
//    if(obj.portfolio_photos >= 1){
//        for(let i = 0; i < obj.portfolio_photos; i++){
//        myObj['photo' + i] = "image" + i
//        }
//    }
//    return myObj
//}
//
//console.log(doPhotosCheck(men));

//const salaryArr = [100, 200, 300, 400, 500]
//
//function increaseSalary(arr){
//    for(let i = 0; i < salaryArr.length; i++){
//        arr[i] += 50
//    }
//    return arr
//}
//
//console.log(increaseSalary(salaryArr))

//const salaryArr = [100, 200, 300, 400, 500]
//
//function doSalaryList(arr){
//    let salaryList = {}
//    for(let i = 0; i < arr.length; i++){
//        salaryList["user" + i] = arr[i]
//    }
//    return salaryList
//}
//
//console.log(doSalaryList(salaryArr))

//const str1 = "23%5"
//
//function doCalculator(str){
//    let operand = ""
//    for(let i = 0; i < str.length - 1; i++){
//       if(str[i] !== +str[i]){
//           operand = str[i]
//       }
//    }
//    const strOfNums = str.split(operand)
//    let sum = 0
//    switch(operand){
//        case "+":
//            sum += +strOfNums[0] + +strOfNums[1];
//            break;
//        case "-":
//            sum += +strOfNums[0] - +strOfNums[1];
//            break;
//        case "*":
//            sum += +strOfNums[0] * +strOfNums[1];
//            break;
//        case "/":
//            sum += +strOfNums[0] / +strOfNums[1];
//            break;
//        case "%":
//            sum += +strOfNums[0] % +strOfNums[1];
//            break;
//        default:
//            break;
//    }
//    
//    return sum
//}
//
//console.log(doCalculator(str1))