//Visualizar os itens dentro do document
console.log(document);

//Exemplo de acesso ao titulo da pagina
console.log(document.title);

//Acessando um elemento com ID
const container = document.getElementById('container');
console.log(container);

//Acessando as propriedades do objeto
console.dir(container);

//Acessando elementos por classe
const paragrafos = document.getElementsByClassName('text');
console.log(paragrafos);
//Quando usar getElementsByClassName, o retorno é uma HTMLCollection, para acessar um elemento específico, use a notação de colchetes ou o método item()
console.log(paragrafos[0]);
console.log(paragrafos.item(1));

//Acessando elementos por tag name
const divs = document.getElementsByTagName('div');
console.log(divs);
//Retorna uma HTMLCollection também
console.log(divs[0]);