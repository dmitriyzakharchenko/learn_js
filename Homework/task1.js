const pizza= {
    name: 'franchesko',
    ingredients: ['sausages', 'tomato', 'cheese'],
    size: [{name: 'franchesko', price: 55}],
    getPrice: function(){
        return this.size[0].price;
}
};
console.log(pizza.getPrice());