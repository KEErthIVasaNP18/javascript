
class pizza {
    constructor(sizepizza) {
        this._size = sizepizza;
        this._crust = "original";
    }
    getCrust() {
        return this.crust
    }
    setCrust(crustPizza) {
        this.crust = crustPizza
    }
}

class specialPizza extends pizza{
    constructor(sizepizza){
          super(sizepizza);
          this.type = "Margarita"
    }
    slice(){
        console.log(`our ${this.type} ${this.size} ${this.crust} pizza has 8 slices`);
    }
}

const mySpecPizz = new specialPizza("Medium")
mySpecPizz.slice()