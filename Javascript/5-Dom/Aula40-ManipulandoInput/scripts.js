//Expressao regular (regex)
//Manipulando o input 
const input = document.querySelector('input');

input.addEventListener('input', (e) => {
    const value = input.value;
    const regex = /\D+/g; // Apenas caracteres
    console.log(value.match(regex)); // Retorna um array com os caracteres encontrados, sem os numeros

    //Teste se é valido o padrão
    const isValid = regex.test(value);
    console.log(isValid);
})

//Manipulando o submit
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita o comportamento padrão do submit
    const regex = /\d+/g;
    const value =  input.value.replace(regex, ''); // Remove os números do valor do input
    console.log(value);
});