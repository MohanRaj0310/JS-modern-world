//Array and object are an non-primitive datatype

const friends = ['mohan','viki','thadi',2023-2019, 'developer', 'bangalore', !true]

friends[6] = false//mutable
console.log(friends)
console.log(typeof friends)//object
// friends = [false, friends]Uncaught TypeError: Assignment to constant variable.///*************immutable */


console.log(x = friends.length)
// console.log([friends(friends.lengt/h -1)]);
console.log(friends[friends.length - 1])
console.log(friends[6])

const newArray = [friends[6], 2019, 'marvelvous one', friends]

console.log(newArray)
console.log(newArray[3])


// another way of declaring an array

const array1 = new Array('webdeveloper', 'my freinds are ${friends.length}', 2021 + ' is worst')// Array is function here. note paranthesis comes up
console.log(typeof Array) //function
console.log(typeof array1)//object

console.log(array1)
console.log(Array)//ƒ Array() { [native code] }
array1[0] = `webdesigner`
// array1(3) = 'dej'//is not function
console.log(array1)

//ages calculation

const calcAge = function (birthYear) {
  x = birthYear;
  // return 2021 + birthYear;//20211999,1993,1992,1920 == string type
  return 2021 - birthYear;
}

const years = [1999, 1993, 1992, 1920]

console.log(calcAge(years))//NaN
console.log(calcAge(years[1]))//28

const ageLast = calcAge(years[years.length - 1])//function expression just produce a value. so we call easily. Remember, array accepts expressions 
console.log(ageLast)//101

const perfectAgeFinder = [calcAge(years[0]),calcAge(years[1]),calcAge(years[2]),calcAge(years[years.length - 1])]
console.log(perfectAgeFinder)//(4) [22, 28, 29, 101]

const perfectAgeFinder1 = `${calcAge(years[0])} ${calcAge(years[1])} ${calcAge(years[2])} ${calcAge(years[3])}`//22 28 29 101
console.log(perfectAgeFinder1)

const strArray = String(years)
console.log(strArray,typeof strArray)//1999,1993,1992,1920 string
const arryStr = Array(strArray)
console.log(arryStr, typeof arryStr)//['1999,1993,1992,1920'] 'object'


console.log(Number(years))//NaN
console.log(Boolean(years))//true
console.log(x = Object(years))//as same as array format
console.log(typeof x)//object




/*//WE CAN'T DO operations with array
console.log(x)//[1999, 1993, 1992, 1920]
console.log(years+10)//1999,1993,1992,192010 //all prints in string*************
console.log(years-10)//NaN
console.log(years * 10)//NaN 
*/

function add (){
  return 90+90
}

console.log(add(), add())//180 180

x = [add(), add()]
console.log(x)