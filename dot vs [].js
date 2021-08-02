// 'use strict';
let y = 78
const arrayMohan = [
  'mohanraj',
  2021-1999,
  'webdeveloper',
  false,
  `${true || false}`,
  console.log(`i'm from an array`),
  ['raj', 'sakthi', 'viki'],
  y++,
  undefined,
]

let x = 90;
const mohan = {
  firstName: 'mohan',
  lastName: `raj`,
  job: 'software developer',
  year: '1999',
  friends: ['raj', 'sakthi', 'viki'],
  x : 23,
  y: x++,
  _console: console.log('from an object'),
  undefined: undefined,
  if : null,
}

/*******************************Dot is an operator*/
console.log(mohan)
console.log(mohan.if)//null
console.log(mohan.undefined)//undefined
console.log(mohan.year)
// console.log(mohan.x = year)//error
console.log(2021 - mohan.year)
const nameAdd = 'Name'
console.log(mohan.first+nameAdd)//undefined name..actaully trying to print firstname from mohan
// console.log(mohan.'lastName')//unexpected string
console.log(mohan.obj)//undefined
// console.log(mohan.method())//is not a function
console.log(mohan.arrayMohan)//undefined
// console.log(mohan.'year')//unexpected string

/********************************Bracket Notation*/
console.log(mohan['_console'])
console.log(mohan['year'])//1999
console.log(2021 - mohan[x = 'year'])//22
console.log(x, typeof x)//year string
console.log(mohan[1], mohan[3])//undefined
// console.log(mohan[year])//is not defined
const nameStr = 'Name'
console.log(mohan['first' + nameStr])//mohan
console.log(mohan['ertica'])//undefined
console.log(mohan)

console.log(Object)
console.log(typeof Object)
console.log(Object(), typeof Object(), /*mohan()*/)//mohan is not a function

/***********************************exist vs nonexist(undefined)**************/

// const objDia = prompt('what type of info do you need from obj')
// console.log(objDia)//if

// console.log(mohan.objDia)//undefined for non-exist
// console.log(mohan[objDia])//null

/**mutate an object */
mohan.year = 2021;
mohan.if = undefined;
mohan.lastName = `kumar`
console.log(mohan)

/*retrieve an object property and add a property*/ 

 mohan.isTired = false
 mohan['lastProperty'] = 'last Property'
 console.log(mohan)


 ///challenge mohan has 3 freinds and his friend is called sakthi

 console.log(`mohan has ${mohan.friends.length} freinds and his best freind is called ${mohan.friends[mohan.friends.length-1]}`)
 console.log(mohan[mohan._console])
 console.log(mohan[mohan.year])//undefined
 console.log(mohan['mohan.year'])//undefined