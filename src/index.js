import analyzer from './analyzer.js';

document.addEventListener("DOMContentLoaded", function () {
  //document. this´s the code .AddEventListener Añade un "escuchador" que espera a que ocurra un evento.
  //DOMContentLoaded: El evento que ocurre cuando la página ha terminado de cargarse. function (): La lista de instrucciones que se ejecutan cuando el evento ocurre.
  const textArea = document.querySelector("textarea");
  //esta variable llama en el documento al elemento textarea
  const countWordView = document.querySelector("li[data-testid='word-count']");
  //("li[data-testid='word-count']"); :Especifica que estamos buscando un elemento <li> con un atributo data-testid igual a 'word-count'
  
  const countCharacterView = document.querySelector("li[data-testid='character-count']");

  const CountSpaceView = document.querySelector("li[data-testid='character-no-spaces-count']");
  
  const NumberCountView = document.querySelector("li[data-testid='number-count']"); 

  const numberSumView = document.querySelector ("li[data-testid='number-sum']");
  
  const longitudView = document.querySelector ("li[data-testid='word-length-average']");

  textArea.addEventListener("input",function(){
    // esuchamos el inputo y queremos que haga lo siguiente
    const text = textArea.value;
    //textArea: llama al elemento HTML (ya esta declarado arriba) .value: btener el valor ingresado por el usuario.

    const contadorP = analyzer.getWordCount(text);
    countWordView.textContent = `Palabras: ${contadorP}`;

    const contadorC = analyzer.getCharacterCount(text);
    countCharacterView.textContent = `Caracteres: ${contadorC}`;

    const sinEspacios = analyzer.getCharacterCountExcludingSpaces(text);
    CountSpaceView.textContent = `Caracteres sin espacios: ${sinEspacios}`;

    const contadorN = analyzer.getNumberCount(text);
    NumberCountView.textContent  = `Numeros: ${contadorN}`;

    const sumaN = analyzer.getNumberSum(text);
    numberSumView.textContent = `Suma total de números: ${sumaN}`;

    const longitudTotal = analyzer.getAverageWordLength(text);
    longitudView.textContent = `Longitud de las palabras: ${longitudTotal}`;
        
  });
   
})

document.addEventListener("DOMContentLoaded", function () {
  function clearButton() {
    document.querySelector("textarea").value = '';
    document.querySelector("li[data-testid='word-count']").textContent = 'Palabras: 0';
    document.querySelector("li[data-testid='character-count']").textContent = 'Caracteres: 0'
    document.querySelector("li[data-testid='character-no-spaces-count']").textContent = 'Caracteres sin espacios: 0'
    document.querySelector("li[data-testid='number-count']").textContent = 'Numeros: 0' 
    document.querySelector ("li[data-testid='number-sum']").textContent = 'Suma total de números: 0'  
    document.querySelector ("li[data-testid='word-length-average']").textContent = 'Longitud de las palabras: 0'
   
  }
  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", function() {
    clearButton(); 
  });
  //NO TOCAR NADA DE AQUI PARA ARRIBA


  
})




//querySelector: se utiliza para encontrar y manipular objetos del DOM, se llaman por ID, class o etiqueta y devuelve solo el 1er valor
//querySelectorById:igual al anterior pero llamando por ID
//querySelectorAll: devuelve todos los elementos
//eventTarget:algo que esucha eventos y desponder a ellos
//addEventListener: se utiliza para decirle a un elemento que hacer(limpiar) cuando ocurre un evento(click)