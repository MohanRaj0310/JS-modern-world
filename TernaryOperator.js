//Expression, produce the value itself
//statement, doesn't produce the value itself

//expressions
console.log(90+90, true && false && true, `.................`)
const newVal = 7378383;

console.log(`${newVal} ...palceholder is expressions`)

//statement 
if (23 > 18){
  console.log(`18 is younger`)
  // console.log(`${if(){

  // }}`) gives error ..expression doesn't change to statement.
}

// But both are mingle. both are exist in js

// Ternary Operator

let age = 18

age >= 18 ? console.log(`u r eligible to vote`) : console.log(`don't apply for ${18 - age}`)

const isEligible = age >= 18 ? console.log(`u r eligible to vote`) : console.log(`don't apply for ${18 - age}`)
console.log(isEligible)// undefined
console.log(console.log(`marvelous practice da chlm`))// undefined

if (age < 18){
  console.log(`this is for maturity and right place to get you and authorise you. don't do it again`)
} else {
  console.log(`nothing to say, you are more than welcome`)
}

let ageValid = age < 18 ? `this is for maturity and right place to get you and authorise you. don't do it again` : `nothing to say, you are more than welcome`;
console.log(ageValid)

console.log(`like to have a drink if i were ${age >= 18 ? `18`: `poda`}`)

//challenge -4 
/*Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
GOOD LUCK  */

let billValue =275 + 40 + 430
console.log(billValue)
let tip;

if (billValue >= 50 && billValue <= 300){
  tip = 20/100;
} else{
  tip = 15/100;
}

const totalBill = tip === 15/100 ? `the usual tip for given value is ${billValue*tip}` : 'for given value, the tip is ${billValue*tip}'
console.log(totalBill)