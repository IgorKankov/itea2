const cityFacts = {
     name: "Paris",
     population: "2,140,526",
     continent: "Europe"
   }
function doString(obj){
    const values = Object.values(obj);
    const str = `${values[0]} has a population ${values[1]} and is situated in ${values[2]}`;
    return str
}

console.log(doString(cityFacts))