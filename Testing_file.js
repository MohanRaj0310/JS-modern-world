///The power of the Functions
//don't repeat yourself or dry

let x;
let globalVar;
let globalVar2;
var global3;
let q = 65;
let y = 45;

var z = 78;
var v;
var v1;//for parameter

function logger(x, y, u, p){
  console.log(`hii developer console`)
  console.log(x)
  console.log(y)
  globalVar = o = x;
  console.log(o)//23
  console.log(y)//16
  console.log(globalVar)//23
  global3 = x;
  console.log(x)//23
  console.log(global3)//23
  globalVar2 = 76474;
  let localVar = 90;
  console.log(localVar)//90
  console.log(q)//65
  z = 34;
  var a = 23;
  v = 5656;
  v1 = x;
  // let y = 45;
  // let x;
  // var x;
  // console.log(x);
  var io = x;
  console.log(io);//23
  x = 89;
  console.log(x)//89
  // var x = 45;
  // console.log(x)
}

logger(23, 16);

// console.log(logger())
console.log(x)//undefined
// console.log(u,p)//not defined
//console.log(y)
console.log(globalVar)//23
console.log(globalVar2)//74...
console.log(global3)//23
// console.log(localVar)
console.log(z)
console.log(v);//5656
console.log(v1)//23

console.log(y)//45

// console.log(a)//

//if -else scope

let x1;
var z1;

if (1){
  x1 = 90;
  z1 = 78;
  let x2 = 671;
  var y2 = 7778;
}
console.log(x1)
console.log(z1);
// console.log(x2, y2)
console.log(y2)

//arguments or parameter checking

let arg1, arg2;

function argsChecking (arg1, arg2){
  console.log(arg2, arg1)
}

argsChecking(23, 45);
console.log(arg1, arg2)
//scene-2

let arg3, arg4;
arg3 = 2345; 
arg4 = 789;

function argsChecking2(arg3, arg4){
  console.log(arg3, arg4)
}

argsChecking2();
console.log(arg3, arg4)

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
  console.log(x)
}

add(23, 66)
console.log(tempVar)
console.log(temp)
console.log(xcc)




