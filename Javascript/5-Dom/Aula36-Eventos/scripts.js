//Evento é uma ação que o usuario faz para interagir com a página

//Exemplos de eventos comuns:
// click - clique do mouse
// mouseover - passar o mouse por cima de um elemento
// keydown - pressionar uma tecla do teclado
// submit - enviar um formulário
// load - quando a página termina de carregar

//Load - quando a página termina de carregar
window.addEventListener('load', function() {
    console.log('A página terminou de carregar!');
});

//Click - clique do mouse
addEventListener('click', function(event) {
    //O objeto event traz várias informações sobre o evento que ocorreu
    console.log(event);
});

//Quando clicamos em um botão com o type submit, o evento submit é disparado e a pagina é recarregada
//Porém, podemos prevenir esse comportamento padrão usando event.preventDefault()
addEventListener('click', function(event) {
    event.preventDefault(); //Previne o comportamento padrão do evento
    console.log('Clique prevenido!');

    //Podemos verificar qual elemento foi clicado usando event.target
    console.log(event.target);

    //Podemos tambem verificar o texto do elemento clicado usando event.target.textContent
    console.log(event.target.textContent);
});