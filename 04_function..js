// 1 Функции

// Function Declaration

function greet(name) {
  console.log('Привет', name);
}

// Function Expression
const greet2 = function greet2(name) {
  console.log('Привет 2', name);
}

// greet('Мария')
// greet2('Мария')

// console.log(typeof greet) // >> function, но это не тип данных
// console.dir(greet) // функции на самом деле принадлежат объекту

// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function () { // setTimeout
//   if (counter === 5) {
//     clearInterval(interval) // clearTimeout
//   } else {
//     console.log(++counter);
//   }

// }, 1000)

// 3 Стрелочные функции
// function greet(name) {
//   console.log('Привет', name);
// }

// const arrow = (name) => {
//   console.log('Привет', name);
// }

// arrow('Виктор')

// const arrow2 = name => console.log('Привет', name);
// arrow2('Виктор')

// const pow2 = num => num ** 2
// console.log(pow2(5))

// // 4 Параметры по умолчанию
// const sum = (a = 40, b = 2 * 1) => a + b
// console.log(sum(41, 1));
// console.log(sum())

// function sumAll(...all) { // rest

//   let result = 0
//   for (let num of all) {
//     result += num
//   }
//   return result
// }

// const res = sumAll(1, 2, 3, 4)

// console.log(res)


// 5 Замыкания
function createMember(name) {
  return function (lastName) {
    return name + ' ' + lastName
  }
}

const logWithLastName = createMember('Victor')
console.log(logWithLastName);
console.log(logWithLastName('Izbitskiy'));
console.log(logWithLastName('А'));