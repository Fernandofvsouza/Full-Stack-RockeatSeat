/*
Debug: é o processo de encontrar e corrigir erros (bugs)
BreakPoint: é o ponto no codigo fonte onde a execução do programa será pausada quando atingir esse ponto especifico para que voce possa inspecionar o estado do programa
Inspecionar: inspecionar permite examinar o codigo-fonte para entender a logica e a estrutura da aplicação
*/
//Exemplo fazendo a depuração:
const input = document.querySelector('input');
const form = document.querySelector('form');

form.onsubmit = (event) =>{
    console.log('Evento disparado')
    event.preventDefault();
    const value = input.value;
    const hasNumberRegex = /\d+/g;
    if(hasNumberRegex.test(value)){
        alert('O texto contem numeros, por favor digite o nome corretamente');
    }else{
        alert('Cadastro enviado')
    }
};