// 1 Number
// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3 

// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER) 
// console.log('Math.pow 53', Math.pow(2, 53) - 1) 
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.NEGATIVE_INFINITY)
// console.log(Number.POSITIVE_INFINITY)
// console.log('2 / 0', 2 / 0)
// console.log(Number.NaN) // Not a Number
// console.log(typeof NaN) // number 
// const weird = 2 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(Number.isFinite(Infinity))

// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(stringInt + 2) // 402
// console.log(Number.parseInt(stringInt) + 2) // 42
// console.log(Number(stringInt) + 2) // 42
// console.log(+stringInt + 2) // 42

// console.log(parseInt(stringFloat) + 2) //42
// console.log(parseFloat(stringFloat) + 2) //42.42
// console.log(+stringFloat + 2) //42.42

// console.log(0.4 + 0.2) // 0.6000000000000001
// console.log((2 / 5) + 1 / 5) // 0.6000000000000001
// console.log(+(0.4 + 0.2).toFixed(1))
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// 2 BigInt

// console.log(900719925474099199999n - 90071992547409919999n)
// console.log(-900719925474099199999n)
// console.log(-900719925474099199999.232323n) //error

// console.log(10n - 4) // error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))

// console.log(5n / 3n) // 1n

// 3 Math

// console.log(Math.E)
// console.log(Math.PI)

// console.log(Math.sqrt(25))
// console.log(Math.pow(5, 2))
// console.log(Math.abs(-42));
// console.log(Math.max(42, 12, 56, 78, 256));
// console.log(Math.min(42, 12, 56, 78, 256));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.9));
// console.log(Math.round(4.9));
// console.log(Math.trunc(4.9));
// console.log(Math.random());
// console.log(Math.cos(0));

// 4 Example

// function getRandomBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log(getRandomBetween(10, 42))




<<<<<<< HEAD
=======
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
>>>>>>> d4f92720de368d8fc5f9a53f53833ec89a0c18f4
