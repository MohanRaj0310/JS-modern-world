/***************Conversion***********/

  // number to string
  //string to number
  //number to boolean , boolean to number

console.log(Number());// 0
console.log(String()) // empty space

console.log(Number('90'), String());// 90, ''
console.log(Number('90'), String(13848));//90 '13848'

console.log(Boolean())// default value is 0
// console.log(undefined())// typeerror
// console.log(Null())//  Uncaught ReferenceError: Null is not defined
console.log(Object())// >{}
// console.log(BigInt()) //  Uncaught TypeError: Cannot convert undefined to a BigInt

//Null

console.log(Number('mohan'))// NaN--> Not an number
console.log(typeof NaN)// number***********


/**************Coercion*************/
console.log('i"m mohanraj' + 23 + 'years old')// type coercion
console.log('i"m mohanraj 23 years old')

console.log('im moahn' + String(23) + 'old')
console.log(`hii literals, es6 in ${Number('2016')}`)

//weird things in coersion

console.log('90'-'89', '90' + 90, 90+'90', '90' * 90, 90*'90', '90' / 5, 90 / '5')
//1 '9090' '9090' 8100 8100 18 18
console.log('90' % 5, 90 % '5')// 0 0
console.log('90' * '90')
console.log('90' + 90, 90+'90') // '9090' '9090'
console.log('90' - 80, 90-'80')// num num

// logical coercion same thing applied for what you have learned

console.log('90' > 78, '78' < 90) // true true

// Testing

console.log('90' + 78 + 78 + '56' - 45 - '56') // 90787755 (num)

/// assignment operator

let x = '90';
y = x *= 80;
z = x -=90;
r = x++;
g = x--;
console.log(x)
console.log(x, y, z,r,g)

