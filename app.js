const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0] // старый и медленный метод
// const heading2 = document.getElementsByClassName('h2-class')[0] // старый и медленный метод
// const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('#sub-hello')

console.dir(heading2)
// 1 способ
// const heading3 = heading2.nextElementSibling
// console.log(heading3)
// 2 способ
const h2List = document.querySelectorAll('h2')
console.log(h2List);
const heading3 = h2List[h2List.length - 1]
console.log(heading3)

setTimeout(() => {
  addStylesTo(heading, 'Изучай JavaScript', 'white')
}, 1000)

const link = heading2.querySelector('a')
link.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Click on link', event.target.getAttribute('href')) // отменяем преход по ссылке
  const url = event.target.getAttribute('href')
  window.location = url
})

setTimeout(() => {
  addStylesTo(link, 'Практикуйся', 'blue') // либо через querySelector
}, 2000)

setTimeout(() => {
  addStylesTo(heading3, 'и все получится!', 'red', '2rem')
}, 3000)

function addStylesTo(node, text, color = 'red', fontSize) {
  node.textContent = text
  node.style.color = color
  node.style.textAlign = 'center'
  node.style.backgroundColor = '#000'
  node.style.padding = '1rem'
  node.style.display = 'block'
  node.style.width = '100%'

  // folsy: '', undefined, null, 0, false
  if (fontSize) {
    node.style.fontSize = fontSize
  }
}

heading.onclick = () => {
  if (heading.style.color === 'white') {
    heading.style.color = 'green'
    heading.style.backgroundColor === '#fff'
  } else {
    heading.style.color = 'white'
    heading.style.backgroundColor === '#000'
  }
}

heading2.addEventListener('dblclick', () => {
  if (heading2.style.color === 'blue') {
    heading2.style.color = 'red'
    heading2.style.backgroundColor === '#fff'
  } else {
    heading2.style.color = 'blue'
    heading2.style.backgroundColor === '#000'
  }
})