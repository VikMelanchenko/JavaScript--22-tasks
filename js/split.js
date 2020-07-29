// Подсчет стоимости гравировки украшений
// Напиши скрипт подсчета стоимости гравировки украшений.Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0) принимающую строку(в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// Для решения этой задачи не используйте циклы.Т.е.никаких for, while, do while, for of, for in, forEach или функциональных методов.

// для решения задачи использовалась стрелочная функция. с помощью split разбили сообщение на массивы, после чего посчитали длину и умножили на цену за слово.

const calculateEngravingPrice = (message = '', pricePerWord = 10) => {
  return message.split(' ').length * pricePerWord;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
  ),
);
