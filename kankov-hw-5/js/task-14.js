const nameArr = ["Ryan", "Kieran", "Jason", "Matt"];

function doSearch(arr){
    let nameList = []
    for(let el of arr){
        if(el.length === 4){            
          nameList.push(el)
        }
    }
    return nameList
}

console.log(doSearch(nameArr))