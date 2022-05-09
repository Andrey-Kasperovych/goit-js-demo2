/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */

// const stars = 1;
// let price;

// const stars = Number(prompt("Вітаю. Скільки зірковий готель вас цікавить?"));
// let price = 0;

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;
  
//   case 3:
//     price = 30;
//     break;

//   case 4:
//     price = 50;
//     break;

//   case 5:
//     price = 100;
//     break;
    
//   default:
//     console.log("Такого количества звезд нету");

// };

// console.log(`Вы выбрали отель ${stars} звезд. Цена одной ночи ${price}$`);


// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такого кол-ва звезд нет');
// }

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такого кол-ва звезд нет');
// }

// console.log(price);


// for (let i = 1; i < 5; i += 1) {
//   console.log(i);
// }




/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */

// const stars = 1;
// let price;

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 30;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такого кол-ва звезд нет');
// }

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

//  1. сделать переменные
// const option = 1;
// let message = '';

// 2. сделать switch 1 2 3
// 3. в каждом кейсе записать в message строку
// switch (option) {
//   case 1:
//     message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
//     break;

//   case 2:
//     message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
//     break;

//   case 3:
//     message = 'Посылка будет отправлена сегодня';
//     break;

//   default:
//     message = 'Вам перезвонит менеджер';
// }

// 4. сделать лог message
// console.log(message);

// function multiple(a, b) {
//   const c = a * b;
//   return c;
// }

// console.log(multiple(2, 3));

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// function getExtremeElements(array) {
//   // Change code below this line
//  return [array[0], array[array.length - 1]];

//   // Change code above this line
// }

// getExtremeElements([1, 2, 3, 4, 5]);

// function findLongestWord(string) {
//   // Change code below this line

//    const massive = string.split(" ");
//    let longestWord = massive[0];

//    for (let i = 0; i < massive.length; i += 1) {
     
//      if (longestWord.length < massive[i].length) {
//         longestWord = massive[i];
//      };
     
//    };
//    console.log(longestWord); 
//    return longestWord;   

//   // Change code above this line
// }

// findLongestWord("May the force be with you");

// function getCommonElements(array1, array2) {
//   // Change code below this line

//  let newMassive = [];

//  for (let i = 0; i < array1.length; i += 1) {
//    if (array2.includes(array1[i])) {
//      newMassive.push(array1[i]); 
//    }
//  }
 
//   console.log(newMassive);
//  return newMassive;
//  // Change code above this line
// }

// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

// function foo(array) {
//   for (let i = 0; i < array.length; i += 1) {
//      array[i] *= 2;
//   };
// }

// let numbers = [3, 2, 1];

// console.log(foo(numbers));
// console.log(numbers);

// function addToMassive(massive) {
//   for (const element of massive) {
//     // massive[arguments.indexOf(argument)] = argument;
//     console.log(massive.indexOf(element));
//     console.log(massive[massive.indexOf(element)]);
//     console.log(`Маємо елемент масиву ${massive[massive.indexOf(element)]} з індексом ${(massive.indexOf(element))}`)
//   }
//   console.table(massive);
// };

// addToMassive([1, 3, 5]);

// const carts = [12, 54, 72, 33, 154, 33, 67, 48];

// let total = 0;

// // for (const cart of carts) {
// //   total += cart;
// // }

// for (let i = 0; i < carts.length; i += 1) {
//   total += carts[i];
// }

// console.log(total);

const massive = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

let total = 0;

for (let value of massive) {
  if (value % 2 === 0) {
    total += value;
  }
};

console.log('Total: ', total);



