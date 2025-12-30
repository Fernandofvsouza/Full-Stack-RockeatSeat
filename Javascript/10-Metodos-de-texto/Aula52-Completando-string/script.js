//Manipulando e completando strings
//Exemplo real e pratico, Imagine que queremos mostrar so os ultimos 4 digitos de um cartao de credito.
const creditCard = "1234567812344928";


//Pegando os ultimos 4 digitos
const last4Digits = creditCard.slice(-4); 

//Ocultando os outros digitos com asteriscos
const maskedNumber = last4Digits.padStart(creditCard.length, "*");
//padStart(tamanhoTotal, stringDePreenchimento) - Completa a string ate o tamanhoTotal com a stringDePreenchimento no inicio.
//O PADSTART preenche a string do inicio ate o tamanho total especificado, adicionando a string de preenchimento no inicio da string original.

console.log(maskedNumber); //************4928

//O padEnd() funciona de forma semelhante, mas preenche a string no final.
const number = "123";
console.log(number.padEnd(10, "#")); //123#######