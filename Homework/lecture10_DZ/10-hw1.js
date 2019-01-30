class ingredientsProto {
    constructor () {
}
add(ingredient){
    this.items.push(ingredient);
}
getAll(){
    return this.items;
}
getByName(name){
    return this.items.find(function (item) {
        return item.name === name;
    })
}
}
class createIngredientsList {
    constructor (){
        let list = new ingredientsProto();
        list.items = [];
        return list;
    }
}
let myIngredients = new createIngredientsList();
myIngredients.add({name: 'tequila', price: 5});
myIngredients.add({name: 'vodka', price: 3});
console.log(myIngredients.getByName('tequila'));