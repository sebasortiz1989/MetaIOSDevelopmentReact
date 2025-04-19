// functional programming

var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax) {
    return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);

console.log(toPay);

// object oriented programming

var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calcultation = purchase1.shoes * purchase1.stateTax;
        console.log('Total price: ', calcultation);
    },
}

purchase1.totalPrice();

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calcultation = purchase2.shoes * purchase2.stateTax;
        console.log('Total price: ', calcultation);
    },
}

purchase2.totalPrice();

var purchase3 = {
    shoes: 80,
    stateTax: 1.2,
    totalPrice: function() {
        var calcultation = this.shoes * this.stateTax;
        console.log('Total price: ', calcultation);
    },
}

purchase3.totalPrice();