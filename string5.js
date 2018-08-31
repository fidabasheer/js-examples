/*
5. Write a JavaScript function to convert a string in abbreviated form. Go to the editor
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."

 */
const abbrev_name=(str)=>{
 
  str=str.slice(0,str.indexOf(' ' )+2)
  return str.padEnd(str.length+1,'.')
}
console.log(abbrev_name("Robin Singh"));