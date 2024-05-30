const analyzer = {
  getWordCount: (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
          
  },
    
  
  getCharacterCount: (text) => {
    if (!text) {
      return 0;
    }
    return text.length;
  },
  
  getCharacterCountExcludingSpaces: (text) => {
    if (!text) {
      return 0;
    }
    const cleanedText = text.replace(/\s|[^\w]/g, '');
    return cleanedText.length;
  },
  
  getAverageWordLength: (text) => {    
    if (!text || text.trim() === "") {
      return 0;
    }
    const words = text.trim().split(/\s+/);
    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    const averageLength = totalLength / words.length;
    return parseFloat(averageLength.toFixed(2)); // Redondear a 2 decimales
  },
  
  getNumberCount: (text) => {
    if (!text) {
      return 0;
    }
    const numbers = text.match(/\d+/g);
    return numbers ? numbers.length : 0;
  },
  
  getNumberSum: (text) => {
    if (!text) {
      return 0;
    }
    const numbers = text.match(/\d+/g);
    return numbers ? numbers.reduce((sum, num) => sum + parseFloat(num), 0) : 0;
  },
};
  
export default analyzer;
  