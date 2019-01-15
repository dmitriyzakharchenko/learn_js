function calck() {
    var a = {};
    var result = 0;

    a.add = (p) => {
        result += p;
        return a;
    };
    a.sub = (c) => {
        result -= c;
        return a;
    };
    a.mul = (g) => {
        result *= g;
        return a;
    };
    a.div = (n) => {
        result /= n;
        return a;
    };
    a.clear = () => {
        result = 0;
        return a;
    };
    a.showResult = () => result;
    return a;
}

var res = calck()
    .add(6)
    .clear()
    .sub(2)
    .mul(4)
    .div(2)
    .showResult();
console.log(res);
