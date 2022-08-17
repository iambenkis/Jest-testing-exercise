class calculator {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    add = () => {
        return this.a + this.b;
    }
    subtract = () => {
        return this.a-this.b;//this.a>this.b? this.a-this.b: this.b-this.a;
    }
    
    multiply = () => {
        return this.a * this.b;
    }
    
    divide = () => {
        return this.a!==0 && this.b!==0 ? this.a/this.b:'E';
    }
}

    

module.exports = calculator;
