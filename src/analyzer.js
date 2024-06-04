const analyzer = {
  getWordCount: (text) => {
    const word = text.split("")
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
    
    if (!text || text.trim() === "") {
      return 0;
    }
    const words = text.trim().split(/\s+/);
    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    const averageLength = totalLength / words.length;
    return parseFloat(averageLength.toFixed(2))
    // retornar el promedio de palabras del text 
   
  },

  getNumberCount: (text) => {
    const numeros = [ ]
    let words = text.split(" ")
    words.forEach ((word) => {
      //console.log(word)
      //console.log(typeof word,"word")
      const numero = Number (word)
      //console.log(numero,"numero")
      //console.log(typeof numero,"tipo numero")
     
      if (!isNaN(numero)) {
        numeros.push(numero)
      }
    })
    //console.log(numeros,"array de numeros")
    //console.log(numeros.lenght)
    return numeros.length
  },

  getNumberSum: (text) => {
    
    const numeros = text.match(/\d+/g); // Utiliza el parámetro 'text' en lugar de obtener el texto del elemento del DOM
    let sumaTotal = 0;
  
    if (numeros) {
      sumaTotal = numeros.reduce((total, numero) => total + parseInt(numero, 10), 0);
    }
  
    return sumaTotal; // Devuelve la suma total en lugar de asignarla directamente al elemento del DOM
  },
  
};


  
   
//retornar la suma de numeros
    



export default analyzer;
