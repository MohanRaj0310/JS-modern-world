
const mohan = [
  'mohanraj',
  22,
  true,
  false,
  2021-1999,
  [233, `console.log('logging something')`, false, !true],
  console.log('hey developer console'),
]

console.log(mohan)

for (let i =0; i < mohan.length; i++){
  console.log(`array[i] is ${mohan[i]},`, typeof mohan[i])
}

/*************creating a new array based on original array*******/

const years = [1999, 2013, 2017, 1875]
const ages= [];
const agesNew = new Array()

for(i = 0;i < years.length ;i++){
  ages.push(2021 - i)
  agesNew.push(typeof ages[i])
  // this.afterLoopPush.push(i)LoopArray_Break_con.js:27 Uncaught TypeError: Cannot read properties of undefined (reading 'push')
  // afterLoopPush.push(i)LoopArray_Break_con.js:28 Uncaught ReferenceError: afterLoopPush is not defined
}

// afterLoopPush = [];

console.log(ages, agesNew)
/*
const newArray = [];
j = mohan.length;

for(i = j; i > 0; x = i--){
  newArray[i] = mohan[i]
}

console.log(newArray)
console.log(i)//0
console.log(x)//1

const emptyArray = [];
emptyArray[7] = 7;
emptyArray[6] = '6'
console.log(emptyArray)
console.log(emptyArray.indexOf(7))//7
*/

/******************strict and lose not equal operator */

// console.log(90 != '90')//false
console.log(90 !== '90')//true
console.log(90 != '90')//false
console.log('string' !== 'string')//false
console.log('string' != 'string')//false
console.log('opop' === 'cjjicr')//false
console.log('opop' === 'opop')//true
console.log('op' == 'op')//true
console.log('opioie' == 'dede')//false

/********strict not equality operator*/
const a = 2, b = 'hello';
console.log()
// strict not equal operator
console.log(a !== 2); // false
console.log(a !== '2'); // true
console.log(b !== 'Hello'); // true
console.log(90 !== '90')//true

/*************losing not equality operator */
console.log(`!=`)
const c = 3, d = 'hello';

// not equal operator
console.log(c != 2); // true
console.log(d != 'Hello'); // true
console.log('hello' == 'Hello', 'Hello' === 'hello')//false, false
console.log(90 != '90')//false

/***************************continue */

const array = [
  
  22,
  true,
  false,
  'mohanraj',
  2021-1999,
  'bangalore',
  [233, `console.log('logging something')`, false, !true],
  console.log('hey developer console'),
  {
    fullName: 'mohanraj',
  },
]
//get a string type only from an array and should be stored that in an new array
let newArray = [];

for (i = 0; i < array.length; i++){
  if (typeof array[i] !== 'string') continue;
  if (typeof array[i] === 'object') {
    break
    // return console.log('im from object array')//Uncaught SyntaxError: Illegal return statement
  }
  newArray.push(array[i])
}
console.log(newArray)
console.log(i)
// console.log(x)//true

if (0) {
  // return //Uncaught SyntaxError: Illegal return statement
} else {
  // break;//Uncaught SyntaxError: Illegal break statement
}