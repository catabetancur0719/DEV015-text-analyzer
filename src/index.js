import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// 1.Llamar al elemento (textarea)

const textarea = document.querySelector("textarea")

// console.log(textarea);

// 2. añadir el manejador de eventos (addeventListener)

textarea.addEventListener("input", function(){
    // alert("ok input")
    const texto = textarea.value;
    // console.log(texto);
    analyzer.getWordCount(texto) // argumento
})
//la parte de textarea wordcount lo hizo Gene

const resetButton = document.getElementById ("reset-buttom")
//variable nombre de la variable = llamar en el documento con ID (es mas rapido y en el botos usamos ID)

resetButton.addEventListener("click", function(){
    textarea.value = " ";
})
// .value: what we write inside of the textarea
//llamamos a la funcion resetButton para decirle que es lo que queremos que al hacer click el valor de textarea desparezca