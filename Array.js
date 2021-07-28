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



//// challenge 
/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) �
GOOD LUCK �
*/
console.log(`This is coding challenge`)

let calcTip = bills => {
  if (bills >= 50 && bills <= 300){
    return x = 15/100;
  } else {
    return y = 20/100;
  }
}

let bills = [125, 555, 44]

let tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]

let total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]
console.log(total)

console.log(x, y)
console.log(bills, tips)//125,555,440.15,0.2,0.2
console.log(bills+90)//125,555,4490
console.log(09 + bills)//125,555,4490
console.log(bills-90)//NaN
console.log(bills*8)//NaN

console.log(bills + tips)