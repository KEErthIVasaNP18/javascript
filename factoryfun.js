// function Factoryfun(sizepizza){
//     const crust = "original";
//     const size = sizepizza

//     return{
//         bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)  
//     };
// }
// const myPzza = Factoryfun("large")
// myPzza.bake()
// console.log(myPzza.crust);


class pizza {
    crust = "original"
    #sauce = "Tomato"
    constructor(sizepizza) {
        this.size = sizepizza;
        // this._crust = "original";
    }
    getCrust() {
        return this.crust
    }
    setCrust(crustPizza) {
        this.crust = crustPizza
    }
 

    bake(){
        return console.log(`Baking a ${this.size} ${this.crust} ${this.#sauce} crust pizza`);
        
    }
}
const NEWWWPizza = new pizza("small")
NEWWWPizza.bake()
// console.log(NEWWWPizza.getCrust());
//  console.log(NEWWWPizza.#sauce);
