/* var arr = ['a', 'b'];
function copy(arr) {
    var res = [];
    arr.forEach((el, i) => {
        res[i] = Array.isArray(el) ? copy(el) : deepObjectCopy(el);
    });
}*/
function copyObject(obj) {
    let copy = {};
    for(let i in obj) {
        if(typeof(obj[i])=="object" && obj[i] != null)
            copy[i] = copyObject(obj[i]);
        else
            copy[i] = obj[i];
    }
    return copy;
}
const arrayLvl = {
  deepCopy: copyObject
};
let number = [1, 2, [3, [4],[5]]];
let newArray = arrayLvl.deepCopy(number);
number[2][2] = 55;
newArray
number