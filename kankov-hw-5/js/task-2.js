let socialNetwork = "www.facebook.com/userID/456";

function doNetworkChange(str){
    let newSocialNetwork = str.split(".");
    let deleted = newSocialNetwork.splice(1,1,"twitter");
    return newSocialNetwork.join(".")
   
}

console.log(doNetworkChange(socialNetwork))