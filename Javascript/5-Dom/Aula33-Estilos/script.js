const title = document.querySelector('.special-item');

//Adicionando e removendo classes
title.classList.add('highlighted'); // Adiciona a classe 'highlighted' ao elemento

title.classList.remove('highlighted'); // Remove a classe 'highlighted' do elemento

//Alternando uma classe, se a classe existir, ela será removida; se não existir, será adicionada
title.classList.toggle('active'); // Alterna a classe 'active' no elemento

//editando estilos diretamente
title.style.color = 'blue'; // Altera a cor do texto para azul

title.style.fontSize = '24px'; // Altera o tamanho da fonte para 24 pixels

title.style.backgroundColor = 'lightgray'; // Altera a cor de fundo para cinza claro

//Removendo um estilo específico
title.style.removeProperty('background-color'); // Remove a propriedade de cor de fundo