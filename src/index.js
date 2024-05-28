import analyzer from './analyzer.js';

document.addEventListener("DOMContentLoaded", function () {
  const textArea = document.querySelector("textarea") ;
  const countWordView = document.querySelector("li[data-testid='word-count']");  

  //console.log(textArea); 
  //agregar un evento de escucha al text area
  textArea.addEventListener("input",function(){
    //cuando agregen algo en el text area que queremos que haga
    const text = textArea.value;
    const contadorP = analyzer.getWordCount(text);
    countWordView.textContent = `Palabras: ${contadorP}`;
  })
})



//document.addEventListenequert("textArea"){
    
    
    
analyzer.getCharacterCount();
analyzer.getCharacterCountExcludingSpaces();
analyzer.getNumberCount();
analyzer.getNumberSum();
analyzer.getAverageWordLength();



