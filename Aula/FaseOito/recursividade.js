
function substituirTodos(texto, antigo, novo) {
    var resultado = texto.replace(antigo, novo);
    var posicao = resultado.indexOf(antigo);

    if (posicao > -1){
        console.log("Ainda tem ocorrencia");
        resultado = substituirTodos(resultado, antigo, novo);
    }
    else {
        console.log("Tudo substituido");
    }
    return resultado;
}

var frase = "Eu não vou terminar esse curso. Eu não tenho computador. hoje não está sol.";
var nova = substituirTodos(frase, "não", "sim");
console.log(nova);

