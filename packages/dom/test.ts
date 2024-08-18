import test from './internal/test'
import camelize from './internal/camelize'
import getStyle from './getStyle'
import setStyle from './setStyle'
import hasClass from './hasClass'
import addClass from './addClass'
import removeClass from './removeClass'
import toElement from './toElement'
import getIndex from './getIndex'
import { off, on } from './events'

const app = document.querySelector<HTMLDivElement>('#app')!
const h1 = document.createElement('h1')
h1.textContent = 'Hello Vite!'
app.appendChild(h1)

test('驼峰命名函数', ()=> {
  const string = 'margin-left'
  console.assert(camelize(string) === 'marginLeft')
})

test('getStyle', ()=> {
  const div = document.createElement('div')
  app.appendChild(div)

  div.style.width = '180px'
  div.style.height = '100px'
  div.style.backgroundColor = 'rgb(0, 128, 0)'
  console.assert(getStyle(div, 'width') === '180px')
  console.assert(getStyle(div, 'height') === '100px')
  console.assert(getStyle(div, 'background-color') === 'rgb(0, 128, 0)')
})

test('setStyle', ()=> {
  const div = document.createElement('div')
  app.appendChild(div)

  setStyle(div, {
    width: '180px',
    height: '100px',
    backgroundColor: 'yellow',
    marginBottom: '20px',
    'line-height': '1.5'
  })
  setStyle(div, 'paddingTop', '10px')
  setStyle(div, 'margin-top', '20px')
  setStyle(div, 'border', '1px solid red')

  console.assert(div.style.width === '180px')
  console.assert(div.style.height === '100px')
  console.assert(div.style.backgroundColor === 'yellow')
  console.assert(div.style.marginBottom === '20px')
  console.assert(div.style.lineHeight === '1.5')
  console.assert(div.style.paddingTop === '10px')
  console.assert(div.style.marginTop === '20px')
  console.assert(div.style.border === '1px solid red')
})

test('addClass', ()=> {
  const div = document.createElement('div')
  div.textContent = 'addClass'
  app.appendChild(div)
  setStyle(div, {
    width: '100px',
    height: '100px'
  })
  div.classList.add('border-grey')
  addClass(div, 'red')
  addClass(div, 'blue')
  addClass(div, 'a1 a2 a3')
  addClass(div, 'b1', 'b2', 'b3')
  addClass(div, ['c1', 'c2'], ['c3', 'c4'])
  console.assert(!!div.getAttribute('class'), 'border-grey red blue a1 a2 a3 b1 b2 b3 c1 c2 c3 c4')
})

test('removeClass', ()=> {
  const div = document.createElement('div')
  app.appendChild(div)
  setStyle(div, {
    width: '100px',
    height: '100px'
  })
  div.classList.add('border-grey')
  addClass(div, 'red', 'blue', 'a1', 'a2', 'a3', 'b1', 'b2', 'b3')

  removeClass(div, 'red')
  removeClass(div, 'a1 a2')
  removeClass(div, 'b2', 'b3')
  console.assert(div.getAttribute('class') === 'border-grey blue a3 b1')
})

test('hasClass', ()=> {
  const div = document.createElement('div')
  div.textContent = 'hasClass'
  app.appendChild(div)
  div.classList.add('border-grey')
  div.classList.add('red')
  div.classList.add('blue')
  console.assert(hasClass(div, 'border-grey') === true)
  console.assert(hasClass(div, 'blue') === true)
  console.assert(hasClass(div, 'red') === true)
})

test('event delegation', () => {
  const app = toElement(`
    <div class="app"><button id="button">我是按钮</button></div>
  `)

  document.body.appendChild(app)
  const button = app.querySelector('#button')

  on(app, 'click', '#button', (e) => {
    console.log(e)
  })

  off(button, 'click', (e) => {
    console.log(e)
  })
})

test('getIndex', () => {
  console.log(getIndex(document.body))
  console.log(getIndex(null))
})
