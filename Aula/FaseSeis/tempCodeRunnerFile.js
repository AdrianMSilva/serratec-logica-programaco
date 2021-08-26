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
