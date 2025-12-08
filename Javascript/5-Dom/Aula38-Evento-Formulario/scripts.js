//Eventos em formularios
const form = document.querySelector('form');

//Podemos usar o evento submit para capturar o envio do formulario
form.onsubmit = (event) => {
    event.preventDefault(); //Previne o comportamento padrão do evento
    alert('Formulário enviado!');
}

//Diferença entre submit e click, o evento submit é disparado quando o formulario é enviado, seja por um botão de submit ou por pressionar Enter em um campo de texto

//Diferença entre onsubmit e addEventListener
//Usar onsubmit sobrescreve qualquer outro evento submit que tenha sido adicionado anteriormente
//Usar addEventListener permite adicionar múltiplos eventos submit ao mesmo elemento