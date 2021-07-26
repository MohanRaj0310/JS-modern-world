
//Logical operator

//mohan should have driverlicence and has goodVision and was not tired while driving
// aim is to drive the car even if fails to meet the criteria so, answer should be true

const hasDriverLicence = true
const hasGoodVision = false
const isTired = false

if (hasDriverLicence || hasGoodVision && !isTired) {
  if (1){
    console.log(0 || 1);
    console.log(`he met the statement.. no issue to drive the vehicle`)
    // return isTired = true;
  }
} else {
  console.log(`if one of them statement is false, try to be true it`)
}
  