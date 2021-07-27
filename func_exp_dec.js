//function declaration
// console.log(calcAge(1999))

// let accessAge;//error after function calling
let accessAge;

function calcAge (birthYear){
  let nowAge = 2021 - birthYear
  accessAge = nowAge;
  return nowAge;
}

console.log(calcAge(1999))
console.log(accessAge)

//function expression

// calcAge2(1999);// Uncaught ReferenceError: Cannot access 'calcAge2' before initialization ...reason for that hoisting 
let calcAge2 = function (birthYear){
  let nowAge = 2021 - birthYear
  accessAge = nowAge;
  return nowAge;
}

const nowAge = calcAge2(1999)
console.log(nowAge) 

//can easily change