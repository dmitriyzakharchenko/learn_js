function easyCalc(){
    let result = 0;
    return{
        add: (value) => {
            result += value;
        },
        sub: (value) => {
            result -= value;
        },
        multi: (value) => {
            result *= value;
        },
        div: (value) => {
            result /= value;
        },
        showResult: () => {
            return result;
        },
        clearResult: () => {
            return result = 0;
        }
    }
}
var calc =  easyCalc();
var calc1 = easyCalc();
var calc2 = easyCalc();
var calc3 = easyCalc();
console.log(calc.add(10));
console.log(calc.showResult());
console.log(calc.clearResult());
console.log(calc.sub(2));
console.log(calc.showResult());
console.log(calc.multi(2));
console.log(calc.showResult());
console.log(calc.div(4));
console.log(calc.showResult());

