console.log('Promises')

let getPosts = [
  {
    id: 1
  },
  {
    id: 2
  }, 'bangalore', { age : 90},
]

console.log(getPosts.length)
// getPosts.forEach((post, count, getBack, fifth) => {
//   console.log(post, count, getBack, fifth)
// }) 
getPosts.forEach((_1, _2 ,_3) => {
  console.log(_1, _2);
})

getPosts[getPosts.length - 1] = { title: 'lastOne'}
console.log(getPosts)

getPosts[getPosts.length - 1] = "fifth"
console.log(getPosts.length)
console.log(getPosts)

getPosts = ['k', 09099, true, false]
console.log(getPosts)

console.log('dieu')