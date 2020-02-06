  /*Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale.
   Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в
   произвольном регистре.

const checkForSpam = function(message) {
    // твой код
  };
  

   * Вызовы функции для проверки работоспособности твоей реализации.
 
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
  */

 const checkForSpam = function(message) {
     let word;
     let text = message.toLowerCase();
    
if (text.includes('spam') || text.includes('sale'))
word = true;
else {
     word = false;
};
 return console.log(word);
 
 }
    
  
checkForSpam('Latest technology news'); // false
  
checkForSpam('JavaScript weekly newsletter'); // false
  
checkForSpam('Get best sale offers now!'); // true
  
checkForSpam('[SPAM] How to earn fast money?'); // true

