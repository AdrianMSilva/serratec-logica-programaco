/*
O locutor da Rádio 90FM irá telefonar ao vivo para um dos ouvintes
 que mandou um zap durante o programa. O primeiro que atender ganha
  uma camiseta! Mas não vale dizer alô, diga “90FM é show”!
  */

  const ler = require("prompt-sync")();

  do {
  //Entradas

  var telefone = ler("Ligando pra você: ");

  //Processamento
  
  var errado = (telefone != "90show");

  //Saida
  if (errado)
     console.log("que pena, você perde...");
  else
     console.log("você ganhou!");  
  }
  while (errado);     

//while

  const ler = require("prompt-sync")();
  var telefone = ler("Ligando pra você: ");
  var errado = (telefone != "90show");

  while (errado){
     console.log("que pena, você perde...");
      telefone = ler("Ligando pra você: ");
      errado = (telefone != "90show");

  };     

  console.log("você ganhou!");  

  
