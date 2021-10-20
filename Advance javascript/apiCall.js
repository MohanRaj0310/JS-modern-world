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
console.log('huury buury')

let a = 90
console.log('wiuewi')
console.log('iiuii')
// const receiver = new XMLHttpRequest()
// console.log(receiver
console.log(undefined + 90)
console.log(undefined + NaN)
console.log(90 + 90)
console.log(typeof 90)

const ret = function (){
  console.log('dueeeeeeeeeeee')
}
console.log(ret)
// console.log(receiver)
console.log('deed')

console.log(ret)
console.log()














