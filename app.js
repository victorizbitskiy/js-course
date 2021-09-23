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
const isReady = true

// if (isReady === true) {
//   console.log('Все готово!')
// }else {
//   console.log('Все не готово')
// }

isReady ? console.log('Все готово!') : console.log('Все не готово')


