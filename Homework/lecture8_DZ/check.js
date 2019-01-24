function copy(a) {
    return a;
}

var t1 = "qweqwe";
var t2 = 123;
var t3 = {};
var t4 = {a: "qweqwe"};
var t5 = {a: {a:"werwerwr"}};
var t5 = ["qweqwe"];
var t6 = [{}];
var t7 = [{a: {}}];
var t8 = {a: [123, 'qwe', {a:{}}]};


console.log("t1 " + (check(copy(t1), t1) ? "success" : "fail"));
console.log("t2 " + (check(copy(t2), t2) ? "success" : "fail"));
console.log("t3 " + (check(copy(t3), t3) ? "success" : "fail"));
console.log("t4 " + (check(copy(t4), t4) ? "success" : "fail"));
console.log("t5 " + (check(copy(t5), t5) ? "success" : "fail"));
console.log("t6 " + (check(copy(t6), t6) ? "success" : "fail"));
console.log("t7 " + (check(copy(t7), t7) ? "success" : "fail"));
console.log("t8 " + (check(copy(t8), t8) ? "success" : "fail"));


function check(a, b) {
    if (typeof a != typeof b) {
        return false;
    } else {
        if (typeof a != 'object') {
            return a == b;
        }
    }
}
