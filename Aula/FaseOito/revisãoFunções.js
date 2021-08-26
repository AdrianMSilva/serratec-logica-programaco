
//Função : identificador; parametros; retorno

function bomDia() {
    //códiog que será executado no futuro
    return "Bom dia";
}

//chamada
var texto = bomDia();

function multiplicar(numero) {
    return numero * 2;
}

var total = 2 + 2 + multiplicar(5);
console.log("total " + total);

//calculadora com funcao
//minuendo subtraendo resto
//fator
function calcular(parcelaUm,operador, parcelaDois) {
    var conta = 0;

    switch(operador) {
        case "+": conta = parcelaUm + parcelaDois; break;
        case "-": conta = parcelaUm - parcelaDois; break;
        case "*": conta = parcelaUm *  parcelaDois; break;
        case "/": conta = parcelaUm / parcelaDois; break;
    } 
    return conta;
}

var resposta = calcular(2, "+", 2);
console.log("resposta da conta: " + resposta);

resposta = calcular(2, "-", 2);
console.log("resposta da conta: " + resposta);

resposta = calcular(2, "*", 2);
console.log("resposta da conta: " + resposta);

//terceira abordagem : usar o retorno de uma função como paré
resposta = calcular(multiplicar(2), "/", 2);
console.log("resposta da conta: " + resposta);

//quarta abordagem: desprezar
calcular(2, "*", 2);