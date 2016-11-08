// Scope

const x = 5
let addNumbers = (a, b) => {
  let result = a + b
  return result
}

let res = addNumbers(5, 6)

console.log('res: ', res)
console.log('x: ', x)

// Spread operator

let firstList = [1, 2, 3]
let secondList = [4, 5, 6]

// firstList.push(secondList)
firstList.push(...secondList)
console.log(firstList)

let addThreeNumbers = (a, b, c) => {
  return a + b + c
}

console.log('Sum1: ', addThreeNumbers(...firstList))
console.log('Sum2: ', addThreeNumbers(...secondList))

// String templates
function reformat (strings, ...values) {
  console.log(strings)
  console.log(values)
  values[1] = 'good'
  return `It's ${values[0]}, ${strings[1]} ${values[1]}`
}

const message = reformat `${new Date().getHours()} I'm ${''}`

console.log(message)

// Destructuring assignment
let person = {
  name: 'Mike',
  surname: 'Doe',
  age: 34
}

let {name: firstName, surname} = person

console.log('Name: ', firstName)
console.log('Name: ', surname)

var [first,,,,
  fifth] = [1, 2, 3, 4, 5]

console.log(first)
console.log(fifth)

var people = [
  {
    name: 'Mike',
    age: 35
  }, {
    name: 'John',
    age: 36
  }, {
    name: 'Evan',
    age: 37
  }
]

people.forEach(({name}) => console.log(name))

var [,
  second] = people // skip first one

function logAge ({age}) {
  console.log('age ', age)
}

logAge(second)

// ES6 modules
import * as mathOperations from 'utils/math'

console.log('sum of two ', mathOperations.addTwo(1, 2))
console.log('product of two ', mathOperations.multiply(2, 2))

import * as _ from 'lodash'
import {users} from 'data/users'

console.log(_.where(users, {age: 36}))

// Converting array-like object into Array with Array.from()

const products = document.querySelectorAll('.product')

// NodeList
console.log(products)

// Create array from NodeList
const productsArray = Array.from(products)

console.log(productsArray)

productsArray.filter(product => parseFloat(product.innerHTML) < 10).forEach(product => {
  product.style.color = 'red'
})

console.log(productsArray.filter((product) => {
  console.log(product.innerHTML)
  return parseFloat(product.innerHTML) < 10
}))

// Promises with ES6

let d = new Promise((resolve, reject) => {
  let status = true
  setTimeout(() => {
    if (status) {
      resolve('Hello world')
    } else {
      reject('rejected')
    }
  }, 200)
})

d.then((data) => {
  console.log('succes ', data)
  throw new Error('Error thrown')
  // return 'foo'
}).then((data) => console.log('success 2', data)).catch((error) => console.log('error', error))

// ES6 Generators - new breed of function https://davidwalsh.name/es6-generators
// ------------
function * greet () {
  let friendly = yield 'How'
  friendly = yield friendly + 'are'
  yield friendly + 'you?' // pause the function from inside itself
}

var greeter = greet()
console.log(greeter.next('first').value)
console.log(greeter.next(' the heck ').value)
console.log(greeter.next(" silly ol'").value)

// -----------
function * graph () {
  let x = 0
  let y = 0
  while (true) {
    yield {x: x, y: y}
    x += 2
    y += 1
  }
}

var graphGenerator = graph()
console.log(graphGenerator.next().value)
console.log(graphGenerator.next().value)
console.log(graphGenerator.next().value)
console.log(graphGenerator.next().value)
console.log(graphGenerator.next().value)
console.log(graphGenerator.next().value)
console.log(graphGenerator.next().value)
console.log(graphGenerator.next().value)

// Maps and WeakMaps Maps map key can be anything set() get() size clear() has()

let myMap = new Map()
// let myMap = new WeakMap() // WeakMap, string cannot be used as key

myMap.set('foo', 'bar')
myMap.set('hello', 'world')

console.log(myMap.size)
console.log(myMap.get('foo'))
console.log(myMap.has('foo'))
console.log(myMap.has('x'))

var myObj = {}
var myFunc = () => {
  return 'foo'
}

myMap.set('func', myFunc)
myMap.set(myObj, myObj)
// Iterators keys() values entries() no available for WeakMap

for (var [key,
  value] of myMap.entries()) {
  console.log(key + ' = ', value)
}

// ES6 parameter Object Not only can you provide default values when using ES6
// parameter object destructuring, but you can also require the presence of
// certain properties console.clear()

function ajax ({
  type = 'get',
  url = requiredParameter('url'),
  data = {},
  success = requiredParameter('success'),
  error = () => {},
  isAsync = true
} = {}) {
  console.log(JSON.stringify({
    type,
    url,
    data,
    success,
    error,
    isAsync
  }, null, 2))
}

function requiredParameter (name) {
  throw new Error(`Missing parameter "${name}"`)
}

try {
  ajax({
    url: 'https://my.api.io',
    success: () => {}
  })
} catch (e) {
  console.warn(e.message)
}

// ES6 rest parameters vs arg keywords

function myFunction () {
  // Arguments is array-like but it doesnt have forEach available because its  not
  // Array prototype arguments.forEach(function (v, i, a) {   console.log(v)
  // console.log(i)   console.log(a) })
  console.log('args: ', arguments)
  console.log('args length: ', arguments.length)
}

myFunction(1, 2, 3)

function Store () {
  var aisle = {
    fruit: [],
    vegetalbe: []
  }
  return {
    // Store().add('category', 'item1', 'item2');
    add: function (category, ...items) {
      // var items = [].splice.call(arguments, 1); // old way of transforming arguments to array
      console.log(items)
      items.forEach(function (value, index, array) {
        aisle[category].push(value)
      })
    },
    aisle: aisle
  }
}

var myGroceryStore = new Store()

myGroceryStore.add('fruit', 'apples', 'oranges')
console.log(myGroceryStore.aisle)
