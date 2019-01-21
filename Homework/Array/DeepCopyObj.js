var a = {c:3};
var b = {};
b.c = a.c;

var arr = ['a', 'b'];
function copy(arr) {
    var res = [];
    arr.forEach((el, i) => {
        res[i] = Array.isArray(el) ? copy(el) : deepObjectCopy(el);// если true то выполнится copy(el) ,если false deepObjectCopy(el)
    });
}

function deepObjectCopy(obj) {
    //copy
    return newObj;
}

