// Напиши скрипт, который, для объекта user, последовательно:
// 1 добавляет поле 'mood' со значением 'happy'
// 2 добавляет поле 'full time' со значением true
// 3 заменяет значение 'hobby' на 'skydiving'
// 4 заменяет значение 'premium' на false
// 5 в переменную message записывает содержимое объекта user:
//  - для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
//  - с помощью оператора for...of
//  - в формате ключ: значение
//  - c переносом строки('\n')

let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

// 1, 2
user.mood = 'happy';
user['full time'] = true;

// 3, 4
Object.assign(user, { hobby: 'skydiving', premium: false });

// 5
const keys = Object.keys(user);

for (const key of keys) {
  message += ` ${key}: ${user[key]} ` + '\n';
}

console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */
