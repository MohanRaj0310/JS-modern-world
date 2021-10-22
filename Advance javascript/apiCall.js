console.log('the most important useCase ajax in asychrnoius javacript')
// going to call api


/********************so that's the first step

of using the XML HTTP request way

of doing AJAX calls. */

// const request = new XMLHttpRequest()// the old way of http request
// request.open('GET', 'https://restcountries.com/v3.1/name/india')//1 -->type of request is GET to get a data .2 --> then we nee url that will make you ajax call so that ajax call should be made
// request.send()// send a request to this url, it might be running on the background or fetchin the data. this is non-blocking approach or we could say asynchrnous way. so that we don't want to wait untill it gets finished. after completing the send request,then it will emit load event
// // console.log(request.responseText)
// // we need to do is do register a call back for request object for load event in the background. we will wait for load event using this event listener// as soons as data arrives, this call back function gets executed
// request.addEventListener('load', function () {
//   // console.log(request.responseText)//json is big string of text. so we need to convert json to object
//   // console.log(this.responseText)// it work as same as prev line
//   // const data = JSON.parse(this.responseText)[0]
//   // const data = JSON.parse(this.responseText)//[{…}] so need objct inside of an array
//   const [data] = JSON.parse(this.responseText)//from object
//   console.log(data)
//   console.log(data.capital.toString(), data.maps.googleMaps)// newDelhi
// })
// // console.log(data)
// // console.log(request)
// // console.log(typeof request)// object
// console.log('huury up')

// const request = new XMLHttpRequest()
// request.open('GET', 'https://restcountries.com/v3.1/name/india')
// const data = request.send()
// console.log(data)//undefined

// request.addEventListener('load', function (){
//   const data = this.responseText
//   const [obj] = JSON.parse(data)
//   console.log(obj) 
// })
// console.log('huury buury')

// let a = 90
// console.log('wiuewi')
// console.log('iiuii')
// // const receiver = new XMLHttpRequest()
// // console.log(receiver
// console.log(undefined + 90)
// console.log(undefined + NaN)
// console.log(90 + 90)
// console.log(typeof 90)

// const ret = function (){
//   console.log('dueeeeeeeeeeee')
// }
// console.log(ret)
// // console.log(receiver)
// console.log('deed')

// console.log(ret)
// console.log()
// console.log('didiie')
// console.log('duude')
// console.log('')
// console.log('dei')

// a = 90
// console.log(a)

// a   =1000
// console.log(a)

// function checksVar (){
//   var a = 90//local scope or global scope
//   if(1){
//     let a = 56//lexical scope
//   }
//   if(1){
//     if(1){
//       if(1){
//         if(1){
//           var b = 34
//           let r = 56
//           var f = 23893789234789247893
//         }
//       }
//     }
//   }
//   if(1){
//     console.log(a)//lexical scope//90
//   }
//   console.log(a)//90
//   console.log(b)
//   console.log(f)
// }



// checksVar()
// console.log(a)

// console.log(f)
// let y = 45
// var  a = 100
// for (i = 0; i < 2; i++){
//   var a  = 90
//   let b = 78
// }

// console.log(a)//90
// console.log(y)

// function scope(){
//   var t = 56
//   console.log(t)
// }
// scope()
// // console.log(0/10, 10/ 0)

// if (1){
//   console.log(1)
//   var d = 2383089
// }

// console.log(10 /0 == true)//true
// console.log(false == false)
// let i = 0
// let i = 78
// console.log(i)

// var q = 90//com
// function sum () {
//   if (1){
//     q = 67
//     d = 89
//   }
// }
// sum()
// console.log(q)
// console.log(d)

//class declaration
class Polygon {
  constructor(height, width) {
    this.area = height * width;
    return this.area
  }
}

const retVal1 = new Polygon(2, 6)
const retVal2 = new Polygon(89, 6)
const retVal3 = new Polygon(2, 7)
console.log(retVal1)// Polygon {area: 12}
console.log(retVal2)
console.log(retVal3)


const obj = {
  title: 'diedj',
  num: 90,
  add: function (){
    console.log(this.num)
  }
}

obj.add()

// class SubClass extends Polygon {
//   constructor (){
//     super()
//     console.log(this.area)
//   }
// }

// const val2 = new SubClass()
// console.log(val2)








