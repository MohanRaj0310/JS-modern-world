/// average of n numbers

function totalAvg (d1,d2,d3){
  let average = (d1+d2+d3)/3;
  return average;
}

function operation (x,y,z){
  const average = totalAvg(x,y,z)
  return `The avergae of given number is ${average}`
}

const average = operation(23, 90, 67)
console.log(average)

//Review the code

// const age = 90;
// age = 78;// Uncaught TypeError: Assignment to constant variable
// console.log(age)
 