function calcular(parcelaUm,operador, parcelaDois) {
    var conta = 0;

    switch(operador) {
        case "+": conta = parcelaUm + parcelaDois; break;
        case "-": conta = parcelaUm + parcelaDois; break;
        case "*": conta = parcelaUm + parcelaDois; break;
        case "/": conta = parcelaUm + parcelaDois; break;
    } 
    return conta;
}

var resposta = calcular(2, "+", 2);
console.log("resposta da conta: " + resposta);

resposta = calcular(2, "-", 2);
console.log("resposta da conta: " + resposta);

resposta = calcular(2, "*", 2);
console.log("resposta da conta: " + resposta);

resposta = calcular(2, "/", 2);
console.log("resposta da conta: " + resposta);