// переменные

const credits = 23580;
const pricePerDroid = 3000;
let orderPieces = 4;

const totalPrice = pricePerDroid * orderPieces;
const balanceCredit = credits - totalPrice;

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let message;

// 1. Если покупка totalPrice меньше < баланса credits, значит выводим сообщение 'Вы купили ${} дроидов, на счету осталось ${} кредитов';
// 2. Если покупка totalPrice больше > баланса credits, значит выводим сообщение 'Недостаточно средств на счету!';
// 3. Если введено null, значит выводим сообщение 'Отменено пользователем!' или во всех сотальных случаях.

if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (totalPrice > credits) {
  message = ACCESS_DENIED;
} else {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
}

console.log(message);
