
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