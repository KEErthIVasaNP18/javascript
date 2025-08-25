const myobj = { name: "keerthi" }
console.log(myobj);
console.log(myobj.name);

const anotherobj = {
    subscriber: true,
    num: 10000,
    content: {
        earn: "JS",
        grow: "Stocks"
    },
    subdiv:["one","two","three"],

    action: function act(){
        return `${this.content.earn}`
    }

}
console.log(anotherobj);
console.log(anotherobj.action());

console.log(anotherobj.subdiv);
console.log(anotherobj.action());
console.log(anotherobj["subdiv"]);




const vechicle= {
    door:2,
    engine: function (){
        return "Vroom!!!";
    }
}

console.log(vechicle.engine());

const car= Object.create(vechicle)
car.wheels=4

car.engine= function(){
    return "duuurrrr !!!"
}
console.log(car.engine());

const tesla = Object.create(car)
tesla.engine = function(){
    return "WOOSHHHHH......"
}
console.log(tesla.engine());



