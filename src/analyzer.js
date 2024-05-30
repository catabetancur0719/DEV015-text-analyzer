const analyzer = {
  getWordCount: (text) => {
    const word = text.split(" ")
    return word.length
    //retornar el largo de text (string)
        
  },  

  getCharacterCount: (text) => {
    return text.length
    // retornar la cantidad de caracteres de text (string)
  },

  getCharacterCountExcludingSpaces: (text) => {
    const space = text.trim()
    return space.length
  },


  getAverageWordLength: (text) => {    
    // retornar el promedio de palabras del text 
   
  },

  getNumberCount: (text) => {
    
    // retornar la cantidad de numeros
  },

  getNumberSum: (text) => {
    //retornar la suma de numeros
    
  },
};

export default analyzer;
