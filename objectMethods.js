// 'use strict';
let globalVar = 56;
var var2 = 45;
this.y = 23;
// y = 56;//objectMethods.js:13 Uncaught ReferenceError: Cannot access 'c' before initialization
this.var2;
console.log(var2)//45
// calcAge();// Uncaught ReferenceError: calcAge is not defined

const mohan = {
  firstName: 'mohan',
  lastName: `raj`,
  job: 'software developer',
  year: '1999',
  globalVar3: globalVar,
  globalVar: var2,
  b: this.y,
  _console90: console.log(this.globalVar, this.globalVar3),
  _console2: console.log(this.y, this),//23,Window {window: Window, self: Window, document: document, name: '', location: Location, …}
  // _console3: console.log(this.birthYear, this===mohan, this==mohan),//undefined,objectMethods.js:20 Uncaught ReferenceError: Cannot access 'mohan' before initialization
  friends: ['raj', 'sakthi', 'viki'],
  x : 23 + this.y,
  // func: calcAge(),//is not defined
  // func: this.calcAge(),//not defined
  y: x++,//for var x before accessing
  q : c,//for let c in before accessing
  // w: p,//is not defined after initialization
  _console: console.log('from an object'),
  _console: console.log(x),
  undefined: undefined,
  // this.u: //unexpected token
  if : null,
  birthYear: 1999,
  birthYear: 2000,//can mutate the object property
  calcAge: function (birthYear){
    console.log(this)
    console.log(this == mohan)//true************/
    console.log(this === mohan)//true**************/
    console.log(2021-birthYear)
    console.log(this.c)//undefined
    console.log(this.x)
    console.log(this.globalVar)//45
    console.log(this.globalVar3)//56
    // console.log(this.'raj')//unexpected string
    console.log(this.birthYear)//2000
    console.log(this.birthYear + this.undefined)//NaN
    return 2021 - birthYear
  },
  // func: calcAge(),//is not defined
}

mohan.calcAge(1993)//28
console.log(this)//windowObject
console.log(mohan['calcAge(1999)'])//undefined
console.log(mohan['calcAge'](1999))//22***********************/
// console.log(mohan[calcAge()])//is not defined
console.log(mohan['eidi'])//undefined
// console.log(mohan[joie])//undefined


// var x= y;
// var y = 09;Uncaught SyntaxError: Identifier 'x' has already been declared
console.log(23 + undefined)//NaN


var x = 78;
console.log(x)//78
this.x = 67;
console.log(x)//67
console.log(x)//67
console.log(this.x)//67

let y = 45
this.y = 78;
console.log(y)//45
console.log(this.y)//78
y = 56;
console.log(y)//56
console.log(this.y)//78

// let c;// objectMethods.js:13 Uncaught ReferenceError: Cannot access 'c' before initialization in before acceesing
var c = 67;//gives undefined before acccessing the variable in object 

//for p
this.p = 78;//

this.y = 90;