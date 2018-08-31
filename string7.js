/*
7. Write a JavaScript function to parameterize a string. Go to the editor
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa""
 */
const string_parameterize=(str)=>{
let i
  str=str.toLowerCase();
  for(i=0;i<str.length;i++)
      str=str.replace(' ','-');
  

 
  return str
}

console.log(string_parameterize("Robin Singh from USA."));