'use strict';

const calcAge = function (birthYear, nowYear){
  let age;
  return age = birthYear >= 1999 ? nowYear - birthYear : `give a valid yr`;
}
console.log(calcAge(1998, 2021))
console.log(calcAge(2000, 2021))

// arrow functions
const firstName = `mr.mohanraj`
let age = 22

const yearsUntillRetire = (birthYear, firstName) => {
  const retirementyear = 65;
  let shouldRetire = retirementyear - age
  var x= 90;
  if (1){
    let x = 90;
  }
  return `${firstName}, retirement ${shouldRetire} in years `
}
const tempVar = yearsUntillRetire(1999,`${firstName}`)
console.log(tempVar)
// console.log(x)
// console.log(x)

//if-else

var x = 90;
if (1){
  let x = 89;
  // x = x;no error
  // let x = x;// 
  console.log((x))//arrow_function.js:34 Uncaught ReferenceError: Cannot access 'x' before initialization
}
console.log(x)//90
