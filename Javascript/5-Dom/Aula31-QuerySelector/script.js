//Query selector é um método mais moderno para acessar elementos no DOM. Ele permite selecionar elementos usando seletores CSS, o que torna a seleção mais flexível e poderosa.

//Selecionando o primeiro elemento <h1> da página
const heading = document.querySelector('h1');
console.log(heading);

//Selecionando um elemento com uma classe específica
const specialItem = document.querySelector('.special-item');
console.log(specialItem);

//Selecionando um elemento com um ID específico
const uniqueElement = document.querySelector('#unique-element');
console.log(uniqueElement);