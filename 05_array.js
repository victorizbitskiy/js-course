const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
// const people = [
//   { name: 'Victor', budget: 4200 },
//   { name: 'Maria', budget: 4200 },
//   { name: 'Alex', budget: 200 },
// ]
const fib = [1, 1, 2, 3, 4]

// cars.push('Тесла')
// console.log(cars);

// cars.unshift('Рено')
// console.log(cars);

// const firstCar = cars.shift()
// console.log(firstCar);
// console.log(cars);

// cars.push('Тесла')
// console.log(cars);


// const lastCar = cars.pop()
// console.log(lastCar);
// console.log(cars);

// console.log(cars.reverse());

// const index = cars.indexOf('БМВ')
// const car = cars[index]
// console.log(car); 

// const index = people.findIndex(function (person) {
//   return person.budget === 200
// })
// console.log(people[index]);

// 1 способ
// let findedPerson
// for (const person of people) {
//   if (person.budget === 200) {
//     findedPerson = person
//   }
// }

// console.log(findedPerson)

// 2 способ
// const person = people.find(function (person) {
//   return person.budget === 200
// })
// console.log(person);

// 3 способ
// const person = people.find( person => person.budget === 200 )
// console.log(person);

// console.log(cars.includes('Мазда'));


// const upperCaseCars = cars.map(car => {
//   return car.toUpperCase()
// })

// console.log(upperCaseCars);

// const pow2 = num => num ** 2

// const pow2Fib = fib.map(pow2) // здесь не вызывем функцию, а передаем
// const filteredNumbers = pow2Fib.filter(num => num > 4)
// console.log(pow2Fib);
// console.log(filteredNumbers);

// const sqrt2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(sqrt2Fib);


// Задача 1
// const text = 'Привет! Мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('') // >> tpircSavaJ меачузи ыМ !тевирП
// console.log(reverseText);

// Задача 2

// const people = [
//   { name: 'Victor', budget: 4200 },
//   { name: 'Maria', budget: 4200 },
//   { name: 'Alex', budget: 200 },
// ]

// acc - аккумулятор, обновляется на каждой итерации 
// people - итерируемый массив
// 0 - начальное значение
// const allBudget = people
//   .filter(person => person.budget > 2000)
//   .reduce((acc, person) => {
//     acc += person.budget
//     return acc
//   }, 0)

// console.log(allBudget);

// const allItems = []
// const displaytems = allItems.filter(item => item.name.indexOf('phone') !== -1)
