/*
 CineShow tem 7 assentos disponiveis para a sessao das 18h: 43 a 50.
 A Bilheteria quer vender esses ingressos, sendo que a cadeira 46 é prefencial e nao pode ser vendida
 */
 const ler = require("prompt-sync")();
 //Entradas

 //Processamento
 for (var i = 43; i < 50; i++) {
     console.log("Poltrona " + i);
    var poltrona = ler("proltrona comum ou preferencial? C ou P");

   if ((poltrona == "P") && (i != 46)) {
        console.log("Essa poltrona não é preferencial");
        continue;
    }
    console.log("Ingresso " + i + " vendido.");

 }
 //Saida

 //Para (inicializacao, condicao de continuidade, final)

 const ler = require("prompt-sync")();
 var i = 43;

 for (; i < 50; ) {
 console.log("Poltrona " + i);
    var poltrona = ler("proltrona comum ou preferencial? C ou P");

   if ((poltrona == "P") && (i != 46)) {
        console.log("Essa poltrona não é preferencial");
        continue;
    }
    console.log("Ingresso " + i + " vendido.");
    i++;
 }

    
