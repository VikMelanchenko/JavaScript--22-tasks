// const friends = ['mango', 'kiwi', 'poly', 'ajax'];

// console.table(friends);

// friends[1] = 'qweqwe';
// friends[2] = 'top';
// friends[3] = 'flowers';

// console.table(friends);

// посчитать общую сумму в корзине
// --------------------------------------------------------------------------------------------------------------------------------------
// Задача

const cart = [54, 28, 105, 70, 92, 17, 120];

// сделать переменную total цикла
let total = 0;

// // 1 перебрать массив

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);

//   // 2 каждый элемент приплюсовать к total
//   total = total + cart[i];
// }

// console.log('Total', total);

// // 3 каждый элемент приплюсовать к total

// вариант 2 c использованием for of

for (const value of cart) {
  total += value;
}
console.log('Total', total);

// --------------------------------------------------------------------------------------------------------------------
