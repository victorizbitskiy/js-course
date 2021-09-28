//  Объекты

const person = {
  name: 'Виктор',
  age: 30,
  isProgrammer: true,
  languages: ['ru', 'en', 'de'],
  // 'complex key': 'Complex value',
  // ['key_' + (1 + 3)]: 'Computed key', // key_4
  greet() {
    console.log('green from person');
  },
  info() {
    console.info('Информация о человеке по имени', this.name);
  }
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person["complex key"])
// person.greet()

// person.age++
// person.languages.push('by')
// console.log(person);
// // person['key_4'] = undefined

// delete person['key_4']
// console.log(person.key_4);

// Деструктуризация
// const name = person.name
// const age = person.age
// const languages = person.languages

// const {name, age: personAge = 10, languages} = person
// console.log(name, personAge, languages)

// console.log(person);

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log('key:', key);
//     console.log('value:', person[key]);
//   }
// }


// Object.keys(person).forEach((key) => {
//   console.log('key:', key);
//   console.log('value:', person[key]);
// })

// Context
// person.info()

const logger = {
  keys() {
    console.log('Object Keys:', Object.keys(this));
  },

  keysAndValues() {
    Object.keys(this).forEach(key => { // стрелочные функции не создают свой контектс
      console.log(`"${key}": ${this[key]}`);
    })
  },

  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log('------Start-------');
    }

    Object.keys(this).forEach((key, index, array) => { 
      console.log(`"${key}": ${this[key]}`);
      if (between && index !== array.length - 1) {
        console.log('----------------'); 
      }
    })

    if (bottom) {
      console.log('------End-------');
    }
  }
}

// const bound = logger.keys.bind(person) // bind возвращает функцию
// bound()

// logger.keys.call(person) // call сразу вызывает функцию

// logger.keysAndValues.call(person)

// logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true]) // apply принимает два параметра. Первый контекст, второй массив
