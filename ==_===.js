console.log('very good morning')

// === equality strict operator--> not performing for type coercion(str to num), value and it's type should be matched
let num = 18;

if (num === 18) {
  console.log('number is logged to as number type')
} 

if ('str' === "str"){
  console.log(1)
}

function sum (a, b){
  return a**b + (a+b)
}

const temp = sum(8, 9);
console.log(temp)

// loosing operator ==

console.log('18' ==18, Number() == String())
console.log('18' === 18, Number() === String())

// =, ==, === together

const constant = 304;

if (x = constant === typeof 90){
  console.log('extremly coded ')
} else {
  console.log(`so, statement wrong`)
}
console.log(x)

let exNum = 45

// let strToNum = 9Number(prompt(`what is your favoruite number`))
// console.log(strToNum)
let newPro = prompt(`number`)
console.log(newPro)

// out of topic***************************
console.log(0 === Number())// true**************
console.log(typeof true)
console.log(typeof 0);
console.log(typeof null)
console.log(typeof Object)


x = 0;
if (x) {

}else {

}
console.log('better luck next time')

let outLet = 90;
if (1){
  let inLet = outLet;
  console.log(inLet)
}

// console.log(undefined())
console.log(x = Number(`diid`))
console.log(typeof x)

let m = 90;
let b;
if (1){
  m = 9111;
  b = 78;
}
console.log(m);
console.log(b)



if ('str' === "str"){
  console.log(1)
  unreferVar = 90
}
function func2(){
  unreferVar = 78;
}
console.log(unreferVar)//90
func2()
console.log(unreferVar)//78

if (1){
  function func2(){
    unreferVar = 56;
    let d = 78
    var df= 90
  }
}
func2()
console.log(unreferVar)//56
// console.log(df)//undefined
















