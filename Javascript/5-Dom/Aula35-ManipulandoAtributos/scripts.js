//Manipulando atributos
const input = document.querySelector('input');

//Exemplo: desabilitando o campo de input
input.setAttribute('disabled', true); // Adiciona o atributo 'disabled' ao input
console.log(input.getAttribute('disabled')); // Verifica se o atributo 'disabled' está presente

//Exemplo: alterando o valor do atributo 'placeholder'
input.setAttribute('placeholder', 'Novo placeholder via JavaScript');
console.log(input.getAttribute('placeholder')); // Verifica o novo valor do atributo 'placeholder'

//Removendo o atributo 'disabled'
input.removeAttribute('disabled');
console.log(input.getAttribute('disabled')); // Verifica se o atributo 'disabled' foi removido