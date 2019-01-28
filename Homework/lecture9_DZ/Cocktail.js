function Ingredient(name,price){
    this.name = name;
    this.price = price;
}
function Cocktail(name,isAlcohol,type){
    this.name = name;
    this.ingredients = [];
    this.alcohol = isAlcohol;
    this.type = type;
}

Cocktail.prototype.addIngredients = function (ingredient) {
    this.ingredients = this.ingredients.concat(ingredient);
};
Cocktail.prototype.isAlcohol = function () {
    return this.alcohol;
};

Cocktail.prototype.getPrice = function() {
    return  this.ingredients.reduce((acc, ingredient) => acc += ingredient.price, 0)
};
//Обьект Cocktails
function Cocktails(){
    this.cocktails = [];
}
Cocktails.prototype.addCocktail = function (cocktail) {
    this.cocktails.push(cocktail);
};
Cocktails.prototype.getAlcoholCocktails = function() {
    return this.cocktails.filter(coc => coc.isAlcohol());
}

Cocktails.prototype.removeByName = function (name) {
    return this.cocktails = this.cocktails.filter(cocktail => cocktail.name !== name);
};
var cocktail = new Cocktail('Daiquiri', true, 'alcohol');
var cocktails = new Cocktails();
cocktail.addIngredients([new Ingredient('white_rum',4), new Ingredient('lime_juice', 2), new Ingredient('simple_syrup', 2)]);
cocktails.addCocktail(cocktail);
cocktails.addCocktail(new Cocktail('Margarita', true, 'alcohol'));
cocktails.addCocktail(new Cocktail('Tropic', false, 'no alcohol'));
cocktails.removeByName("Tropic");
console.log(cocktail.getPrice());
console.log(cocktails.getAlcoholCocktails());
console.log(cocktails);
