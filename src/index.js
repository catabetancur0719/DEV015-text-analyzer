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
    longitudView.textContent = `Longitud media de las palabras: ${longitudTotal}`;

  });

  function clearButton() {
    const contenido = document.getElementById('user-input',"contenedor");
    const botonLimpiar = document.getElementById("reset-button");

    // Agregar evento de clic al botón de limpiar
    botonLimpiar.addEventListener('click', function() {
      // Borrar el contenido del elemento
      contenido.textContent = '';
    });
  };

//querySelector: se utiliza para encontrar y manipular objetos del DOM, se llaman por ID, class o etiqueta y devuelve solo el 1er valor
//querySelectorById:igual al anterior pero llamando por ID
//querySelectorAll: devuelve todos los elementos
//eventTarget:algo que esucha eventos y desponder a ellos
//addEventListener: se utiliza para decirle a un elemento que hacer(limpiar) cuando ocurre un evento(click) 
