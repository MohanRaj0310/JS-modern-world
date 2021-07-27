//don't repeat yourself or dry

let x;
let globalVar;
let globalVar2;
var global3;
let q = 65;

var z = 78;
var v;
var v1;//for parameter

function logger(x, y){
  console.log(`hii developer console`)
  console.log(x)//23
  console.log(y)//16
  globalVar = x;
  console.log(globalVar)
  global3 = x;
  console.log(x)
  console.log(global3)
  globalVar2 = 76474;
  let localVar = 90;
  console.log(localVar)//90
  console.log(q)//65
  z = 34;
  var a = 23;
  v = 5656;
  v1 = x;
  // let y = 45;//Uncaught SyntaxError: Identifier 'y' has already been declared
  // let x;//Uncaught SyntaxError: Identifier 'y' has already been declared
  // var x;
  // console.log(x);//23
  var io = x;
  console.log(io);//undefined
  x = 89;
  console.log(x)//89
  // var x = 45;
  // console.log(x)//45
}

logger(23, 16);

// console.log(logger())//undefined
console.log(x)//undefined
//console.log(y)//not defined
console.log(globalVar)
console.log(globalVar2)//
console.log(global3)
// console.log(localVar)//is not defined
console.log(z)//34
console.log(v);//5667
console.log(v1)

// console.log(a)// is not defined

//if -else scope

let x1;
var z1;

if (1){
  x1 = 90;
  z1 = 78;
  let x2 = 671;
  var y2 = 7778;
}
console.log(x1)//90
console.log(z1);//78
// console.log(x2, y2)// Uncaught ReferenceError: x2 is not defined
console.log(y2)//7778

//arguments or parameter checking

let arg1, arg2;

function argsChecking (arg1, arg2){
  console.log(arg2, arg1)//45, 23
}

argsChecking(23, 45);
console.log(arg1, arg2)//undefined
//scene-2

let arg3, arg4;
arg3 = 2345; 
arg4 = 789;

function argsChecking2(arg3, arg4){
  console.log(arg3, arg4)//undefined, undefined..parameter doesn't have value
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
var temp;
let xcc;

function add (x, y){
  if (x%2){
    console.log(`it's odd`)
    temp = 67;
    xcc = 77;
    return tempVar = x;//
  } else {
    console.log(`it's even`)
  }
  console.log(x)//not working
}

add(23, 66)
console.log(tempVar)//23
console.log(temp)//67
console.log(xcc)//77




