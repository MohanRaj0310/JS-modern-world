//Array methods
  /*
  push --> returns array length
  pop--> returns removed element
  unshift--> returns array length
  shift--> returns removed element
  indexof--> index value, non-exist -1, default is -1
  includes(es6)-->returns either true or false ..non-exist false, default is false
  */
let age = 21;
const profile = [1999, voteNow = age >= 18 ? age : 'go away', 'mohanraj', [`bodinayakanur`, 625513, 'bob'], sum(990, 80)]
console.log(profile)//(5) [1999, ***21*****, 'mohanraj', Array(3), 1070]
console.log(voteNow)//21

let profile_3 = profile[3]; 
console.log(profile_3)
console.log(profile)//(5) [1999, 21, 'mohanraj', Array(3), 1070]

let profile_2 = profile[2]
console.log(profile_2)//mohanraj
console.log(profile)//(5) [1999, 21, 'mohanraj', Array(3), 1070]

function sum (x ,y){
  console.log('now i"m alive')
  return x + y;
}

//push
console.log(profile.push('going to insert'))//returns 6
profile.push(90, 90);//(8) [1999, 21, 'mohanraj', Array(3), 1070, 'going to insert', 90, 90]
profile.push(sum);//(9) [1999, 21, 'mohanraj', Array(3), 1070, 'going to insert', 90, 90, ƒ]
profile.push(sum(90,90))//(10) [1999, 21, 'mohanraj', Array(3), 1070, 'going to insert', 90, 90, ƒ, 180]
console.log(profile)

//unshift --> returns array length
profile.unshift('raj')
console.log(profile)

//shift
profile.shift()//remove the 0 index// returns removed the element
console.log(profile)

//pop

console.log(profile.pop());//remove the last index//returns removed element
console.log(profile)

//indexof//index number
console.log(profile.indexOf(1999))//0
console.log(profile.indexOf('mohanraj'))//2
console.log(profile.indexOf(8484994))//-1 for non-exist
console.log(profile.indexOf(age))//1***********************
console.log(profile.indexOf(voteNow))//1***************
console.log(profile.indexOf())//-1
console.log(profile.indexOf(Array))//-1
console.log(profile.indexOf(Array[3]))//-1
console.log(profile.indexOf(Array(3)))//-1
console.log(profile.indexOf(profile_3))//3
//includes es6 method --> returns either true or false ..non-exist -1
console.log(profile.includes(1070))//true
console.log(profile.includes('raj'))//false
console.log(profile.includes('uuuiui'))//false
console.log(profile.includes(voteNow))//true
console.log(profile.includes(age))//true
console.log(profile.includes(sum))//true
console.log(profile.includes(Array[3]))//false
console.log(profile.includes(Array))//false
console.log(profile.includes(Array(3)))//false
console.log(profile.includes(profile_3))//true
console.log(Array)//ƒ Array() { [native code] }
console.log(profile)
