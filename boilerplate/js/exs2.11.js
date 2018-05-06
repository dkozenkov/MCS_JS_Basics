let money = parseFloat(prompt('сколько у вас с собой есть денег?'));
let apples = parseInt(prompt('сколько вы купили яблок?'));
let breads = parseInt(prompt('сколько вы купили батонов хлеба?'));
let applePrice = parseFloat(prompt('сколько стоит одно яблоко'));
let applesSum = apples * applePrice;
let breadPrice = parseFloat(prompt('сколько стоит один батон хлеба?'));
let breadsSum = breads * breadPrice;
let result = (money >= applesSum + breadsSum) ;
document.body.innerText = result;