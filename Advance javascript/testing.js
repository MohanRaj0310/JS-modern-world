//arrray destructuring
const [data, data1, ...rest] = [{
  id: 90,
  num: 78
},{
  id: 09,
  num: 78
},{
  id: 3,
  num: 78
}]
console.log(data)
console.log(data1)
console.log(rest)

const [data3] = [{
  id: 1,
  num: 09
}]
console.log(data3)
const str = 'html'

const html = (`
  <h3>${data3}</h3>
  <h3>${data3.id}</h3>
  <p>${rest}</p>
  <p>${str}</p>
`)
console.log(html)