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