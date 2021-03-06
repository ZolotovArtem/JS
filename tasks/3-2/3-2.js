/*
Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

const countProps = function(obj) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
 */

 
const countProps = function(obj) {
let counter = 0;
for (const key in obj) {
  counter++ 
}
return console.log(counter);

};

countProps({}); // 0
countProps({ name: 'Mango', age: 2 }); // 2
countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // 3