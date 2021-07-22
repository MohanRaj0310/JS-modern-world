//BMI calculation
//compare two person, should print which one of them is higher

let markWeight, markHeight;
let johnWeight, johnHeight;
let markBMI, johnBMI, who_is_top;

// let x = 10, y = 90;
// console.log(x, y)

markHeight = 172, markWeight = 54;
johnHeight = 160, johnWeight = 45;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

who_is_top = markBMI >= johnBMI;

console.log('markBMI is ' + markBMI + ' higher than johnBMI ' + johnBMI);
console.log(who_is_top)