'use strict';

console.log(`new era and experience`)//executed before seeing error

let hasDriverLicense = false;
const passTest = true;

if (passTest){
  // hasDriversLicense = true;
  console.log(`take drive no issue`)
}

// const private = 39340;//Uncaught SyntaxError: Unexpected strict mode reserved word
// const if = true;//Uncaught SyntaxError: Unexpected token 'if'
// const interface = `video`; Uncaught SyntaxError: Unexpected strict mode reserved word

switch (1) {
  case 1:
    case 1:
      let forbids = 'something tobe forbidden'
      // forbid = `hides something`
      console.log(forbids)
    console.log('ee')
      break;
  default:
    // console.log(`am i going to live silently ${d}`)//strict_mode.js:21 Uncaught ReferenceError: forbid is not defined
}
