// String

// const name = 'Виктор'
// const age = 30

<<<<<<< HEAD
// function getAge() {
//   return age
// }
// const output = 'Привет! Меня зовут ' + name + '. Мне ' + age + ' лет.'
// const output = `Привет! Меня зовут ${name}. Мне ${getAge()} лет.`
// const output = `Привет! Меня зовут ${name}. Мне ${age < 20 ? 'A': 'B'} лет.`
// console.log(output)

// const output = `
// <div>This is div</div>
// <p>This is p</p>
// `

// console.log(output)

// const myName = 'Виктор'

// console.log(myName.toString())
// console.log(myName.toUpperCase())
// console.log(myName.charAt(2)) // к
// console.log(myName.indexOf('тор')) // 3
// console.log(myName.startsWith('вик')) // false
// console.log(myName.toLocaleLowerCase().startsWith('вик')) // true
// console.log(myName.endsWith('тор')) 
// console.log(myName.repeat(3))

// const string = '         password      '
// console.log(string.trim());
// console.log(string.trimLeft());
// console.log(string.trimRight());

function logPerson(s, name, age) {
  // console.log(s, name, age);
  if (age < 0) {
    age = 'Еще не родился'
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Виктор'
const personName2 = 'Эдуард'
const personAge = 30
const personAge2 = -30

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!` // позволяет добавлять валидацию 
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`
console.log(output);
console.log(output2);

