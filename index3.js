//Task 3
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
        return this.b!==0 ?
                    this.a !==0?
                        this.a/this.b:0 
                :'E';
    }
}

    

module.exports = calculator;
