/**********A user who enters the input(integers) through prompt. it should then print the multiplication table of that number*/

/*const promptVal = prompt('Enter your number that you want to be multiplicated till 10')

let rep = 0;

while (rep <= 10) {
  console.log(`${rep} * ${promptVal} = ${rep * promptVal}`)
  rep++;
}

/***************find factorial numbers !!*/
// let x = 1;

// x*=i
/*
for (i = 1; i <= promptVal; i++) {
  x *= i;
  console.log(x)//24
}

/**Two numbers are entered through the keyboard. Write a program to find the value of one number raised to the power of another*/

// let num = [2, 3, 1]
// let x = num[0]
// for (i = 1; i < num.length; i++) {
//   x **= num[i]
// }
// console.log(x)

/************find duplicate value */
// let num = [1, 2, 3, 4, 3, 4, 6]
// let newArr = [];

// for (i = 0; i < num.length; i++) {
//   let x = 0;
//   for (j = 1; j < num.length; j++) {
//     if (num[i] === num[j]) {
//       newArr.push(j)
//     }
//   }
//   j = 0;
// }
// console.log(newArr)

//try with includes and indexof

/*********Write a program that prompts the user to input an integer and then outputs the number with the digits reversed. For example, if the input is 12345, the output should be 54321. */

// let num = [1, 2, 3, 4, 5]
// let newArr = [];
// for (let i = num.length; i > 0; i--) {
//   console.log(newArr.push(i))
// }
// console.log(newArr)// (5) [5, 4, 3, 2, 1]

/****************Write a program that reads a set of integers, and then prints the sum of the even and odd integers. */

let integers = [23, 45, 56, 78, 44, 55, 89]
let even = [];
let add = new Array();

let i = 0;
while (i < integers.length) {
  if (integers[i] % 2) {
    even.push(integers[i])
  } else {
    add.push(integers[i])
  }
}

console.log(even)
console.log(add)