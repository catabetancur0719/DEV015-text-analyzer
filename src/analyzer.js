const analyzer = {  
  getWordCount: (text) => {
    if (!text || text.trim() === "") { // verificando que el texto está vacío o solo tiene espacios en blanco.
      //!text: Significa "si no hay texto".
      //text.trim() === "": Quita los espacios al principio y al final
      return 0;
    }
    const words = text.trim().split(/\s+/); // Divide el texto por espacios en blanco 
    //.split(/\s+/): Divide el texto en palabras
    //\s+: uno o más espacios en blanco    
    //. split (): Crea un array de palabras separadas por esos espacios.

    return words.length;
  },

  getCharacterCount: (text) => {
    return text.length
  },

  getCharacterCountExcludingSpaces: (text) => {
    const space = text.replace(/\s+/g, '');
    //.replace(): se usa para reemplazar un string por algo diferente
    //\s+: uno o más espacios en blanco   ( el mas significa uno o mas del caracter anterior)
    // g: significa global, lo que quiere decir que queremos buscar en todo el texto, no solo el primero.
    // ' ': cadena vacia que elimina los espacios en blanco
    return space.length
  },

  getAverageWordLength: (text) => {    
    if (!text || text.trim() === "") { // que el texto está vacío o solo tiene espacios en blanco.
      //!text: Significa "si no hay texto".
      //text.trim() === "": Quita los espacios al principio y al fina
      return 0;
    }
    const words = text.trim().split(/\s+/);
    //Divide el texto por espacios en blanco 
    //.split(/\s+/): Divide el texto en palabras
    //\s+: uno o más espacios en blanco    
    //. split (): Crea un array de palabras separadas por esos espacios.
    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    //.reduce: Recorre el array de words y acumula la longitud total
    // sum: Es el acumulador que lleva la cuenta de la suma total.
    // word: Es cada palabra en el array 
    //sum + word.length: Añade la longitud de la palabra actual (word.length) al acumulador (sum).
    //(sum, word) => sum + word.length: Para cada palabra en el array, agrega su longitud 

    const averageLength = totalLength / words.length; // Divide la longitud total por la cantidad de palabras para obtener la longitud promedio.
    return parseFloat(averageLength.toFixed(2))
    // toFixed(2): Redondea la longitud promedio a dos decimales 
    // parseFloat: Esta función toma un string
    // averageLength: Es una variable que contiene un número que representa la longitud media de las palabras.
    // .toFixed(2): Este método redondea el número averageLength a dos decimales y lo convierte en una cadena de texto (string).

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
    // creamos un array para guardar los numeros
    let suma = 0;
    const words = text.match(/\b\d+(\.\d+)?\b/g); // Encuentra todos los números en el texto
    // .match: Busca numeros en el texto
    ///\b\d+(\.\d+)?\b/g: Busca números enteros y decimales  
    // \d+: Busca una o más cifras.
    //(\.\d+)?: Busca decimales
    // \b: MArca el inicio y el fin de una palabra |catalina| |betancur|
    //g: significa global, lo que quiere decir que queremos buscar en todo el texto, no solo el primero.
    
    if (words) {
      for (let i = 0; i < words.length; i++) { // si en words encuentra un numero aca lo acumula y le suma uno 
        const numero = parseFloat(words[i]); // Convierte el string a número decimal
        if (!isNaN(numero)) {
          numeros.push(numero);// Agrega el número a la lista numeros.
          suma += numero; //Agrega y suma el número al total en suma.
        }
      }
    }
  
    return suma;
    
  },

}
export default analyzer;