//Criando elementos e inserindo no DOM
const guests = document.querySelector('ul');

//Criando um novo elemento <li>
const newGuest = document.createElement('li');
//criando um texto para o novo elemento
const guestName = document.createElement('span');
guestName.textContent = 'Diana Prince';

//Adicionando o texto ao novo elemento <li>
newGuest.appendChild(guestName);

//Adicionando uma classe ao novo elemento <li>
newGuest.classList.add('guest');

//Inserindo o novo elemento na lista de convidados
guests.appendChild(newGuest);

//Inserindo outro elemento com HTML interno
const anotherGuest = document.createElement('li');
anotherGuest.classList.add('guest');
anotherGuest.innerHTML = '<span>Clark Kent</span>';
//Adicionando antes do primeiro filho
guests.prepend(anotherGuest);