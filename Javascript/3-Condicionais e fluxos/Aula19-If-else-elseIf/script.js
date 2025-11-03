//If (se)
let hour = 11;
if(hour >= 6 && hour < 12){
    console.log("Bom dia!"); //Saída: "Bom dia!"
}

//Else (senão)
let age = 16;
if(age >= 18){
    console.log("Você é maior de idade."); //Saída: "Você é maior de idade."
} else {
    console.log("Você é menor de idade.");//Saída: "Você é menor de idade."
}

//Else If (senão se)
let temperature = 30;
if(temperature >= 30){
    console.log("Está muito quente!");//Saída: "Está muito quente!"
} else if(temperature >= 20 && temperature < 30){
    console.log("O clima está agradável.");//Saída: "O clima está agradável."
} else if(temperature >= 10 && temperature < 20){
    console.log("Está um pouco frio.");//Saída: "Está um pouco frio."
} else {
    console.log("Está muito frio!");//Saída: "Está muito frio!"
}

//Podemos ter quantos else if quisermos entre o if e o else final