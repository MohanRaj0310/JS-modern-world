let x = 90;
this.globalVar = 23
let val1;
var val2;
this.var3;
const mohan = {
  firstName: 'mohan',
  lastName: `raj`,
  job: 'software developer',
  year: '1999',
  friends: ['raj', 'sakthi', 'viki'],
  x : 23,
  y: x++,
  var3: 76,
  globalThis: this.globalVar,
  _console: console.log('from an object'),
  func2: function (x, y){
    this.func()
    // this.func3()//from [] function expression******************
    console.log(this.newVar = 'exciting one')
    console.log(this.newVar)
    console.log(this.newBraVar)
    let mehtodLet = 67
    var methodVar = 89
    this.func4(34, 33)
    console.log(val1)//34
    console.log(this.var3)//33
    return  `im from object`
  },
  func4 : function (x, y){
    console.log('to check i`m accessible in inside of another function')
    this.func()
    // console.log(mehtodLet)//not defined
    // console.log(methodVar)
    // x = x;
    val1 = x
    this.var3 = y
  }
}
console.log(mohan)
console.log(mohan.age = 90)//90

mohan.func = function (x,y){
  console.log('im from outside of the object')
}
// func();//is not defined
console.log(mohan.func2())

//[] notation
console.log(mohan['age'])//90
console.log(mohan['newBraVar'] = 'from[]')
mohan['func3'] = function (){
  console.log('from [] function')
}
mohan.func2()

console.log(x)//91
// mohan.func4()
// console.log(val1)




