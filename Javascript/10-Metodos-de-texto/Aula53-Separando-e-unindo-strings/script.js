//Separando e unindo strings
let text = "Estudar, aprender e evoluir";

//Separando
let separate = text.split(",");
console.log(separate);//Devolve um array com os elementos separados pela vírgula

let message = "Estou muito feliz hoje!";
let separateMessage = message.split(" ");//Separa a string em palavras
console.log(separateMessage);//Devolve um array com as palavras, separadas pelo espaço

//Unindo
let joined = separate.join(" - ");//Une os elementos do array com " - " entre eles
console.log(joined);//Devolve a string unida por " - "