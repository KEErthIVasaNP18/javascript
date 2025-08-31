const myObj = {
    name:"Keerthi",
    content: ["Earn","Grow","Give"],
    sub: function(){
        console.log("Thanks for giving bell icon");
    }
}
// console.log(myObj);
// console.log(myObj.name);
// myObj.sub()

const sendJson = JSON.stringify(myObj)
console.log(sendJson);
