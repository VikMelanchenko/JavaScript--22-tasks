// Пишем скрип, который подсчитывает сумму всех четных чисел в массиве

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
let total = 0;

// 1 переменная total

// 2 перебрать массив
for (const number of numbers) {
  // 3 на каждой итерации проверить элемент на четность
  if (number % 2 !== 0) {
    console.log('${number} - Четное');

    // 4 если четный + к total
    total += number;
  }
}

console.log('Total:', total);
