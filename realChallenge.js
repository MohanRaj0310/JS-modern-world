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

// let integers = [23, 45, 56, 78, 44, 55, 89]
// let even = [];
// let add = new Array();

// let i = 0;
// while (i < integers.length) {
//   if (integers[i] % 2) {
//     add.push(integers[i])
//   } else {
//     even.push(integers[i])
//   }
//   i++;
// }

// console.log(even)
// console.log(add)
// console.log('ayyoo')
// console.log(even)
// console.log(add)

// Write a program that prompts the user to input a positive integer. It should then output a message indicating whether the number is a prime number. 

/*********for one value */
// let x;
// function primeNum(int) {
//   let i = 1;
//   tempprime = [];
//   while (i <= int) {
//     if (int % i === 0) {
//       tempprime.push(i)
//     }
//     i++;
//   }
// }
// primeNum(23)
// console.log(tempprime)

// for mULTIPLE value

// let num = [90];
// let num_0 = []
// let num_1 = []
// let num_2 = []
// let num_3 = []
// let num_4 = []
// let num_5 = []

// for (let i = 0; i < num.length; i++) {
//   for (let j = 1; j <= num[i]; j++) {
//     if (num[i] % j === 0) {
//       num_0.push(j)
//       // console.log(`divisor of ${num[i]} are j}`)
//     }
//   }
// }
// console.log(num_0)

/*******finding divisors */
// function divisors(integer) {

//   var tmp = [];
//   for (var i = 2; i < integer; i++) {
//     if (integer % i == 0) {
//       tmp.push(i);
//     }

//   }
//   if (tmp.length == 0) {
//     return integer + " is prime"
//   } else {
//     return tmp
//   }

// };
// console.log(divisors(45))

/**************highest common factor  */
// ex: 4 --> 1, 2, 4
// ex: 10 --> 1, 2, 5
// highest common factor is 1,2

// function hcf(x, y) {
//   let arg_1 = []
//   let arg_2 = []
//   console.log(`${x}'s factors are following`)
//   for (let i = 1; i <= arg_1; i++) {
//     if (arg_1 % i == 0) {
//       arg_1.push(i);
//     }
//   }
//   for (let i = 1; i <= arg_2; i++) {
//     if (arg_2 % i == 0) {
//       console.log(i)
//       arg_2.push(i)
//     }
//   }
//   let i = 0;
//   let j = 1;
//   let hcf = [];
//   while (arg_2[j] < arg_1.length) {
//     if (arg_1[i] === arg_2[j]) {
//       hcf.push(arg_1[i])
//     }
//     i++;
//     j++;
//   }
//   return arg_2, arg_1;
// }
// let temp = [];
// let h_factor;
// console.log(hcf(4, 8))
// const hcf1 = (x, y) => {
//   for (i = 1; i <= x && i <= y; i++) {
//     if (x % i == 0 && y % i == 0) {
//       temp.push(sorter(i))
//     }
//   }
//   function sorter(i) {
//     while (i >= 200) {
//       return i
//     }
//   }
// }
// console.log(hcf1(400, 200))
// console.log(temp)
// console.log(temp)

// let hcf;
// // take input
// const number1 = prompt('Enter a first positive integer: ');
// const number2 = prompt('Enter a second positive integer: ');

// // looping from 1 to number1 and number2
// for (let i = 1; i <= number1 && i <= number2; i++) {

//   // check if is factor of both integers
//   if (number1 % i == 0 && number2 % i == 0) {
//     hcf = i;
//   }
// }

// // display the hcf
// console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);

/********************** program to find the HCF or GCD of two integers*/

// take input
// let number1 = prompt('Enter a first positive integer: ');
// let number2 = prompt('Enter a second positive integer: ');
// let number1 = 200;
// let number2 = 400;

// // looping until both numbers are equal
// while (number1 != number2) {
//   if (number1 > number2) {
//     number1 -= number2;
//   }
//   else {
//     number2 -= number1;
//   }
// }

// // display the hcf
// console.log(`HCF is ${number1}`);

// // console.log(45, prompt(23))