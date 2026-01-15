//Encontrando um conteudo no texto

let message = "Estou muito feliz hoje!";

//Obtendo a posição da palavra
console.log(message.indexOf("feliz"));//Devolve a posição inicial da palavra "feliz" no texto, caso nao encontre a palavra devolve -1

//Verificar se a palvra existe no texto
console.log(message.includes("feliz"));//Devolve true se a palavra "feliz" existir no texto, caso contrario devolve false