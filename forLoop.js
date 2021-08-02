//the another control structure is loop statement

for (let rep = 2; rep <= 100; rep++){
  if (rep % 2){
    console.log(`${rep} is add`)
  } else {
    console.log(`${rep} is even`)
    rep += 1;
  }
}

// console.log(rep)//is not defined

function callFunc(rep){
  console.log(`i'm here to assist you for ${rep}`)
}

for (let rep = 1; rep <= 10; rep++){
  callFunc(rep)
}

for (var rep = 1; x = rep <= 10; y = x = rep++){
  // callFunc(rep)
  console.log('for var keyword')
}
console.log(rep)//11
console.log(x)//false
console.log(x)//false
console.log(y)//10***********************
console.log(x)//fasle
console.log(rep)//11

for (this.rep = 1; rep <= 10; rep++){
  // callFunc(rep)
  console.log('for this keyword')
}

var t = 90;
this.t = 98;
console.log(t, this.t)//98 98

this.u = 90;
var u = 56;
console.log(u, this.u)//56 56

this.r = 90;
r = 34;
console.log(r, this.r)//3434

w = 90;
this.w = 89;
console.log(w, this.w)//89 89