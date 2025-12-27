//Variaveis Dom
const form = document.querySelector("form");
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");


//Cotações das moedas por dia 
const dolarPrice = 4.87;
const euroPrice = 5.32;
const libraPrice = 6.08;

//Manpipulando o input amount para receber somente numeros
amount.addEventListener("input", () =>{
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "");
});

//Capturando o evento de submit do formulario
form.onsubmit = (event) => {
    event.preventDefault();
    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, dolarPrice, "US$");
            break;
        case "EUR":
            convertCurrency(amount.value, euroPrice, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, libraPrice, "£");
            break;    
    }
    

};
//Funcao para converter o valor
function convertCurrency(amount, price, symbol){
   try {
    //Mostra a descrição da conversão
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;
    //Mostra o resultado da conversão
    let total = amount * price;
    result.textContent = `${formatCurrencyBRL(total)}`;
    //Aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add('show-result');
    


   } catch (error) {
    console.log(error);
    //Remove a classe que exibe o footer para esconder o resultado
    footer.classList.remove('show-result');
    alert("Ocorreu um erro na conversão da moeda.");
   }
}

//Funcao para formatar o valor para o formato BRL
function formatCurrencyBRL(value){
    return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

