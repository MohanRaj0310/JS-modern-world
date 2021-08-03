let y = 90
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

//backward array storing
const newArray = [];

for (let i = arrayMohan.length - 1; i >= 0; x = i--){
  newArray.push(arrayMohan[i])
  // console.log(arrayMohan[i])
}

console.log(newArray)
console.log(x)//0
console.log(arrayMohan)
console.log(arrayMohan.length)//9

//Nested Loop

for (i = 1; i <= 3; i++){
  console.log(`Title -${i}`)
  // console.log(j)//j is not defined
  for (j = 1; j <= 3; j++){
    console.log(`subtitle ${i}-${j}`)
    // console.log(i)
  }
}

if (0){
  let num = 90;
} else {
  // console.log(num)//Uncaught ReferenceError: num is not defined
}

let newMohanArray = [];
for (i = 0; i < arrayMohan.length; i++){
  newMohanArray[i] = arrayMohan.pop()
}

console.log(newMohanArray === arrayMohan)//false
console.log(newMohanArray)
console.log(arrayMohan.length)//4