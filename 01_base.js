// 1 Переменные
// const firstName = 'Victor'
// const lastName = 'Izbitskiy' // string
// let age = 30 // number
// const isProgrammer = true // boolean

// console.log(isProgrammer)

// const _ = 'ok'
// const $ = 'ok'

// const if = 'ssd' // err
// const withNum5 = 5
// const 5withNum = 5 // err

// 2 Мутирование
// console.log('Name: ' + firstName + ', age:' + age )
// alert('Name: ' + firstName + ', age:' + age )

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2021
// const birthYear = 1991

// const age = currentYear - birthYear

// const a = 10
// const b = 5

// let c = 32
// // c = c + a 
// c += a 
// c -= a 
// c *= a 
// c /= a 

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear++)
// console.log(currentYear)
// console.log(c)

// Типы данных

// const isProgrammer = true
// const name = 'Victor'
// const age = 30
// let x

// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)  // >> object
// console.log(null)  

// 5 Приоритет операторов

// const fullAge = 30
// const birthYear = 1991
// const currentYear = 2021

// > < >= <=
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// const isFullAge = currentYear - birthYear >= fullAge // >> true

// console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'pending' // ready, fail, pending

// if (courseStatus === 'ready') {
//   console.log('Курс готов')
// } else if (courseStatus === 'pending') {
//   console.log('Курс в процессе разработки')
// } else{
//   console.log('Курс не получился :(')
// }

// // 
// const num1 = 42 // number
// const num2 = '42' // string

// console.log(num1 == num2) // >> true, т.к. выполняется приведение типа к string
// console.log(num1 === num2) // >> false, т.к. число не равно строке

// Тернарные выражения
// const isReady = true

// if (isReady === true) {
//   console.log('Все готово!')
// }else {
//   console.log('Все не готово')
// }

// isReady ? console.log('Все готово!') : console.log('Все не готово')

// 7 Булева логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 8 Функции
// function calculateAge(year) {
//   return 2021 - year
// }

// const myAge = calculateAge(1991)
// console.log(myAge)

// function logInfoAbout(name, year) {
//   const age = calculateAge(year)

//   if (age > 0) {
//     console.log(' Кандидат' + name + ', возраст ' + age)
//   } else {
//     console.log('Вообще-то, это уже будущее')
//   }

// }

// logInfoAbout('Мария', 1990)
// logInfoAbout('Мария', 2022)

// 9 Массивы

// const cars = ['Хонда', 'Мерседес', 'Камаз']

// const cars = new Array('Хонда', 'Мерседес', 'Камаз')
// console.log(cars)
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])
// console.log(cars[3])

// console.log(cars.length)

// cars[0] = 'Porsche'
// console.log(cars)
// cars[cars.length] = 'Хонда'
// console.log(cars)

// 10 Циклы 
// const cars = ['Хонда', 'Мерседес', 'Камаз']

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i]
//   console.log(car)
// }

// for (let car of cars) {
//   console.log(car)
// }

// 11 Объекты

const person = {
  firstName: 'Victor',
  lastName: 'Izbitskiy',
  years: 30,
  languages: ['Ru', 'En', 'De'],
  hasWife: false,
  greet: function () {
    console.log('greet from person')
  }
}
console.log(person.firstName);
console.log(person['lastName']);
const key = 'languages'
console.log(person[key])
person.hasWife = true
console.log(person.hasWife)
person.isProgrammer = true
console.log(person)
person.greet()