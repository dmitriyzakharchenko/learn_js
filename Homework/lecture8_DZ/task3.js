function subStringCount(string, subString) {
    let count = 0;
    while (string.indexOf(subString) != -1) {
        count++;
        string = string.slice(string.indexOf(subString) + subString.length);
    }
    return count;
}
function sortMe(array, subString) {
    return array.sort((a1, b1) => subStringCount(b1, subString) - subStringCount(a1, subString));
}
console.log( sortMe(['world', 'hello'], 'l'));