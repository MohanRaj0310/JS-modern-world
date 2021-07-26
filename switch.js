//switch statement

// case should be checked with === operator corrosponding value

const day = x = prompt(`Enter your day`)
console.log(x)
console.log(typeof prompt)// function

switch (day){
  case 'monday':
    if (1){
      let prompt_2 = alert(`have a nice week, don't get discourage, we're here to assist you`)
      console.log(`didn't see your second dialogue box then see first`)
      console.log(prompt_2)// undefined..check why is this happening
    }
    console.log(`weekdays plan to be structured`)
    break;
  case 'Tuesday':
  case 'wednesday':
  case 'Thursday':
  case 'friday':
    console.log(`according to structured plan, plan should be executed`)
    break;
  case 'saturday':
  case 'sunday':
    console.log(`mostly used to play the cricket`)
    break;
  default:
    console.log(`Give a valid day and there are 7 days only for week. don't make extra one enough😋😋`)
}