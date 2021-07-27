//don't repeat yourself or dry

let x;
let globalVar;
let q = 65;

var z = 78;

function logger(x, y){
  console.log(`hii developer console`)
  console.log(x)//23
  console.log(y)//16
  globalVar = x;
  let localVar = 90;
  console.log(localVar)//90
  console.log(q)//65
  z = 34;
  var a = 23;
}

logger(23, 16);

console.log(logger())//undefined
console.log(x)//undefined
// console.log(y)//not defined
console.log(globalVar)//undefined
// console.log(localVar)//is not defined
console.log(z)//34
// console.log(a)// is not defined

//arguments or parameter checking

let arg1, arg2;

function argsChecking (arg1, arg2){
  console.log(arg2, arg1)//undefined, undefined
}

argsChecking(23, 45);

//scene-2

let arg3, arg4;
arg3 = 2345; 
arg4 = 789;

function argsChecking2(arg3, arg4){
  console.log(arg3, arg4)//undefined, undefined
}

argsChecking2();

//scene 3

let arg34, ar32;
arg34 = 897, arg32 = 7678;

function argsChecking3(x, y){
  console.log(arg34,arg32)
  // console.log(x,y)
  return x + y;
}

const retVal = argsChecking3(arg34,arg32)
console.log(retVal)

//generic functions
var tempVar;

function add (x, y){
  if (x%2){
    console.log(`it's odd`)
    return tempVar = x;//
  } else {
    console.log(`it's even`)
  }
  console.log(x)//not working
}

add(23, 66)
console.log(tempVar)//23