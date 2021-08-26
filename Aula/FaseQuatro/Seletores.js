{
    const prompt = require("prompt-sync")();

    const LIMITE_CLIENTES = 8;

    console.log("Tem uma pessoa na porta da loja querendo entrar.");
    var qtde = 7; // prompt("Quantas pessoas temos na loja agora? ");

    var permitir = qtde < LIMITE_CLIENTES;
    var texto = "loja ta cheia";

    //vallor true
    if (permitir)
        texto = "Pode permir a entrada do cliente";
        
    console.log(texto);
}