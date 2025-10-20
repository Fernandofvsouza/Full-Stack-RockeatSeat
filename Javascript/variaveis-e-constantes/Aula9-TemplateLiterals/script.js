//Template literals ou template strings
let username = "Fernando";
let email = "Fernando@gmail.com"
//Concatenação tradicional
let mensagem = "O usuário " + username + " possui o email " + email + ".";
console.log(mensagem); // O usuário Fernando possui o email Fernando@gmail.com
//Usando template literals
let mensagem2 = `O usuário ${username} possui o email ${email}.`;
console.log(mensagem2); // O usuário Fernando possui o email Fernando@gmail.com
//Podemos quebrar linhas facilmente
let mensagem3 = `Olá ${username},
seja bem-vindo ao nosso sistema!
Seu email é: ${email}.`;
console.log(mensagem3);
/* 
Olá Fernando,
seja bem-vindo ao nosso sistema!
Seu email é:Fernando@gmail.com*/