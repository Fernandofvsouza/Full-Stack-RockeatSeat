//Eventos em inputs
const input = document.querySelector('input');

//Keydown - Disparado quando a tecla é pressionada
input.addEventListener('keydown', function(event) {
    console.log('Tecla pressionada:', event.key);
});

//Keypress - Disparado quando a tecla é pressionada e solta, apenas caracteres
input.addEventListener('keypress', function(event) {
    console.log('Tecla pressionada e solta:', event.key);
});

//Change - Disparado quando o valor do input é alterado e o foco sai do input
input.addEventListener('change', function(event) {
    console.log('Valor alterado para:', event.target.value);
});