
//Ficar bonito

var totalPagamento = 1890.00;

var vezes3 = totalPagamento / 3;
var vezes5 = totalPagamento / 5;
var vezes10 = Math.round(totalPagamento * 1.015 / 10);

console.log("3 vezes sem juros de " + vezes3 + " total " + totalPagamento);
console.log("5 vezes sem juros de " + vezes5 + " total " + totalPagamento);

totalPagamento = Math.round(totalPagamento * 1.015 + 2);

console.log("10 vezes sem juros de " + vezes10 + " total " + totalPagamento);

//Valor correto
console.log("===========================");

var totalPagamento = 1890.00;

var vezes3 = totalPagamento / 3;
var vezes5 = totalPagamento / 5;
var vezes10 = totalPagamento * 1.015 / 10;

console.log("3 vezes sem juros de " + vezes3 + " total " + totalPagamento);
console.log("5 vezes sem juros de " + vezes5 + " total " + totalPagamento);

totalPagamento = totalPagamento * 1.015;

console.log("10 vezes sem juros de " + vezes10.toFixed(2) + " total " + totalPagamento);


