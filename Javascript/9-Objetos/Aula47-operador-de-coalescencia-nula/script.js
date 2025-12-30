/*
    operador de coalescencia nula (??)
    Operador logico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined, caso contrario retorna o operando do lado esquerdo.

*/
//Exemplo

let content = null; //Tambem funciona com undefined
console.log(content ?? "Conteudo padrao"); //Conteudo padrao

let score = 0;
console.log(score ?? 100); //0, pois 0 nao é null nem undefined

//Utilizando com objetos
const user = {
    name: "Fernando Souza",
    picture: undefined //O usuario nao enviou foto
}
console.log(user.picture ?? "foto-padrao.png"); //foto-padrao.png