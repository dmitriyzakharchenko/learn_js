const Pizza = function(eat){
    this.name = eat;
    this.ingredients = ['sausages', 'tomato', 'cheese'];
    this.size =[{name:'franchesko', price:55}];

    this.sayFeedback = function() {
        return 'Очень вкусная пицца, ' + this.name + '.' ;
    };
    this.getPrice = function(){
        return 'Стоимость пиццы, ' + this.size[0].price + ' гривен.';
    };
    this.seeIngredients = function(){
        return 'Состав: ' + this.ingredients + ' и тд.' ;
    };
};
const franchesko = new Pizza('Франческо');

console.log(franchesko.sayFeedback());
console.log(franchesko.getPrice());
console.log(franchesko.seeIngredients());