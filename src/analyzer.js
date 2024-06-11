const analyzer = {  
  getWordCount: (text) => {
    if (!text || text.trim() === "") {
      return 0;
    }
    const words = text.trim().split(/\s+/); // Divide el texto por espacios en blanco 
    return words.length;
  },
  getCharacterCount: (text) => {
    return text.length
  },
  getCharacterCountExcludingSpaces: (text) => {
    const space = text.replace(/\s+/g, ''); 
    //replace(/\s+/g, '') para reemplazar todos los espacios (incluyendo espacios, tabulaciones y saltos de línea)
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
  },
  getNumberCount: (text) => {
    const numeros = [ ]
    const words = text.trim().split(" ")
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
    // console.log(numeros)
    return numeros.length
  },
  getNumberSum: (text) => {
    const numeros = [];
    let suma = 0;
    const words = text.match(/\b\d+(\.\d+)?\b/g); // Encuentra todos los números en el texto
    
    if (words) {
      for (let i = 0; i < words.length; i++) {
        const numero = parseFloat(words[i]); // Convierte el string a número decimal
        if (!isNaN(numero)) {
          numeros.push(numero);
          suma += numero; 
        }
      }
    }
  
    return suma;
    
  },

}
export default analyzer;