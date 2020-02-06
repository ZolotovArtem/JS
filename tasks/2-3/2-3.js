/*Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут 
    только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function(string) {
  // твой код
};


 * Вызовы функции для проверки работоспособности твоей реализации.
 
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'


const findLongestWord = function(string) {
  
  };

  const str = 'The quick brown fox jumped over the lazy dog';
  const strSplit = str.split(' ');
  const longestWord = 0;

  for(const i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){ // If strSplit[i].length больше, чем сравнимое слово...
	longestWord = strSplit[i].length; // ...затем longestWord принимает новое значение
     }
  }
  */
let str = "The quick brown fox jumped over the lazy dog";
 



function findLongestWord(str) {

  let strSplit = str.split(' ');
  let longestWord = 0;
  let wordest;
  
  for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){ 
  longestWord = strSplit[i].length;
 
   
     }
  }
  
  return longestWord;
}



console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
