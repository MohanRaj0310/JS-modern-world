//Array and object are an non-primitive datatype

const friends = ['mohan','viki','thadi',2023-2019, 'developer', 'bangalore', !true]

friends[6] = false//mutable
console.log(friends)

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



