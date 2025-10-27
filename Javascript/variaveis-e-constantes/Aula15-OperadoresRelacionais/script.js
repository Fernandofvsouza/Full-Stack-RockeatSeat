//Operadores relacionais
//Igual a (==) e diferente de (!=)
let one = 1;
let two = 2;
//Igual a
console.log(one == two); //false
console.log(one == 1); //true
console.log(one == "1"); //true, pois ele olha para o conteudo e nao o tipo
console.log(one === "1"); //false, ele olha o conteudo e o tipo se sao iguais, chamado de estritamente igual a 

//Diferente de 
console.log(one != two); //true
console.log(one != 1); //False
console.log(one != "1"); //false, pois ele olha para o conteudo e nao o tipo
console.log(one !== "1"); //true, ele olha o conteudo e o tipo se sao diferentes, chamado de estritamente diferente de

//Maior que (>) e menor que (<)
let balance = 500;
let payment = 120;
console.log(balance > payment); //true
console.log(balance < payment); //false

//Maior ou igual a (>=) e menor ou igual a (<=)
console.log(balance >= 500); //true
console.log(payment <= 500); //true
