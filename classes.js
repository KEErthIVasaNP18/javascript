// const cake = {
//     size: "medium",
//     crust : "Original",
//     bake: function(){
//         return console.log(`Baking a ${this.size} ${this.crust} crust pizza`);
//     }
// }
// cake.bake()

class pizza {
    constructor(typepizza, sizepizza, crustPizza) {
        this.type = typepizza
        this.size = sizepizza;
        this.crust = crustPizza;
        this.toppings = []
    }

    gettoppings() {
        return this.toppings
    }
    settoppings(toppingsPizza) {
        this.toppings.push(toppingsPizza)
    }

    bake() {
        return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza with ${this.toppings}`);
    }
}

// const anotherpizza = new pizza("margaritta", "large", "thin")
// anotherpizza.settoppings("sauasuage")  
// anotherpizza.settoppings("Egg")  
// anotherpizza.bake()
// console.log(anotherpizza.toppings);

// const anPizza = new pizza("pepperonni","small","thick")
// anPizza.bake()


