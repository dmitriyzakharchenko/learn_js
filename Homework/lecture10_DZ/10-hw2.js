function Button(label, width,height){
    this.label = label;
    this.width = width;
    this.height = height;
    this.events = []
}
Button.prototype.registerEvent = function (type, callback) {
    this.events.push({
        id: Date.now(),
        type: type,
        callback: callback
         });
};
Button.prototype.getEvents = function(){
    return this.events;
};
Button.prototype.clearEvents = function() {
    this.events = [];
};
Button.prototype.getEvenstByType = function(type) {
    return this.events.filter(function (event) {
        return event.type === type;
    })
};
function ClickButton() {
    Button.call(this);
}
ClickButton.prototype = Object.create(Button.prototype);
ClickButton.prototype.constructor = ClickButton;
let btn = new ClickButton('test', 50, 50);
btn.registerEvent('click', ()=>{});
console.log(btn.getEvenstByType('click'));