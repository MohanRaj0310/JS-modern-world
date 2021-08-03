//while loop is versatile than for loop, don't need counter variable

//challenge--> roll a dice untill you get 6 whilest loop should be terminated

let dice = Math.trunc(Math.random() * 6 + 1)
// console.log(dice)
// console.log(Math.trunc(9.477373459348))//9

while (dice !== 6) {
  console.log(`Rolled a ${dice}`)
  dice = Math.trunc(Math.random() * 6 + 1)
  if (dice === 6) {
    console.log('dice roll about to end')
    break;
  }
}
this.x = 5

while (x < 10) {
  console.log(x);
  x++;
}


// from mdn
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
// x=1,x=3,x= 3
console.log(n)//3
console.log(x)//6
//0+1 = 1
//1+2 = 3
//3+3 = 6
//6+4 = 10

//prefix
// let i = 0;
// while (++i < 5) alert(i); //last value is 4

//postfix
// let i = 0;
// while (i++ < 5) alert(i); //last value is 5

let i = 0
console.log(i++)
console.log(i)//1
i =2;
console.log(++i)//3  is not an expression?
console.log(i)//3

let array = [
  i++,
  ++i,
  console.log(i),//5
  console.log(`${--i}`),//4
  console.log(`${i--}`),//4
  console.log(i)//3
]
