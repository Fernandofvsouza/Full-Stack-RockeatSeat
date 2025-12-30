// Substituindo e fatiando uma string
//Substituindo parte de uma string com o metodo replace()
let message = "Estou estudando os fundamentos do Javascript!";

// Substituindo parte da string
console.log(message.replace("Javascript", "JS")); //Estou estudando os fundamentos do JS!
//O primeiro parametro é o texto que queremos substituir, o segundo é o novo texto.

//Nao precisa ser uma palavra pode ser uma parte do texto
console.log(message.replace("os fundamentos do Javascript", "o basico de JS")); //Estou estudando o basico de JS!
//-------------------------------------------------------------------

//Extraindo uma parte de uma string com o metodo slice()
let outraMensagem = "Aprendendo Javascript na Rocketseat";
console.log(outraMensagem.slice(11, 21));//Javascript
//O primeiro parametro é o indice inicial (inclusivo) e o segundo é o indice final (exclusivo). 

//Podemos omitir o segundo parametro para extrair até o final da string
console.log(outraMensagem.slice(11)); //Javascript na Rocketseat

//Extraindo de tras para frente
console.log(outraMensagem.slice(-10)); //Rocketseat
//Usando indice negativo, o conteudo é extraido a partir do final da string.

console.log(outraMensagem.slice(-24, -14)); //Javascript
//Usando indices negativos para definir o inicio e o fim da extracao.
//-------------------------------------------------------------------
//Removendo espacos em branco no começo e no final de uma string com trim()

let textWithSpaces = "    Olá, Mundo!    ";
console.log(`Antes: '${textWithSpaces}'`); //Antes: '    Olá, Mundo!    '
console.log(`Depois: '${textWithSpaces.trim()}'`); //Depois: 'Olá, Mundo!'
//O metodo trim() remove os espacos em branco no inicio e no final da string.

//Se quiser remover apenas do inicio, use trimStart()
console.log(`Removendo do inicio: '${textWithSpaces.trimStart()}'`); //Removendo do inicio: 'Olá, Mundo!    '

//Se quiser remover apenas do final, use trimEnd()
console.log(`Removendo do final: '${textWithSpaces.trimEnd()}'`); //Removendo do final: '    Olá, Mundo!'
