// 5 falsy values are 0 '' null NaN undefined

// falsy values are not actually false value. then it becomes value wen convert it into boolean
// boolean conversion doesn't happen explicity
// implicitly in 2 scenario
      // 1. logical operator
      // 2. logical context like if-else statement

      
// let'see in action

console.log(Boolean(0,'', '')) //Takes 1 argument at a time
console.log(Boolean(NaN)) //Takes 1 argument at a time
console.log(Boolean(null)) //Takes 1 argument at a time
console.log(Boolean('')) //Takes 1 argument at a time
console.log(Boolean(undefined)) //Takes 1 argument at a time

console.log(Boolean(0>1))// false

//truthy
console.log(Boolean("fff"))//1
console.log(Boolean(true))//1
console.log(Boolean(58034))//1
console.log(Boolean(1))///1

// js does boolean work implicitily when if-else occur

const money = 0;

if (money){
  console.log(`don't spend it all`)
}else {
  console.log('should get a job')
}

let age = 12;

if (age > 18 /*implicitly work*/){
  if (age == 18){
    console.log(`wait for 6 month for validating`)
  } else {
    console.log(`apply asp for license`)
  }
} else {
  console.log(`should be turned 18. go away`)
  age = 18;
}

console.log(age)


let mass;

if (mass) {
  console.log(`ah it's defined`)
} else {
  console.log(`it's undefiend`)
}