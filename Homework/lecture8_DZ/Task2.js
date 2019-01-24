function BiggerElements() {
    var words = ['iphone', 'universe', 'sunday', 'birthday', 'functions', 'base', "ice"];
    return function()
    {
        return words.filter(words => words.length > 5 );
    }
}
const bigWords = BiggerElements();

console.log(bigWords());