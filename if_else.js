let mohanage = 14;

if (mohanage >= 18) {
  console.log(`you can take driving license`)
} else {
  let yearsLeft = 18 - mohanage;
  console.log(`you are too young so, time to be taken licence for ${yearsLeft} years`)
}

// unknown fact of variable scope with in or outside

let x = 1990;

if (x <= 2000) {
  let century = 2000 - x;//block level scope. can't referencing in outside of this scope
  console.log(`in ${century} years , you will get century`)
} else {
  let century;
  console.log(`century is ${century}`)
}
// console.log(century)// is not defined

// for accessing the block level variable. let declare outisde of the scope

let x1 = 1;
let y;
if (x1) {
  y = 90;
} else {
  y = 100;
}
console.log(y)

// if var keyword

let w = 90;
var D;
if (w) {
  var D = 89;
} else {
  var D = 78;
}

console.log(D)

//check out
x = false;
if (x) {
  console.log(`is this block give appropriate spave to the console let's see`)
} else {

}
console.log('uruuf')
